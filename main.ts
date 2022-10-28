radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > dice) {
        basic.showNumber(dice)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    radio.sendNumber(dice)
    basic.showNumber(dice)
})
let dice = 0
radio.setGroup(1)
