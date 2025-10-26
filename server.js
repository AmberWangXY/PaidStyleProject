// npm install express cors axios dotenv
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Mailgun API endpoint
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

    const formData = new URLSearchParams();
    formData.append("from", `Paidstyle Contact <mailgun@${MAILGUN_DOMAIN}>`);
    formData.append("to", "amberwangxinyu2002@gmail.com");
    formData.append("subject", "New Contact Message from Paidstyle");
    formData.append(
      "text",
      `📩 New message received:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`
    );

    await axios.post(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      formData,
      {
        auth: {
          username: "api",
          password: MAILGUN_API_KEY,
        },
      }
    );

    res.json({ ok: true });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`✅ Mailgun server running on port ${PORT}`)
);
