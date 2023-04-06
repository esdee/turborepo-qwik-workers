import { foo } from '../src/date-utils/index';

describe('A simple test', () => {
  test('A named test', () => {
    const fooValue = foo(3);
    expect(fooValue).toBe(9);
  });
});
