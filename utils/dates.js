const dateToNumber = (date) => {
    const parts = date.split('-')
    const dateConcat = `${parts[2]}${parts[0]}${parts[1]}`
    return parseInt(dateConcat)
}

module.exports = {
    dateToNumber
}