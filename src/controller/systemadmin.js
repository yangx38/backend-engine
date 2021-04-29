const UnitSubunitModel = require('../models/systemadmin/unitsubunitmodel');

class SystemAdminCtl {
    async getAllUnitSubunit(ctx) { 
        ctx.body = await UnitSubunitModel.find({}, '-_id');
    }
    async createOneUnitSubunit(ctx) { 
        const systemAdmin = await new UnitSubunitModel(ctx.request.body).save();
        ctx.body = systemAdmin
    }
    async getAllSubunits(ctx) { 
        const unit = await UnitSubunitModel.find({ name: `${ctx.params.unitname}`}, '-_id children');
        if (!unit) { ctx.throw(404); }
        ctx.body = unit;
    }
    async updateUnitWithSubunits(ctx) { 
        const unit = await UnitSubunitModel.find({ name: `${ctx.params.unitname}`});
        if (!unit) { ctx.throw(404); }
        const res = await UnitSubunitModel.findByIdAndUpdate(unit[0]._id, ctx.request.body);
        ctx.body = res;
    }
    

    // async find(ctx) { 
    //     ctx.body  = await SystemAdminUnitSubunit.find();
    // }
    // async create(ctx) { 
    //     ctx.verifyParams({
            
    //     })
    //     const unitsubunit = await new SystemAdminUnitSubunit(ctx.request.body).save();
    //     ctx.body = unitsubunit
    // }
    // async findById(ctx) { 
    //     const unit = await SystemAdminUnitSubunit.findById(ctx.params.id);
    //     if (!unit) {
    //         ctx.throw(404, 'unit does not exist');
    //     }
    //     ctx.body = unit
    //     // ctx.body = db[ctx.params.id * 1];
    // }
    // async update(ctx) { 
    //     // db[ctx.params.id * 1] = ctx.request.body;
    //     // ctx.body = ctx.request.body;
    //     ctx.verifyParams({
    //         name: { type: 'string', required: true},
    //     })
    //     const unitsubunit = await SystemAdminUnitSubunit.findByIdAndUpdate(ctx.request.id, ctx.request.body);
    //     if (!unitsubunit) { ctx.throw(404); }
    //     ctx.body = unitsubunit
    // }
    // async delete(ctx) { 
    //     // db.splice(ctx.params.id*1, 1);
    //     // ctx.status = 204;
    //     const unitsubunit = await SystemAdminUnitSubunit.findByIdAndRemove(ctx.params.id);
    //     if (!unitsubunit) { ctx.throw(404); }
    //     ctx.status = 404;
    // }
}

module.exports = new SystemAdminCtl();