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
        var status = [];
        approvers.map((approver) => {
            const { netId, amount } = approver;
            if (amount == -1 || amount >= budgetamount) {
                approvers_forFormBudget.push(netId);
                status.push(0)
            }
        })
        ctx.body = await FormModel.findByIdAndUpdate(
            receipt_number, 
            { $push: { 'used_budget': { budgetnumber, budgetamount, 'approvers': approvers_forFormBudget, status, approver_comment: '', approver_comment_time: '' }} },
            {safe: true, upsert: true, new : true},
        );
    }
    async getFormsFromApproverNetId(ctx) {
        const formsFromApproverNetId = await FormModel.find({"used_budget": {$elemMatch: {"approvers": {$in: [`${ctx.params.netId}`]}}}}, '');
        if (!formsFromApproverNetId) { ctx.throw(404); }
        ctx.body = formsFromApproverNetId;
    }
    async approveAnBudget(ctx) {
        const idx = `${ctx.params.idx}`;
        const ft_selected_formdata = await FormModel.findById(`${ctx.params._id}`);
        const { used_budget, approval_needed } = ft_selected_formdata;
        let used_budgetCopy = JSON.parse(JSON.stringify(used_budget)); 
        const { approvers, status} = used_budgetCopy[idx];
        used_budgetCopy[idx] = {...used_budgetCopy[idx], approver_comment: `${ctx.request.body.comment}`, approver_comment_time: `${ctx.request.body.approver_comment_time}`};
        for (let i = 0; i < approvers.length; i++) {
            if(approvers[i] === `${ctx.params.netId}`) {
                status[i] = 1;
                break;
            }
        }
        if (approval_needed === 1) {
            ctx.body = await FormModel.findByIdAndUpdate(
                {_id: `${ctx.params._id}`}, 
                { used_budget: used_budgetCopy, approval_needed: approval_needed-1, form_status: 'approved by approvers' },
                {safe: true, upsert: true, new : true},
            );
        } else if (approval_needed === -1) {
            // 判断 approval_needed 如果可以 edit之后这个要改
            ctx.body = await FormModel.findByIdAndUpdate(
                {_id: `${ctx.params._id}`}, 
                { used_budget: used_budgetCopy, approval_needed: -1, form_status: 'declined by approvers' },
                {safe: true, upsert: true, new : true},
            );
        } else {
            ctx.body = await FormModel.findByIdAndUpdate(
                {_id: `${ctx.params._id}`}, 
                { used_budget: used_budgetCopy, approval_needed: approval_needed-1 },
                {safe: true, upsert: true, new : true},
            );
        }
    }
    async declineAnBudget(ctx) {
        const idx = `${ctx.params.idx}`;
        const ft_selected_formdata = await FormModel.findById(`${ctx.params._id}`);
        const { used_budget } = ft_selected_formdata;
        let used_budgetCopy = JSON.parse(JSON.stringify(used_budget)); 
        const { approvers, status} = used_budgetCopy[idx];
        used_budgetCopy[idx] = {...used_budgetCopy[idx], approver_comment: `${ctx.request.body.comment}`, approver_comment_time: `${ctx.request.body.approver_comment_time}`};
        for (let i = 0; i < approvers.length; i++) {
            if(approvers[i] === `${ctx.params.netId}`) {
                status[i] = -1;
                break;
            }
        }
        ctx.body = await FormModel.findByIdAndUpdate(
            {_id: `${ctx.params._id}`}, 
            { used_budget: used_budgetCopy, approval_needed: -1, form_status: 'declined by approvers' },
            {safe: true, upsert: true, new : true},
        );
    }
    async getFormsFromSubmitterNetId(ctx) {
        const formsFromSubmitterNetId = await FormModel.find({"form_creator_netId":`${ctx.params.netId}`}, '');
        if (!formsFromSubmitterNetId) { ctx.throw(404); }
        ctx.body = formsFromSubmitterNetId;
    }


    
    // Test Data: 
    
}

module.exports = new FormCtl();