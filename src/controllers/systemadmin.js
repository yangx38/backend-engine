// 内存数据库
const SystemAdminUnitSubunit = require('../models/unitsubunit');

class SystemAdminCtl {
    async find(ctx) { 
        ctx.body  = await SystemAdminUnitSubunit.find();
    }
    async create(ctx) { 
        // db.push(ctx.request.body);
        // ctx.body = ctx.request.body;
        ctx.verifyParams({
            name: { type: 'string', required: true},
        })
        const unitsubunit = await new SystemAdminUnitSubunit(ctx.request.body).save();
        ctx.body = unitsubunit
    }
    async findById(ctx) { 
        const unit = await SystemAdminUnitSubunit.findById(ctx.params.id);
        if (!unit) {
            ctx.throw(404, 'unit does not exist');
        }
        ctx.body = unit
        // ctx.body = db[ctx.params.id * 1];
    }
    async update(ctx) { 
        // db[ctx.params.id * 1] = ctx.request.body;
        // ctx.body = ctx.request.body;
        ctx.verifyParams({
            name: { type: 'string', required: true},
        })
        const unitsubunit = await SystemAdminUnitSubunit.findByIdAndUpdate(ctx.request.id, ctx.request.body);
        if (!unitsubunit) { ctx.throw(404); }
        ctx.body = unitsubunit
    }
    async delete(ctx) { 
        // db.splice(ctx.params.id*1, 1);
        // ctx.status = 204;
        const unitsubunit = await SystemAdminUnitSubunit.findByIdAndRemove(ctx.params.id);
        if (!unitsubunit) { ctx.throw(404); }
        ctx.status = 404;
    }
}

module.exports = new SystemAdminCtl();