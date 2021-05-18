const SystemAdminModel = require('../models/login/systemadminmodel');
const SubmitterModel = require('../models/login/submittermodel');
const FiscalStaffModel = require('../models/login/fiscalstaffmodel');

class LoginCtl {
    // SystemAdminModel
    async checkWhetherUserIsSystemAdministrator(ctx) { 
        const res = await SystemAdminModel.find({ netId: `${ctx.params.netId}`});
        if (res.length > 0) ctx.body = 1;
        else ctx.body = 0;
    }
    // SubmitterModel
    async checkWhetherUserIsSubmitter(ctx) {
        const allSubmitter = await SubmitterModel.find({}, '-_id');
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
    // FiscalStaffModel
    async checkWhetherUserIsFiscalStaff(ctx) {
        const allFiscalStaff = await FiscalStaffModel.find({}, '-_id');
        var fiscalstaffJSON = [];  
        allFiscalStaff.map(cur => {
            const { fiscalstaffs, unit } = cur;
            fiscalstaffs.map(fiscalstaff => {
                const { netId } = fiscalstaff;
                if (netId === `${ctx.params.netId}`) {
                    fiscalstaffJSON.push(unit)
                }
            })
        })
        ctx.body = {'fiscalStaffUnitsOfGivenNetId': fiscalstaffJSON};
    }
}

module.exports = new LoginCtl();