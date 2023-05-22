export const isObject = (value: any): value is Record<string, any> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function isValidURL(url: string) {
  try {
    // eslint-disable-next-line no-new
    new URL(url);

    return true;
  } catch {
    return false;
  }
}
