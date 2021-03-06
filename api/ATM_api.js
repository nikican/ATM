const arrayUtil = require('../util/array_util.js');

//mock data
let ATMCash = [{
        value: 1000,
        type: "note",
        size: 66.3, //height of 1 US Dollar bill
        amount: 10
    },
    {
        value: 500,
        type: "note",
        size: 66.3,
        amount: 10
    },
    {
        value: 200,
        type: "note",
        size: 66.3,
        amount: 10
    },
    {
        value: 100,
        type: "note",
        size: 66.3,
        amount: 10
    },
    {
        value: 50,
        type: "note",
        size: 66.3,
        amount: 10
    },
    {
        value: 20,
        type: "coin",
        size: 40,
        amount: 10
    },
    {
        value: 10,
        type: "coin",
        size: 20,
        amount: 10
    },
    {
        value: 5,
        type: "coin",
        size: 50,
        amount: 10
    },
    {
        value: 2,
        type: "coin",
        size: 30,
        amount: 10
    },
    {
        value: 1,
        type: "coin",
        size: 10,
        amount: 10
    }
]

const getATMCash = (errorFunction, successFunction) => {

    if (mockFetchSuccess()) {
        successFunction({ATMCash: arrayUtil.clone(ATMCash)});
    }else {
        errorFunction({error: "Fetch failed!"});
    }
}

const setATMCash = (newATMCash) => ATMCash = newATMCash;

const mockFetchSuccess = () => true; // mock happy path

module.exports = {
    getATMCash,
    setATMCash
}