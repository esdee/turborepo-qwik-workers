export function getTestEnvironment(): Record<string, any> {
  let env = getMiniflareBindings();
  //@ts-ignore
  env.API_DB = __D1_BETA__API_DB;
  return env;
}
