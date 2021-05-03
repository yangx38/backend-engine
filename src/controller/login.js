const SystemAdminModel = require('../models/login/systemadminmodel');
const PeopleModel = require('../models/systemadmin/peoplemodel');

class LoginCtl {
    // SystemAdminModel
    async checkWhetherUserIsSystemAdministrator(ctx) { 
        const res = await SystemAdminModel.find({ netId: `${ctx.params.netId}`});
        if (res.length > 0) ctx.body = 1;
        else ctx.body = 0;
    }
    // PeopleModel
    async checkWhetherUserIsFiscalStaff_OR_Submitter(ctx) {
        const allPeople = await PeopleModel.find({}, '-_id');
        var submitterSubunitsOfGivenNetId = [];
        var fiscalStaffSubunitsOfGivenNetId = [];
        allPeople.map(cur => {
            const { submitters, fiscalstaffs, subunit } = cur;
            submitters.map(submitter => {
                const { name, netId } = submitter;
                if (netId === `${ctx.params.netId}`) {
                    submitterSubunitsOfGivenNetId.push({'subunit': subunit})
                }
            })
            fiscalstaffs.map(fiscalstaff => {
                const { name, netId } = fiscalstaff;
                if (netId === `${ctx.params.netId}`) {
                    fiscalStaffSubunitsOfGivenNetId.push({'subunit': subunit})
                }
            })
        })
        ctx.body = {'submitterSubunitsOfGivenNetId': submitterSubunitsOfGivenNetId, 'fiscalStaffSubunitsOfGivenNetId': fiscalStaffSubunitsOfGivenNetId};
    }


        // async createOneSFiscalStaffModel(ctx) { 
        // const systemAdmin = await new FiscalStaffModel(ctx.request.body).save();
        // ctx.body = systemAdmin
}

module.exports = new LoginCtl();