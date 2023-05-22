import type { H3Event } from "h3";

export async function useBody<T = any>(event: H3Event) {
  const body: T = (event.node.req as any).body || (await readBody<T>(event));
  if (!isObject(body)) {
    throw createError({
      statusCode: 400,
      message: "Invalid body",
    });
  }

  return body;
}
