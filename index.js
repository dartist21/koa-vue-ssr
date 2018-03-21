const Koa = require('koa');
const { asyncReadFile } = require('./helpers');

const PORT = 3001;

const app = new Koa();

app.use(async ctx => {
  ctx.body = await asyncReadFile('./dist/index.html', 'utf8');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
