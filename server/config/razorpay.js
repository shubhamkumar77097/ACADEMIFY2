const Razorpay = require('razorpay');
require('dotenv').config();

const instance = new Razorpay({
    key_id: "rzp_test_me0KUKtpqR4Y5Z",
    key_secret: "sN3OYY7SNtPJ1QXyLEWIrhLu",
})

module.exports = { instance };