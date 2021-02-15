const { sendPushNotification } = require("../handlers/firebase");

exports.getIndex = (req, res, next) => {
  return res.render("index", { title: "Node Application Boilerplate" });
};

exports.getPushNotification = async (req, res, next) => {
  const { token } = req.query;
  try {
    await sendPushNotification({
      notification: {
        title: "New Message",
        body: "Testing Push Notification",
      },
      data: {
        title: "New Message",
        body: "Testing Push Notification",
        openURL: "https://google.com",
        click_action: "https://google.com",
      },

      token,
    });
    return res.send("Push Notification successfully generated.");
  } catch (err) {
    return res.send("Error in generating push.");
  }
};
``;
