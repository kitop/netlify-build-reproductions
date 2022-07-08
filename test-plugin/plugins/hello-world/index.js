module.exports = {
  onPreBuild: (config) => {
    console.log('[onBuild] NETLIFY: ', process.env.NETLIFY);
    console.log('BUILD_ID: ', process.env.BUILD_ID);
    console.log('DEPLOY_ID: ', process.env.DEPLOY_ID);
    console.log('DEPLOY_PRIME_URL: ', process.env.DEPLOY_PRIME_URL);
    console.log('DEPLOY_URL: ', process.env.DEPLOY_URL);
  },
  onBuild: (config) => {
    console.log('[onBuild] NETLIFY: ', process.env.NETLIFY);
  },
  onPostBuild: (config) => {
    console.log('[onPostBuild] NETLIFY: ', process.env.NETLIFY);
  },
  onError: (config) => {
    console.log('[onError] NETLIFY: ', process.env.NETLIFY);
  },
  onSuccess: (config) => {
    console.log('[onSuccess] NETLIFY: ', process.env.NETLIFY);
  },
  onEnd: (config) => {
    console.log('[onEnd] NETLIFY: ', process.env.NETLIFY);
  },
};
