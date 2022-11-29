import urljoin from 'url-join';

function getAssetUrl(url: string) {
  let targetAssetUrl = url;

  if (process.env.NEXT_PUBLIC_PATH) {
    targetAssetUrl = urljoin(process.env.NEXT_PUBLIC_PATH, url);
  }

  return targetAssetUrl;
}

export { getAssetUrl };
