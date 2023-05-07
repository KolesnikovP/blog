export type Mods = Record<string, boolean | string | undefined>

export function classNames(
  cls: string | undefined,
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
    ...additional.filter(Boolean),
  ].join(' ');
}
