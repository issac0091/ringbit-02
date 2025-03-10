input.onGesture(Gesture.ScreenDown, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.turnright()
})
input.onGesture(Gesture.SixG, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.turnleft()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
RingbitCar.forward()
