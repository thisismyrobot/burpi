# BurPi

Playing with a couple of Maxim 1-Wire temperature sensors for homebrew
temperature control.

# Warning

This is not worth forking until I actually get something working :)

# Requires

## Hardware

* A unix platform (Raspberry Pi in this case)

* One or more 1-wire sensors in /sys/bus/w1/devices/ - see
https://learn.adafruit.com/adafruits-raspberry-pi- lesson-11-ds18b20
-temperature-sensing?view=all for more info.

## Software

* Python 2.7 (tested on 2.7.3)

* flask (pip install flask)

# Installation

I've installed it in /home/pi/burpi/

If you want a no-frills setup, install it there too and put the following two
lines in crontab:

    @reboot python /home/pi/burpi/www/app.py
    * * * * * python /home/pi/burpi/logger.py

The second line will log temperatures to syslog every 1 minute.
