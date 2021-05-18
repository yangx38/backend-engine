const UnitSubunitModel = require('../models/systemadmin/unitsubunitmodel');
const SubmitterModel = require('../models/login/submittermodel');
const FiscalStaffModel = require('../models/login/fiscalstaffmodel');
const BudgetModel = require('../models/systemadmin/budgetmodel');

class SystemAdminCtl {
    // UnitSubunitModel
    async getAllUnitSubunit(ctx) { 
        ctx.body = await UnitSubunitModel.find({}, '-_id');
    }
    // SubmitterModel
    async getAllSubmitter(ctx) { 
        const allSubmitter = await SubmitterModel.find({}, '-_id');
        var submitterDataSource = [];
        allSubmitter.map(cur => {
            const { submitters, subunit } = cur;
            const subunitname = subunit.split('@')[0];
            const unitname = subunit.split('@')[1];
            submitters.map(submitter => {
                const { name, netId, key } = submitter;
                submitterDataSource.push({'key': key, 'name': name, 'netId': netId, 'subunit': subunitname, 'unit': unitname, 'type': 'submitter'})
            })
        })
        ctx.body = submitterDataSource;
    }
    // FiscalStaffModel
    async getAllFiscalStaff(ctx) { 
        const allFiscalStaff = await FiscalStaffModel.find({}, '-_id');
        var fiscalstaffDataSource = [];
        allFiscalStaff.map(cur => {
            const { fiscalstaffs, unit } = cur;
            fiscalstaffs.map(fiscalstaff => {
                const { name, netId, key } = fiscalstaff;
                fiscalstaffDataSource.push({'key': key, 'name': name, 'netId': netId, 'subunit': 'N/A', 'unit': unit, 'type': 'fiscal staff'})
            })
        })
        ctx.body = fiscalstaffDataSource;
    }
    // BudgetModel
    async getAllBudgets(ctx) { 
        ctx.body = await BudgetModel.find({}, '-_id');
    }



    
    // *************************** Test Data: 
    async createOneSubmitter(ctx) { 
        const temp = await new SubmitterModel(ctx.request.body).save();
        ctx.body = temp
    }
    async createOneFiscalStaff(ctx) { 
        const temp = await new FiscalStaffModel(ctx.request.body).save();
        ctx.body = temp
    }
    async createOneBudget(ctx) { 
        const temp = await new BudgetModel(ctx.request.body).save();
        ctx.body = temp
    }
    // async getAllSubunits(ctx) { 
    //     const unit = await UnitSubunitModel.find({ name: `${ctx.params.unitname}`}, '-_id children');
    //     if (!unit) { ctx.throw(404); }
    //     ctx.body = unit;
    // }
    // async updateUnitWithSubunits(ctx) { 
    //     const unit = await UnitSubunitModel.find({ name: `${ctx.params.unitname}`});
    //     if (!unit) { ctx.throw(404); }
    //     const res = await UnitSubunitModel.findByIdAndUpdate(unit[0]._id, ctx.request.body);
    //     ctx.body = res;
    // }
}

module.exports = new SystemAdminCtl();