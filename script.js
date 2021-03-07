const newYear = '1 Jan 2022'

function countdown() {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()

    const totalSeconds = Math.floor(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24)

    const hours = Math.floor(totalSeconds / 3600) % 24

    const minutes = (Math.floor(totalSeconds / 60)) % 60

    const seconds = Math.floor(totalSeconds % 60);

    var d = document.getElementById('days')
    var h = document.getElementById('hours')
    var m = document.getElementById('mins')
    var s = document.getElementById('seconds')

    d.innerHTML = formatTime(days);
    h.innerHTML = formatTime(hours);
    m.innerHTML = formatTime(minutes);
    s.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000)

