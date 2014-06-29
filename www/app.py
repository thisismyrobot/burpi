"""

The flask webapp.

"""
import itertools
import os
import time

import flask
from flask import Flask
from flask import render_template


app = Flask(__name__)
SYSLOG_FILTER = 'BurPi-temperature'


@app.route('/')
def home():
    """ The static (for now) homepage.
    """
    return render_template('index.html')


@app.route('/data')
def data():
    """ Returns the temperature data from syslog.
    """
    with open('/var/log/messages', 'r') as log_f:
        lines = filter(lambda line: len(line) >= 6,
                       map(str.split, log_f.read().split(os.linesep)))

    datalines = filter(lambda line: (line[4] == '{}:'.format(SYSLOG_FILTER) and
                                     len(line[5].split(',')) == 3), lines)

    datasets = {}
    for epoch,sensor,temp in map(lambda line: line[5].split(','), datalines):
        if sensor not in datasets.keys():
            datasets[sensor] = []
        datasets[sensor].append((int(epoch), float(temp)))

    return flask.jsonify(**datasets)


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')
