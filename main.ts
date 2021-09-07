input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    if (direction == "Horizontal") {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    } else if (direction == "Vertical") {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (direction == "Horizontal") {
        direction = "Vertical"
    } else if (direction == "Vertical") {
        direction = "Horizontal"
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    if (direction == "Horizontal") {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    } else if (direction == "Vertical") {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
})
let y = 0
let x = 0
let direction = ""
direction = "Horizontal"
x = 2
y = 2
basic.forever(function () {
    led.plot(x, y)
    if (x < 0) {
        led.unplot(x, y)
        x = 4
    }
    if (x > 4) {
        led.unplot(x, y)
        x = 0
    }
    if (y < 0) {
        led.unplot(x, y)
        y = 4
    }
    if (y > 4) {
        led.unplot(x, y)
        y = 0
    }
})
