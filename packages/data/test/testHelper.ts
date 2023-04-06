export type Bindings = {
  __D1_BETA__TEST_DB: D1Database;
};

export function getTestEnvironment(): Record<string, any> {
  let env = getMiniflareBindings();
  return env;
}

export function getTestDB(): D1Database {
  return getTestEnvironment().__D1_BETA__TEST_DB;
}
