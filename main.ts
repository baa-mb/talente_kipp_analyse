function anzeige () {
    serial.writeLine("" + convertToText(gerade) + " / " + convertToText(kurve))
}
let kurve = 0
let gerade = 0
basic.showIcon(IconNames.Yes)
anzeige()
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) != gerade) {
        gerade = input.rotation(Rotation.Pitch)
        anzeige()
    }
    if (input.rotation(Rotation.Roll) != kurve) {
        kurve = input.rotation(Rotation.Roll)
        anzeige()
    }
    basic.pause(500)
})
