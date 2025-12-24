import type { IResponse } from '../types/response';

/*************************************************************************************/
/*************************************************************************************/
/****************************** Type Extraction Tool *********************************/
/*************************************************************************************/
/*************************************************************************************/
export type ExtractApi<S> = S extends [infer Api, ...infer _] ? Api : never;
export type ExtractArgs<S> = S extends [infer _, ...infer Args] ? Args : never;

export type ExtractArgsLength<S> = S extends [infer _, ...infer Args]
  ? Args['length'] extends 0
    ? 1
    : Args['length']
  : never;

export type ExtractReturn<Api> = Api extends (
  ...args: any[]
) => Promise<IResponse<infer R>>
  ? R
  : never;

export type Flatten<T extends readonly any[]> = T extends [infer X, ...infer Y]
  ? X extends any[]
    ? [...X, ...Flatten<Y>]
    : [X, ...Flatten<Y>]
  : [];

/*************************************************************************************/
/*************************************************************************************/
/******************************** Basic Enum Types ***********************************/
/*************************************************************************************/
/*************************************************************************************/
export type EnumApi<T = unknown> = (...args: any[]) => Promise<IResponse<T>>;
export type EnumSource<T = any> = [EnumApi<T>, ...groups: any[]];
export type MutiEnumSources = EnumSource<unknown>[];

/*************************************************************************************/
/*************************************************************************************/
/********************************** Enum Results *************************************/
/*************************************************************************************/
/*************************************************************************************/
export type SourceApis<
  Source extends EnumSource,
  Count extends number = ExtractArgsLength<Source>,
  Apis extends ExtractApi<Source>[] = [],
> = Apis['length'] extends Count
  ? Apis
  : SourceApis<Source, Count, [...Apis, ExtractApi<Source>]>;

export type MutiSourceApis<T extends MutiEnumSources> = Flatten<{
  [K in keyof T]: T[K] extends EnumSource ? SourceApis<T[K]> : never;
}>;

export type MapSources<T> = {
  [K in keyof T]: ExtractReturn<T[K]>;
};

/*************************************************************************************/
/*************************************************************************************/
/***************************** Specific Implementations ******************************/
/*************************************************************************************/
/*************************************************************************************/
const map: Map<Function, Record<string, any>> = new Map();
const readEnumData = async <T = any>(
  api: ExtractApi<EnumSource<T>>,
  arg?: any
) => {
  !map.has(api) && map.set(api, {});

  const result = await api(arg);
  const enumData = result.data ?? [];

  map.get(api)![arg] = enumData;

  return enumData;
};
const tryReadEnumDataByCache = async <T = any>(
  api: ExtractApi<EnumSource<T>>,
  arg?: any
) => {
  if (map.has(api) && map.get(api)?.[arg]) {
    return map.get(api)![arg];
  }

  return readEnumData(api, arg);
};
const readEnum = <T extends MutiEnumSources>(
  sources: [...T],
  readFromCache: boolean
) => {
  const promises = [];
  const readEnumApi = readFromCache ? tryReadEnumDataByCache : readEnumData;

  for (let i = 0, len = sources.length; i < len; i++) {
    const [api, ...argGroups] = sources[i];

    if (argGroups.length) {
      argGroups.forEach(arg => promises.push(readEnumApi(api, arg)));
    } else {
      promises.push(readEnumApi(api));
    }
  }

  return Promise.all(promises) as Promise<MapSources<MutiSourceApis<T>>>;
};
export const useEnum = <T extends MutiEnumSources>(...sources: [...T]) => readEnum(sources, true);
export const useEnumNoCache = <T extends MutiEnumSources>(...sources: [...T]) => readEnum(sources, false);
