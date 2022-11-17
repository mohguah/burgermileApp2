import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(
            process.env.JS_PLACEHOLDER);
    }

    return stripePromise;
}

export default getStripe