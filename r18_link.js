export default {
  async fetch(request, env, ctx) {
    document.write(`${env.plink}`);
  }
}
