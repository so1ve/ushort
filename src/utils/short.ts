import { sha256 } from "hash-wasm";

export async function short(url: string) {
  const slug = await sha256(url).then((hash) => hash.slice(0, 8));
  if (!(await urlStorage.hasItem(slug))) {
    await urlStorage.setItem(slug, { url });
  }

  return slug;
}
