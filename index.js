// Write your solution in this file!
var customerName = 'bob'
const leastCustomer = 'ray'

function upperCaseCustomerName() {
    window.customerName = customerName.toUpperCase()
    return window.customerName;
}

function setBestCustomer() {
    window.bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastCustomer = 'jacky'
    return leastCustomer
}