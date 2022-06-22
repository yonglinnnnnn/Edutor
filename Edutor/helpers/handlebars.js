const moment = require('moment');

const formatDate = function (date, targetFormat) {
    return moment(date).format(targetFormat);
};

const replaceCommas = function (value) {
    return value ? value.replace(/,/g, ' | ') : 'None';
}

const isEqualHelperHandlerbar = function(a, b, opts) {
    if (a == b) {
        return opts.fn(this) 
    } else { 
        return opts.inverse(this) 
    } 
}


const Multiply = function(a, b) {
    return a * b;
}



module.exports = { formatDate, replaceCommas, isEqualHelperHandlerbar };