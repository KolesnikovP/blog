import { classNames } from './classNames';

describe('classNames', () => {
  test('only first params', () => {
    expect(classNames('firstParams')).toBe('firstParams');
  });
  test('with mods', () => {
    const expected = 'firstParams someMode';
    expect(classNames('firstParams', { someMode: true }, [])).toBe(expected);
  });
  test('with additional', () => {
    const expected = 'firstParams someAdditional';
    expect(classNames('firstParams', { someMode: false }, ['someAdditional'])).toBe(expected);
  });
  test('with mods and additional', () => {
    const expected = 'firstParams someMode someAdditional';
    expect(classNames('firstParams', { someMode: true, scrollable: false }, ['someAdditional'])).toBe(expected);
  });
  test('with undefined', () => {
    const expected = 'firstParams someMode';
    expect(classNames('firstParams', { someMode: true, scrollable: undefined }, [undefined])).toBe(expected);
  });
});
