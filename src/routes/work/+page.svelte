<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import WorkGrid from '$lib/components/blocks/WorkGrid.svelte';
  import { workNewestFirst } from '$lib/content/work.js';
  import { site } from '$lib/content/site.js';
</script>

<Seo
  title="Work"
  description="Selected projects by We Are Thought Fox: research, design, maps, data and web development for the International Criminal Court, Amnesty International, the BBC, WorldSkills and others."
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Work',
    itemListElement: workNewestFirst.map((w, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: w.title,
      url: `${site.url}/work/${w.slug}/`
    }))
  }}
/>

<h1 class="visually-hidden">Work</h1>
<WorkGrid items={workNewestFirst} meta="year" />
