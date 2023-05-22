import type { ShortRequest } from "../types";

export default eventHandler(async (event) => {
  const { url } = await useBody<ShortRequest>(event);
  if (!isValidURL(url)) {
    throw createError({ statusCode: 400, message: "Invalid URL" });
  }
  const slug = await short(url);

  return success({ slug });
});
