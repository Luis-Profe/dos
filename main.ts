input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
