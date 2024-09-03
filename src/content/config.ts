import { defineCollection } from "astro:content";

const essaysCollection = defineCollection({
  type: "content",
});

const readingListCollection = defineCollection({
  type: "content",
});

export const collections = {
  'essays': essaysCollection,
  'readingList': readingListCollection,
};
