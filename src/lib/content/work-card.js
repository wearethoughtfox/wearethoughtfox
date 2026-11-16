/**
 * The fields WorkGrid shows for a project. The list pages send these to the
 * browser rather than the whole project, which carries its rendered body.
 */
export function workCard({ slug, title, image, excerpt, year }) {
  return { slug, title, image, excerpt, year };
}
