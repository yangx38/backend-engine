// 内存数据库
const db = [{name: 'lei'}];

class SystemAdminCtl {
    find(ctx) { 
        ctx.body  = db;
    }
    create(ctx) { 
        db.push(ctx.request.body);
        ctx.body = ctx.request.body;
    }
    findById(ctx) { 
        ctx.body = db[ctx.params.id * 1];
    }
    update(ctx) { 
        db[ctx.params.id * 1] = ctx.request.body;
        ctx.body = ctx.request.body;
    }
    delete(ctx) { 
        db.splice(ctx.params.id*1, 1);
        ctx.status = 204;
    }
}

module.exports = new SystemAdminCtl();