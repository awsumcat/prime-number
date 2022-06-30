input.onButtonPressed(Button.A, function () {
    base_number = randint(2, 30)
    basic.showNumber(base_number)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= base_number - 1; index++) {
        if (base_number % (index + 1) == 0) {
            not_prime += 1
            if (not_prime == 2) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(1000)
            }
        } else {
            if (not_prime == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
            }
        }
    }
})
let base_number = 0
let not_prime = 0
not_prime = 0
basic.forever(function () {
	
})
