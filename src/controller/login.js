const SystemAdminModel = require('../models/login/systemadminmodel');
const FiscalStaffModel = require('../models/login/fiscalstaffmodel');
const BudgetModel = require('../models/systemadmin/budgetmodel');
const SubmitterModel = require('../models/login/submittermodel');


class LoginCtl {
    // SystemAdminModel
    async checkWhetherUserIsSystemAdministrator(ctx) { 
        const res = await SystemAdminModel.find({ netId: `${ctx.params.netId}`});
        if (res.length > 0) ctx.body = 1;
        else ctx.body = 0;
    }
    // FiscalStaffModel
    async checkWhetherUserIsFiscalStaff(ctx) {
        const fiscalstaff = await FiscalStaffModel.find({"fiscalstaffs": {$elemMatch: {netId:`${ctx.params.netId}`}}}, '-_id unit');
        var fiscalstaffJSON = [];
        fiscalstaff.map(cur => {
            const { unit } = cur;
            fiscalstaffJSON.push(unit);
        })
        ctx.body = {'fiscalStaffUnitsOfGivenNetId': fiscalstaffJSON};
    }
    // BudgetModel
    async checkWhetherUserIsApprover(ctx) {
        const approver = await BudgetModel.find({"approvers": {$elemMatch: {netId:`${ctx.params.netId}`}}}, '-_id budgetnumber');
        var approverJSON = [];
        approver.map(cur => {
            const { budgetnumber } = cur;
            approverJSON.push(budgetnumber);
        })
        ctx.body = {'approverBudgetNumberssOfGivenNetId': approverJSON};
    }

    // SubmitterModel
    async checkWhetherUserIsSubmitter(ctx) {
        const allSubmitter = await SubmitterModel.find({"submitters": {$elemMatch: {netId: `${ctx.params.netId}`}}}, '-_id');
        var submitterMap = new Map();
        allSubmitter.map(cur => {
            const { submitters, subunit } = cur;
            const subunitname = subunit.split('@')[0];
            const unitname = subunit.split('@')[1];
            submitters.map(submitter => {
                const { netId } = submitter;
                if (!submitterMap.get(unitname)) submitterMap.set(unitname, []);
                if (netId === `${ctx.params.netId}`) {
                    submitterMap.get(unitname).push(subunitname);
                }
            })
        })
        var submitterJSON = [];  
        submitterMap.forEach((val, key) => {
            const subunits = submitterMap.get(key);
            if (subunits.length > 0) {
                submitterJSON.push({'unit': key, 'subunits': subunits})
            }
        });
        ctx.body = {'submitterSubunitsOfGivenNetId': submitterJSON};
    }
}

module.exports = new LoginCtl();