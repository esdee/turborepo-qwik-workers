type FooResult = {
  date: string;
  time: string;
};
export async function foo(db: D1Database): Promise<string> {
  if (!db) {
    throw new Error('db not found');
  }
  const dbRow = (await db
    .prepare('SELECT date() as date, time() as time;')
    .first()) as FooResult;
  if (dbRow.date === null || dbRow.time === null) {
    return 'error';
  }
  return 'ok';
}
