export function getTestEnvironment(): Record<string, any> {
  let env = getMiniflareBindings();
  //@ts-ignore
  env.API_DB = env.__D1_BETA__API_DB;
  //@ts-ignore
  env.API_KV = env.API_KV_TEST;
  return env;
}
