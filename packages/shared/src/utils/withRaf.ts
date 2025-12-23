export type RafWrapped<T extends (...args: any[]) => void> = ((
  ...args: Parameters<T>
) => void) & {
  cancel: () => void;
};

/**
 * Create a new function to wrap the specified function.
 *
 * This function takes one function argument, and returns
 * a new function to follow the execution of requestAnimationFrame.
 *
 * @template T - The type of the function to wrap.
 * @param {T} callback - The function to wrap.
 * @returns {RafWrapped<T>} - A new function to follow the execution of requestAnimationFrame.
 */
export function withRaf<T extends (...args: any[]) => void>(
  callback: T
): RafWrapped<T> {
  let rafId: number | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: ThisParameterType<T> | null = null;

  const wrapped = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    lastArgs = args;
    lastThis = this;

    if (rafId == null) {
      rafId = requestAnimationFrame(() => {
        rafId = null;

        if (lastArgs) {
          callback.apply(lastThis as ThisParameterType<T>, lastArgs);
          lastArgs = lastThis = null;
        }
      });
    }
  } as RafWrapped<T>;

  wrapped.cancel = () => {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    lastArgs = lastThis = null;
  };

  return wrapped;
}
