const ATMSettings = require('../models/ATM_settings.js');

const createValidationErrorMessage = (errors) =>
    errors.array().reduce((errorMessage, error) => ({
        msg: errorMessage.msg + "; " + error.msg
    }));

const createOutputMessage = (cashUnit, message) => message + cashUnit.value + " x" + cashUnit.amount + " | ";

const createOutputSlotsMessages = (resultCash) => {
    let slotOutput = {};

    resultCash.forEach((cashUnit) => {
        let unitDistributed = false;

        ATMSettings.getATMSlots().forEach((slot, i) => {
            if (!unitDistributed && cashUnit.type === slot.cashType && cashUnit.size <= slot.maxSize) {
                let slotMessage = slotOutput["slot" + (i + 1)] || "| ";
                slotOutput["slot" + (i + 1)] = createOutputMessage(cashUnit, slotMessage);

                unitDistributed = true;
            }
        });
    });

    return slotOutput;
};

module.exports = {
    createValidationErrorMessage,
    createOutputSlotsMessages
}