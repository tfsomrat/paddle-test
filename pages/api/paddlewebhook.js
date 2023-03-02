export default async function handler(req, res) {
  if (!req.body) {
    return res.status(401).json({ error: "No request body found" });
  }

  if (req.body.alert_name === "subscription_created") {
    console.log("Paddle subscription created received: ", req.body);
  }

  if (req.body.alert_name === "subscription_updated") {
    console.log("Paddle subscription update received: ", req.body);
  }

  if (req.body.alert_name === "subscription_cancelled") {
    console.log("Paddle cancelled webhook received: ", req.body);
  }

  if (req.body.alert_name === "subscription_payment_succeeded") {
    console.log(
      "Paddle webhook subscription payment succeeded received: ",
      req.body
    );
  }

  if (req.body.alert_name === "subscription_payment_failed") {
    console.log(
      "Paddle webhook subscription payment failed received: ",
      req.body
    );
  }

  res.status(200).json({ success: true });
}
