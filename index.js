const Koa = require('koa');
const Router = require('koa-router');
const renderer = require('vue-server-renderer').createRenderer();
const { asyncReadFile } = require('./helpers');
const createApp = require('./app');

const PORT = 3001;
const app = new Koa();
const router = new Router();

router.get('*', async (ctx, next) => {
  try {
    const context = { url: ctx.request.url };
    const app = createApp(context);

    ctx.body = await renderer.renderToString(app);
  } catch (e) {
    console.log(e);
  }
});

app.use(router.routes());
// .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
