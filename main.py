def on_forever():
    pins.analog_write_pin(AnalogPin.P1, 88)
basic.forever(on_forever)
