export type Bindings = {
  API_DB: D1Database;
  API_KV: KVNamespace;
};

export function getTestEnvironment(): Record<string, any> {
  let env = getMiniflareBindings();
  //@ts-ignore
  env.API_DB = env.__D1_BETA__API_DB;
  //@ts-ignore
  env.API_KV = env.API_KV_TEST;
  return env;
}

export function getTestDB(): D1Database {
  return getTestEnvironment().API_DB;
}
