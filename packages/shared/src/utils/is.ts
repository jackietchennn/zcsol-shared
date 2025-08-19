export const getType = (value: any) => Object.prototype.toString.call(value);

export const isString = (value: any): value is string => getType(value) === '[object String]';

export const isNumber = (value: any): value is number => getType(value) === '[object Number]';

export const isBoolean = (value: any): value is boolean => getType(value) === '[object Boolean]';

export const isSymbol = (value :any): value is Symbol => getType(value) === '[object Symbol]'

export const isArray = <T>(value: any): value is T[] => getType(value) === '[object Array]';

export const isObject = (value: any): value is Record<string, any> => getType(value) === '[object Object]';

export const isFunction = (value: any): value is (...args: any[]) => any => getType(value) === '[object Function]';

export const isAsyncFunction = (value: any): value is (...args: any[]) => Promise<any> => getType(value) === '[object AsyncFunction]';

export const isPromise = <T>(value: any): value is Promise<T> => getType(value) === '[object Promise]';

export const isRegExp = (value: any): value is RegExp => getType(value) === '[object RegExp]';

export const isDate = (value: any): value is Date => getType(value) === '[object Date]'

export const isNull = (value: any): value is null => value === null;

export const isUndefined = (value: any): value is undefined => value === undefined;

export const isNil = (value: any): value is null | undefined => value === null || value === undefined;
