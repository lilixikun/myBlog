const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    ctx.msg = 'hello';
    return next();
});

app.use((ctx, next) => {
    ctx.msg += ' ';
    return next();
});

app.use((ctx, next) => {
    throw Error('炸了');
    ctx.msg += 'world';
    return next();
});

app.use((ctx, next) => {
    ctx.msg += 'world';
    return next();
});

app.use(ctx => {
    ctx.body = ctx.msg;
});

app.onerror = (err) => {
    console.log('捕获到了!', err.message);
}

app.listen(8000);