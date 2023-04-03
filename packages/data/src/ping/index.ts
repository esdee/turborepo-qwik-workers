export type FooResult = {
  date: string;
  time: string;
};
export async function foo(db: D1Database): Promise<FooResult> {
  const dbRow = await db
    .prepare('SELECT date() as date, time() as time; ')
    .first();
  return dbRow as FooResult;
}
