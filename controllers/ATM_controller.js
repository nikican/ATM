const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
const ATMCashService = require('../services/ATM_cash_service');
const ATMapi = require('../api/ATM_api');
const ATMMessageService = require('../services/ATM_message_service');

let index = (req, res) => {
    res.render("withdrawal");
};

let getCash = [

    //validate 'amount' filed
    body('amount').trim()
    .exists().withMessage('Amount is required.')
    .isInt({allow_leading_zeroes: false}).withMessage('Leading zeroes are not allowed.')
    .isInt({min: 1}).withMessage('Amount must be positive number.'),

    // sanitize (trim and escape) the amount field and convert it to integer
    sanitizeBody('amount').trim().escape().toInt(),

    (req, res) => {

        // extract the validation errors from the request
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // validation errors
            req.flash("error", ATMMessageService.createValidationErrorMessage(errors).msg);
            res.redirect("back");
        } else {
            ATMCashService.getCash(req.body.amount, ATMapi.getATMCash(),
                ({error}) => {
                    req.flash("error", error);
                    res.redirect("back");
                },
                ({resultCash, cashData}) => {
                    ATMapi.setATMCash(cashData);

                    let outputViewObject = {
                        amount: req.body.amount, 
                        slots: ATMMessageService.createOutputSlotsMessages(resultCash)
                    }
                    
                    res.render("output", outputViewObject);
                }
            );
        }
    }
];

module.exports = {
    index,
    getCash
};