const Koa = require('koa');
const Router = require('koa-router');
const Vue = require('vue');
const { createRenderer } = require('vue-server-renderer');
const { asyncReadFile } = require('./helpers');

const PORT = 3001;
const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  try {
    const app = new Vue({
      template: `<div>Hello SSR!</div>`,
    });

    const context = {
      title: 'koa-vue-ssr',
      meta: `
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      `,
    };

    const renderer = createRenderer({
      template: await asyncReadFile('./index.html', 'utf8'),
    });

    ctx.body = await renderer.renderToString(app, context);
  } catch (e) {
    console.log(e);
  }
});

app.use(router.routes());
// .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
