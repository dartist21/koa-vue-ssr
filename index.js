const Koa = require('koa');
const Router = require('koa-router');
const { asyncReadFile } = require('./helpers');

const PORT = 3001;

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = await asyncReadFile('./dist/index.html', 'utf8');
});

app.use(router.routes());
// .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
