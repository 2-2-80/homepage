const linkguard = async ({ env }) => {
  if (env.BASIC_AUTH !== 'true') {
    return await next();
    document.write(env.linkp);
  }