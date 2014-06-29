"""

The flask webapp.

"""
import os

from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def home():
    """ The static (for now) homepage.
    """
    return render_template('index.html')


@app.route('/data')
def data():
    """ Returns the temperature data from syslog.
    """
    with os.open('/var/log/messages', os.O_RDONLY | os.O_NONBLOCK) as log_f:
        lines = log_f.read().split(os.linesep)
    return '<br />'.join(lines)


if __name__ == '__main__':
    app.run()
