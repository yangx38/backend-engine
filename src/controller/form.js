const FormModel = require('../models/form/formmodel');
const BudgetModel = require('../models/systemadmin/budgetmodel');

class FormCtl {
    // FormModel
    async createOneForm(ctx) {
        const oneFormData = await new FormModel(ctx.request.body).save();
        ctx.body = oneFormData._id;
    }
    async updateApproversOnForm(ctx) {
        const { budgetnumber, budgetamount, receipt_number } = ctx.request.body;
        const res = await BudgetModel.find({ budgetnumber: `${budgetnumber}`});
        if (!res || receipt_number === '') { ctx.throw(404); }
        
        const { approvers } = res[0];
        var approvers_forFormBudget = [];
        approvers.map((approver) => {
            const { netId, amount } = approver;
            if (amount == -1 || amount >= budgetamount) {
                approvers_forFormBudget.push(netId);
            }
        })
        ctx.body = await FormModel.findByIdAndUpdate(
            receipt_number, 
            { $push: { 'used_budget': { budgetnumber, 'approvers': approvers_forFormBudget }} },
            {safe: true, upsert: true, new : true},
        );
    }



    
    // Test Data: 
    
}

module.exports = new FormCtl();