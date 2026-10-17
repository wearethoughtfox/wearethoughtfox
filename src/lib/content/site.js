/** Site facts, formerly Jekyll's _config.yml */
export const site = {
  name: 'We Are Thought Fox',
  legalName: 'We Are Thought Fox Ltd',
  url: 'https://www.wearethoughtfox.com',
  title: 'We Are Thought Fox',
  homeTitle: "Hello! We're a design and development studio making the web",
  description:
    'A design and development studio 👽 making the web 💞 with an interdisciplinary approach 🦄',
  tagline: 'Making the web',
  email: 'hello@wearethoughtfox.com',
  calltoaction: 'Get in touch',
  footer: 'We Are Thought Fox Ltd, Registered in England and Wales, no. 8051628',
  ogImage: '/android-chrome-512x512.png',
  typedWords: ['delightful', 'readable', 'fast', 'open', 'make sense', 'trustworthy'],
  clients: [
    'International Criminal Court',
    'United Nations',
    'Amnesty International',
    'BBC',
    'Trinity Mirror',
    'The National',
    'WorldSkills',
    'Cafod',
    'Barjeel',
    'News International'
  ],
  nav: [
    { href: '/', label: 'Home' },
    { href: '/work/', label: 'Work' },
    { href: '/blog/', label: 'Blog' },
    { href: '/info/', label: 'Info' }
  ]
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    logo: `${site.url}/android-chrome-512x512.png`,
    description: site.description
  };
}
