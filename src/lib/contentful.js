import { createClient } from "contentful";


const deliveryClient = createClient({
  space: "bdwftjmkbtqf",
  accessToken: "i1MLGHluIRzWXhjSH9nH40yTA3MF2bgAmWdcjqVYxQI",
});

const previewClient = createClient({
  space: "bdwftjmkbtqf",
  accessToken: "i1MLGHluIRzWXhjSH9nH40yTA3MF2bgAmWdcjqVYxQI",
  host: 'preview.contentful.com',
});

export const getClient = (isPreview = false) =>
  isPreview ? previewClient : deliveryClient;