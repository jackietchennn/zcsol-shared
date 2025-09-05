import { isNil } from "./is";

/**
 * Creates a new object with specified keys omitted.
 * 
 * @template T - The type of object
 * @template K - The type of keys in object
 * @param {T} object - The object to omit keys from
 * @param {K[]} keys - An array of keys to be omitted from the object
 * @returns {Omit<T, K>} A new object with the specified keys omitted
 */
export const omit = <T extends Record<string, any>, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Omit<T, K> => {
  const result = { ...object };

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (isNil(key)) continue
    Reflect.deleteProperty(object, key);
  }

  return result as Omit<T, K>;
};
