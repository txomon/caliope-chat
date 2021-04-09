input.onButtonPressed(Button.A, function () {
    if (current_state == "running") {
        current_state = "editing"
    } else if (current_state == "editing") {
        if (input_list[current_selector] == ">") {
            current_state = "running"
        } else if (input_list[current_selector] == "_") {
            current_text = "" + current_text + " "
        } else {
            current_text = "" + current_text + input_list[current_selector]
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (current_state == "editing") {
        current_selector = (current_selector + 1) % input_list.length
    }
})
input.onGesture(Gesture.Shake, function () {
    if (current_state == "editing") {
        current_text = remove_last(current_text)
    } else if (current_state == "running") {
    	
    }
})
function remove_last (text: string) {
    return "this".substr(0, "".length - 1)
}
let current_selector = 0
let current_state = ""
let current_text = ""
let input_list: string[] = []
input_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_", ">"]
current_text = ""
current_state = "running"
current_selector = 0
basic.forever(function () {
    if (current_state == "running") {
        if (current_text.isEmpty()) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
        } else {
            basic.showString(current_text)
        }
    } else if (current_state == "editing") {
        basic.showString("" + (input_list[current_selector]))
    }
})
