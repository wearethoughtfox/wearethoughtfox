<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageBanner from '$lib/components/blocks/PageBanner.svelte';
  import ContactBand from '$lib/components/blocks/ContactBand.svelte';
  import { site, organizationSchema } from '$lib/content/site.js';
</script>

<Seo
  title="Contact us"
  description="Got a web project? Here's how We Are Thought Fox can help: engaging stories, new story formats and tools, and making big projects focus on user needs."
  jsonLd={[
    organizationSchema(),
    { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact us', url: `${site.url}/info/` }
  ]}
/>

<PageBanner>
  <h2 class="info__intro">Got a <span class="primary">web project</span>?</h2>
  <h1 class="info__title">Here's how we can help you</h1>
</PageBanner>

<article class="info measure">
  <h2>1. Engage your users with delightful stories</h2>
  <p>If you have a story, theme or a set of users you want to reach, we will work with you to figure out the best approaches. We will design and build the story taking a device-agnostic approach and using analytics and data to evaluate how the stories are performing and find ways to improve them. It could be a map, a multimedia long-form article, a news app, something built around Twitter or Facebook or something incorporating video and audio. We’ve done projects like this for clients such as Amnesty, Cafod, MSN, the International Criminal Court and the IPPF.</p>

  <h2>2. Develop new story formats and tools</h2>
  <p>If you have an idea for a new way of telling a story and engaging your users, we can design and build it quickly and test it based on specific user goals. Or perhaps you have day-to-day task you’d like your journalists to be able to achieve such as making a map, quiz or image slider. We build easy-to-use tools for journalists taking a web-standards based approach (HTML, CSS, JavaScript). We’ve done projects like this for the BBC, News International and Trinity Mirror.</p>

  <h2>3. Make your big project focus on user needs</h2>
  <p>We have lots of experience going in to big digital projects, understanding them and then making them serve the needs of users better. We can sit between you and your existing agency to get more value for you and your users. We've done projects like this for REC and TAQA.</p>
</article>

<ContactBand showHelpLink={false} />

<style>
  .info__intro {
    font-size: var(--size-f4);
    color: var(--color-secondary);
  }

  .info__title {
    font-size: var(--size-f1);
    margin-block-start: 0;
    color: var(--color-secondary);
  }

  .info {
    padding: 0 1rem 4rem;
  }

  .info h2 {
    margin-block-start: 1.5rem;
  }

  @media screen and (min-width: 30em) {
    .info {
      padding-inline: 2rem;
    }
  }

  @media screen and (min-width: 50em) {
    .info__intro {
      font-size: var(--size-f2);
    }

    .info__title {
      font-size: var(--size-subheadline);
    }
  }
</style>
