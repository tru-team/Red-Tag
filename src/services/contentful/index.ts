import { getClient } from "../../lib/contentful"

export const getHeaderContent = async(isPreview = false) => {
  const client = getClient(isPreview);
  
  const entries = await client.getEntries({
    content_type: 'header',  // api id of your content type
    limit: 1,
  });

  return entries?.items?.[0]?.fields ?? null
}

export const getBannerContent = async(isPreview = false) => {
  const client = getClient(isPreview);
  
  const entries = await client.getEntries({
    content_type: 'heroSection',  // api id of your content type
    limit: 1,
  });

  return entries?.items?.[0]?.fields ?? null
}
