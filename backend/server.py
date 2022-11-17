#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
from itertools import product
from locale import currency
import os
from flask import Flask, redirect, request

import stripe
# This is your test secret API key.
stripe.api_key = 'sk_test_51LsUfGCpUbUMkUvohMy9I5yYVldD0sPXiK3bu7IKb5ych41AnqxHQOcWzTVVq8zB6K3yiM7SkOdNK0LD8QNwppdN00094VN0s6'

app = Flask(__name__,
            static_url_path='',
            static_folder='public')

MY_DOMAIN = 'http://localhost:4242'


burgermerch1 = stripe.Product.create(name='burgermerch1')

price = stripe.Price.create(
    unit_amount=15000,
    currency="nok",
    product=burgermerch1)


@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    "price_data": {
                        "currency": "usd",
                        "product_data": {"name": cart.name}
                        # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        'price': cart.price,
                        'quantity': 1,
                    },
                    "adjustable_quantity": {
                        "enabled": True,
                        "minimum": 1,
                        "maximum": 10
                    },
                    "quantity": 1,
                },
            ],
            mode='payment',
            success_url=MY_DOMAIN + '?success=true',
            cancel_url=MY_DOMAIN + '?canceled=true',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)


if __name__ == '__main__':
    app.run(port=4242)
