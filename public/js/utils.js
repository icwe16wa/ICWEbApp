function formatDateSingle(date) {
    var d = new Date(date);
    return d.toDateString().slice(3, 10) + " at " + d.toTimeString().slice(0, 5);
}

function sortDatesDescending(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime()
}

function breakLines(text){
    return text ? text.split('\n') : [];
}

function _addFilter(evt){
    webApp.$.events._filter = evt
}

