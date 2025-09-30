import { isNil } from "./is"

/**
 * Creates a new object composed of the picked object properties.
 *
 * This function takes an object and an array of keys, and returns a new object that
 * includes only the properties corresponding to the specified keys.
 *
 * @template T - The type of object.
 * @template K - The type of keys in object.
 * @param {T} obj - The object to pick keys from.
 * @param {K[]} keys - An array of keys to be picked from the object.
 * @returns {Pick<T, K>} A new object with the specified keys picked.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = pick(obj, ['a', 'c']);
 * // result will be { a: 1, c: 3 }
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(object: T, keys: readonly K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>

  keys.forEach(key => {
    if (isNil(key)) return
    if (!Object.hasOwn(object, key)) return

    result[key] = object[key]
  })

  return result
}
