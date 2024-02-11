const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];


function getToday() {
    const today = new Date();
    return {
        day: today.getDate(),
        month: {
            number: (today.getMonth() + 1),
            name: months[today.getMonth()]
        },
        year: today.getFullYear(),
        dayName: today.toLocaleDateString('en-US', { weekday: 'long' }),
        hour: today.getHours(),
        minute: today.getMinutes(),
        second: today.getSeconds()
    };
}


module.exports = { getToday };
