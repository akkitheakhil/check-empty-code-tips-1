/**
 * @description isDataNotEmpty, is generic typescript function that checks if the given data is empty/null/undefined.
 * It will check for all the object types.
 * @param value can be of type any.
 * @returns boolean - True if Given Data is not empty.
 */

export function isDataNotEmpty<T>(value: T): value is NonNullable<T> {
  if (value == null) {
    return false;
  } else if (
    typeof value !== "number" &&
    typeof value === "string" &&
    value?.trim() === ""
  ) {
    return false;
  } else if (value === undefined) {
    return false;
  } else if (
    value !== null &&
    typeof value === "object" &&
    !Object.keys(value).length
  ) {
    return false;
  } else if (value !== null && Array.isArray(value) && !value.length) {
    return false;
  }
  return true;
}
