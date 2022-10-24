#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""

from core import app
from itertools import product
import os
from flask import Flask, redirect, request
import stripe