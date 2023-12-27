const linkguard = async ({ env }) => {
  return await next();
  document.write(env.linkp);
}
export const onRequest = [linkguard];
