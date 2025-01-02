import {
  getCollection,
  type AnyEntryMap,
  type CollectionEntry,
  type DataEntryMap,
  type Flatten,
} from "astro:content";

export function buildStaticPaths<
  C extends keyof AnyEntryMap,
  E extends CollectionEntry<C>,
>(items: E[]) {
  return items.map((item) => ({
    // Otherwise it will not recognize the root index as /
    params: { slug: item.slug == "index" ? "" : item.slug },
    props: item,
  }));
}

export function getChildren<
  C extends keyof AnyEntryMap,
  E extends CollectionEntry<C>,
>(items: E[], slug: string): E[] {
  // Because the root-root index slug is "index", while in subfolders it is just an empty string
  const indexlessSlug = slug.endsWith("index")
    ? slug.slice(0, slug.length - "index".length)
    : slug;

  // filter children that are direct descendants of the current slug
  return items.filter((item) => {
    return (
      item.slug &&
      item.slug.startsWith(indexlessSlug) &&
      item.slug !== slug &&
      // check postfix, taking only 1 level deep paths
      item.slug.slice(indexlessSlug.length + 1).split("/").length < 2
    );
  });
}
