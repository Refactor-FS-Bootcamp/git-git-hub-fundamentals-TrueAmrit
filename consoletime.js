setInterval(() => {
    var today = new Date()
    var hour = today.getHours()
    var minutes = today.getMinutes()
    var seconds =today.getSeconds()

    if (hour < 10) {
        hour = "0" + today.getHours()
    }
    if (minutes < 10) {
        minutes = "0" + today.getMinutes()
    }
    if (seconds < 10) {
        seconds = "0" + today.getSeconds()
    }

    console.log(`${hour}:${minutes}:${seconds}`)
}, 1000)

