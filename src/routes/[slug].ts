import type { ShortData } from "../types";

export default eventHandler(async (event) => {
  const slug = event.context.params?.slug;
  if (!slug) {
    throw createError({ statusCode: 400, message: "Missing slug" });
  }
  const { url } = (await urlStorage.getItem(slug)) as ShortData;

  return sendRedirect(event, url, 301);
});
