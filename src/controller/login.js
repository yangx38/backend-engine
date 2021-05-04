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
        var submitterMap = new Map();
        var fiscalStaffMap = new Map();
        allPeople.map(cur => {
            const { submitters, fiscalstaffs, subunit } = cur;
            const subunitname = subunit.split('@')[0];
            const unitname = subunit.split('@')[1];
            submitters.map(submitter => {
                const { netId } = submitter;
                if (!submitterMap.get(unitname)) submitterMap.set(unitname, []);
                if (netId === `${ctx.params.netId}`) {
                    submitterMap.get(unitname).push(subunitname);
                }
            })
            fiscalstaffs.map(fiscalstaff => {
                const { netId } = fiscalstaff;
                if (!fiscalStaffMap.get(unitname)) fiscalStaffMap.set(unitname, []);
                if (netId === `${ctx.params.netId}`) {
                    fiscalStaffMap.get(unitname).push(subunitname);
                }
            })
        })
        var submitterJSON = [];  
        submitterMap.forEach((val, key) => {
            submitterJSON.push({'unit': key, 'subunits': submitterMap.get(key)})
        });
        var fiscalStaffJSON = [];  
        fiscalStaffMap.forEach((val, key) => {
            fiscalStaffJSON.push({'unit': key, 'subunits': fiscalStaffMap.get(key).sort()})
        });
        ctx.body = {'submitterSubunitsOfGivenNetId': submitterJSON, 'fiscalStaffSubunitsOfGivenNetId': fiscalStaffJSON};
        //ctx.body = submitterMap;
       // ctx.body = {'submitterSubunitsOfGivenNetId': submitterSubunitsOfGivenNetId, 'fiscalStaffSubunitsOfGivenNetId': fiscalStaffSubunitsOfGivenNetId};
        // const allPeople = await PeopleModel.find({}, '-_id');
        // var submitterSubunitsOfGivenNetId = [];
        // var fiscalStaffSubunitsOfGivenNetId = [];
        // allPeople.map(cur => {
        //     const { submitters, fiscalstaffs, subunit } = cur;
        //     submitters.map(submitter => {
        //         const { netId } = submitter;
        //         if (netId === `${ctx.params.netId}`) {
        //             submitterSubunitsOfGivenNetId.push(subunit)
        //         }
        //     })
        //     fiscalstaffs.map(fiscalstaff => {
        //         const { netId } = fiscalstaff;
        //         if (netId === `${ctx.params.netId}`) {
        //             fiscalStaffSubunitsOfGivenNetId.push(subunit)
        //         }
        //     })
        // })
        // ctx.body = {'submitterSubunitsOfGivenNetId': submitterSubunitsOfGivenNetId, 'fiscalStaffSubunitsOfGivenNetId': fiscalStaffSubunitsOfGivenNetId};
    }


        // async createOneSFiscalStaffModel(ctx) { 
        // const systemAdmin = await new FiscalStaffModel(ctx.request.body).save();
        // ctx.body = systemAdmin
}

module.exports = new LoginCtl();