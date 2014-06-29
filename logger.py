"""

1-Wire Maxim temperature logger.

Hat-tip to https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20
-temperature-sensing?view=all for some basic direction here.

"""
import glob


def log():
    """ Logs all the temperature readings.
    """
    # Detect the sensors
    sensors = glob.glob('/sys/bus/w1/devices/*/w1_slave')


if __name__ == '__main__':
    log()
