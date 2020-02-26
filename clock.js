let h, m, s
getTheTime()


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

    let secondsRotationSet = s*(360/60)
    let minutesRotationSet = (m*(360/60)) + ((s*(360/60))/60)
    let hoursRotationSet = (h > 12 ? (h-12)*(360/12) : h*(360/12)) + ((m*(360/12))/60)

    document.getElementById('clock').textContent = `${printH}:${printM}:${printS}`

    document.getElementById('seconds').style.transform=`rotate(${secondsRotationSet}deg)`
    document.getElementById('seconds').style.transformOrigin='center'

    document.getElementById('minutes').style.transform=`rotate(${minutesRotationSet}deg)`
    document.getElementById('minutes').style.transformOrigin='center'

    document.getElementById('hours').style.transform=`rotate(${hoursRotationSet}deg)`
    document.getElementById('hours').style.transformOrigin='center'
}