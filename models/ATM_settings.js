const ATMSlots = [
    {
        cashType: "note",
        maxSize: 100
    },
    {
        cashType: "coin",
        maxSize: 20
    },
    {
        cashType: "coin",
        maxSize: 50
    },
];

const getATMSlots = () => ATMSlots.sort((a, b) => {
    if (a.cashType === b.cashType) {
        // sort slots for same chash type by size, ascending
        return a.maxSize - b.maxSize
    } else {
        // "note" comes before "coin"
        return a.cashType === "note" ? -1 : 1;
    }
});

module.exports = {
    getATMSlots
}