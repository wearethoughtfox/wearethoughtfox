import { marked } from 'marked';
import { parse as parseYaml } from 'yaml';

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

/** Decode entities in a string, or in each string of a list */
function decodeValue(v) {
  if (Array.isArray(v)) return v.map(decodeValue);
  return decodeEntities(v);
}

/**
 * Front matter parser. The YAML is read by the `yaml` package, the library
 * Sveltia CMS writes with, so anything the CMS saves (a long excerpt folded
 * over several lines, a quoted string, a nested list) reads back correctly.
 *
 * The `failsafe` schema keeps every scalar a string, as the hand-written
 * parser this replaces did: a date stays the text that was typed, and
 * `featured: true` stays 'true'. The loaders already expect that.
 * `uniqueKeys: false` lets an old Jekyll file with a repeated key through,
 * the last one winning.
 */
export function parseFrontMatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const parsed = parseYaml(m[1], { schema: 'failsafe', uniqueKeys: false }) ?? {};
  const data = {};
  for (const [key, value] of Object.entries(parsed)) {
    // An empty value is left undefined, not null or '', so `||` fallbacks
    // in the loaders behave as before.
    data[key] = value === null || value === '' ? undefined : decodeValue(value);
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
