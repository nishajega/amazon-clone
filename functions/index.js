/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Hj5IYF9XzKtJlr7pXGi4SMwIO7lE035qPYaflRumtfOYCqVttf1VHcB9rFWCS5vzq2bheUCHo7NGHXaQZv6ZCEe00qRmAZWlb");

// API

// - App Config
const app = express();

// - Middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);
