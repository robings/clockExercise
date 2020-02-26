let h, m, s
getTheTime()
let secondsRotationSet = s*(360/60)
let minutesRotationSet = (m*(360/60)) + ((s*(360/60))/60)
let hoursRotationSet = (h > 12 ? (h-12)*(360/12) : h*(360/12)) + ((m*(360/12))/60) + (((s*(360/12))/60)/60)

document.getElementById('secondsOuter').style.transform=`rotate(${secondsRotationSet}deg)`
document.getElementById('secondsOuter').style.transformOrigin='center'

document.getElementById('minutesOuter').style.transform=`rotate(${minutesRotationSet}deg)`
document.getElementById('minutesOuter').style.transformOrigin='center'

document.getElementById('hoursOuter').style.transform=`rotate(${hoursRotationSet}deg)`
document.getElementById('hoursOuter').style.transformOrigin='center'

document.getElementById('secondsJsSet').style.animation='animateClock 60s linear infinite'
document.getElementById('minutesJsSet').style.animation='animateClock 3600s linear infinite'
document.getElementById('hoursJsSet').style.animation='animateClock 43200s linear infinite'


setInterval(()=> {
    getTheTime()
}, 1000)

function getTheTime() {
    let dateNow = new Date()
    h = dateNow.getHours()
    m = dateNow.getMinutes()
    s = dateNow.getSeconds()
    printH = (h <10? '0' : '') + h
    printM = (m <10? '0' : '') + m
    printS = (s <10? '0' : '') + s
    document.getElementById('clock').textContent = `${printH}:${printM}:${printS}`
}