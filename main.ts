radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
radio.setGroup(5)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
