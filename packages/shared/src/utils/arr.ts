/**
 * Create an array from enum
 *
 * @param {Enum} e - enum object
 * @param {Array<keyof T>} specifiedKeys - specified keys to convert to array
 * @returns An array of specified enum items
 * 
 * @example
 * enum StatusEnum {
 *   Pending = 'pending',
 *   Approved = 'approved',
 *   Rejected = 'rejected',
 *   Canceled = 'canceled',
 *   Completed = 'completed',
 * }
 * const statusOptions = mapEnumToArray(StatusEnum)
 * // result will be [
 * //   { value: 'pending', label: 'Pending' }, 
 * //   { value: 'approved', label: 'Approved' }
 * //   { value: 'rejected', label: 'Rejected' }, 
 * //   { value: 'canceled', label: 'Canceled' }
 * //   { value: 'completed', label: 'Completed' }
 * // ]
 * const statusOptions = mapEnumToArray(StatusEnum, ['Pending', 'Approved'])
 * // result will be [
 * //   { value: 'pending', label: 'Pending' }, 
 * //   { value: 'approved', label: 'Approved' }
 * // ]
 */
export const mapEnumToArray = <T extends Record<string, number | string>>(
  e: T,
  specifiedKeys?: Array<keyof T>
) => {
  return (specifiedKeys ?? Object.keys(e))
    .filter(key => isNaN(Number(key)))
    .map(key => {
      return {
        label: key,
        value: e[key as keyof T],
      };
    });
};
