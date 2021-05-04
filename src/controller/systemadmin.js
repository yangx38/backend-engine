const UnitSubunitModel = require('../models/systemadmin/unitsubunitmodel');
const BudgetModel = require('../models/systemadmin/budgetmodel');
const PeopleModel = require('../models/systemadmin/peoplemodel');

class SystemAdminCtl {
    // UnitSubunitModel
    async getAllUnitSubunit(ctx) { 
        ctx.body = await UnitSubunitModel.find({}, '-_id');
    }
    async getAllSubunits(ctx) {
        const allChildren = await UnitSubunitModel.find({}, 'children');
        var allSubunits = [];
        allChildren.map(cur => {
            const { children } = cur;
            return children.map(item => {
                allSubunits.push(item.key)
            })
        })
        ctx.body = allSubunits;
    }
    // PeopleModel
    async getAllPeople(ctx) { 
        const allPeople = await PeopleModel.find({}, '-_id');
        var peopleTableDataSource = [];
        allPeople.map(cur => {
            const { submitters, fiscalstaffs, subunit } = cur;
            const subunitname = subunit.split('@')[0];
            submitters.map(submitter => {
                const { name, netId } = submitter;
                peopleTableDataSource.push({'name': name, 'netId': netId, 'type': 'submitter', 'subunit': subunitname})
            })
            fiscalstaffs.map(fiscalstaff => {
                const { name, netId } = fiscalstaff;
                peopleTableDataSource.push({'name': name, 'netId': netId, 'type': 'fiscalstaff', 'subunit': subunitname})
            })
        })
        ctx.body = peopleTableDataSource;
    }
    async getPeopleOfUnit(ctx) { 
        const peopleOfUnit = await PeopleModel.find({ unit: `${ctx.params.unit}`});
        if (!peopleOfUnit) { ctx.throw(404); }
        var peopleOfUnitFlat = [];
        peopleOfUnit.map(cur => {
            const { submitters, fiscalstaffs, subunit } = cur;
            const subunitname = subunit.split('@')[0];
            submitters.map(submitter => {
                const { name, netId } = submitter;
                peopleOfUnitFlat.push({'name': name, 'netId': netId, 'type': 'submitter', 'subunit': subunitname})
            })
            fiscalstaffs.map(fiscalstaff => {
                const { name, netId } = fiscalstaff;
                peopleOfUnitFlat.push({'name': name, 'netId': netId, 'type': 'fiscalstaff', 'subunit': subunitname})
            })
        })
        ctx.body = peopleOfUnitFlat;
    }
    async getPeopleOfSubunit(ctx) { 
        const peopleOfSubunit = await PeopleModel.find({ subunit: `${ctx.params.subunit}`});
        if (!peopleOfSubunit) { ctx.throw(404); }
        var peopleOfSubunitFlat = [];
        peopleOfSubunit.map(cur => {
            const { submitters, fiscalstaffs, subunit } = cur;
            const subunitname = subunit.split('@')[0];
            submitters.map(submitter => {
                const { name, netId } = submitter;
                peopleOfSubunitFlat.push({'name': name, 'netId': netId, 'type': 'submitter', 'subunit': subunitname})
            })
            fiscalstaffs.map(fiscalstaff => {
                const { name, netId } = fiscalstaff;
                peopleOfSubunitFlat.push({'name': name, 'netId': netId, 'type': 'fiscalstaff', 'subunit': subunitname})
            })
        })
        ctx.body = peopleOfSubunitFlat;
    }
    // BudgetModel
    async getAllBudgets(ctx) { 
        ctx.body = await BudgetModel.find({}, '-_id budgetnumber budgetname');
    }



    

    // async createOneUnitSubunit(ctx) { 
    //     const systemAdmin = await new UnitSubunitModel(ctx.request.body).save();
    //     ctx.body = systemAdmin
    // }
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