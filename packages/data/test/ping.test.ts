import { describe, expect, test } from 'vitest';
import { ping } from '../src/ping';
import { getTestDB } from './testHelper';

describe('It should ping', () => {
  test('It should ping', async () => {
    const db = getTestDB();
    const result = await ping(db);
    expect(result).toBe('ok');
  });
});
