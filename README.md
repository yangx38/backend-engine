# backend-engine

从formmodels中 由人找
{"used_budget": {$elemMatch: {"approvers": {$in: ["yangx38"]}}}}

从formmodels中 由Budget找
{"used_budget": {$elemMatch: {budgetnumber: "62-0372"}}}

如果你要使用 await 的话, 必须在 async 的函数里面
(async () => {
    const res = await fetch('//api.github.com/users')
    const json = await res.json();
    console.log(json);
    const res2 = await fetch('//api.github.com/users/yangx38')
    const json2 = await res2.json();
    console.log(json2);
})()

app.use(async (ctx, next) => {
    await next(); // await -- 等执行完异步操作后再返回 Hello World

    ctx.body = 'Hello World'
})

密码: engineproject

mongodb+srv://yangx38:<password>@cluster0.ohrjt.mongodb.net/backend_engine?retryWrites=true&w=majority


put相当与update