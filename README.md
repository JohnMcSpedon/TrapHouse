# TrapHouse
Internet-of-Things door controlled by RaspberryPi

### Door
Former tenants set up apartment such that completing a 12V circuit unlocks front door.

This circuit can be switched on/off using a [relay module](https://www.amazon.com/gp/product/B00R77PN1A/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1) in response to output from RasperryPi's GPIO pins.


### Wiring
3 wires between RasberryPi and relay switch. Respectively:

* ground - "GND"
* 5v - "VCC"
* GPIO 3 - "IN1"

Similar to

![](http://cdn.instructables.com/FXO/D7OO/HTVICRIN/FXOD7OOHTVICRIN.MEDIUM.jpg)
[(source)](http://www.instructables.com/id/Controlling-AC-light-using-Arduino-with-relay-modu/step5/Circuit-diagram/)

![](https://www.raspberrypi.org/documentation/usage/gpio/images/a-and-b-gpio-numbers.png)
[(source)](https://www.raspberrypi.org/documentation/usage/gpio/)

###User Validation
TODO(ROB)

exponent.js

FB authenticator

###Deploy
open_door.conf lives at `/etc/init/open_door.conf`, is called automatically at system startup.  This syncs with github and runs bootstrap.sh .
