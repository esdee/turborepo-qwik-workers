import api from '../src/index';

const env = getMiniflareBindings();

describe('A first test', () => {
  test('A named test', () => {
    expect(1).toBe(1);
  });
});
