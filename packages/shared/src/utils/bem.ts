/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type Mod = string | Array<Mod> | Record<string, boolean>;
export type Bem = (el?: Mod, mods?: Mod) => string;

const genMods = (name: string, mods?: Mod): string => {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret: string, item) => ret + genMods(name, item), '');
  }

  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genMods(name, key) : ''), '');
};

export const createBEM =
  (name: string): Bem =>
  (el?: Mod, mods?: Mod): string => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${genMods(el, mods)}`;
  };

export const createNamespace =
  (root: string) =>
  (name: string): [Bem, string] => {
    const space = `${root}-${name}`;
    return [createBEM(space), space];
  };
