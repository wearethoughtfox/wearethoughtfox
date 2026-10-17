import { marked } from 'marked';

marked.use({ gfm: true, breaks: false });

/** Decode the few HTML entities that appear in front matter strings */
export function decodeEntities(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&nbsp;/g, ' ');
}

function unquote(v) {
  v = v.trim();
  if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
    return v.slice(1, -1).replace(/''/g, "'");
  }
  return v;
}

/**
 * Minimal YAML front matter parser covering what the Jekyll content uses:
 * scalar keys, quoted strings, and simple `- item` lists.
 */
export function parseFrontMatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  let currentKey = null;
  for (const line of m[1].split(/\r?\n/)) {
    const li = line.match(/^\s*-\s+(.*)$/);
    if (li && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(decodeEntities(unquote(li[1])));
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      const v = kv[2].trim();
      data[currentKey] = v === '' ? undefined : decodeEntities(unquote(v));
    }
  }
  return { data, body: raw.slice(m[0].length) };
}

/** Render Markdown (with the odd bit of raw HTML) to an HTML string */
export function renderMarkdown(md) {
  const cleaned = md
    // kramdown inline attribute lists such as {:.strike} → plain class span is lost; apply as class on preceding link
    .replace(/\]\(([^)]+)\)\{:\.([a-z-]+)\}/g, '](<$1> "class:$2")')
    .replace(/\{:[^}]*\}/g, '');
  let html = marked.parse(cleaned);
  // Turn our class marker into a real class attribute
  html = html.replace(/<a href="([^"]+)" title="class:([a-z-]+)">/g, '<a href="$1" class="$2">');
  html = html.replace(/<img /g, '<img loading="lazy" decoding="async" ');
  return html;
}

/** Date from front matter, falling back to the YYYY-MM-DD filename prefix */
export function resolveDate(data, filename) {
  if (data.date) {
    const d = new Date(String(data.date).replace(' ', 'T'));
    if (!isNaN(d)) return d;
  }
  const m = filename.match(/(\d{4}-\d{2}-\d{2})/);
  return m ? new Date(m[1]) : new Date(0);
}

/** Slug from filename, minus the date prefix and extension */
export function filenameSlug(path) {
  const base = path.split('/').pop().replace(/\.(md|markdown)$/, '');
  return base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function cleanSlug(s) {
  return String(s).replace(/^\/+|\/+$/g, '').split('/').pop();
}

/** "09 September 2018", matching Jekyll's date_to_long_string */
export function longDate(d) {
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = d.toLocaleDateString('en-GB', { month: 'long', timeZone: 'UTC' });
  return `${day} ${month} ${d.getUTCFullYear()}`;
}
