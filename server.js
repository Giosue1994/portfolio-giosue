import express, { Router, json } from "express";
import dotenv from "dotenv";
const router = Router();
import cors from "cors";
import { createTransport } from "nodemailer";

// server used to send send emails
const app = express();
app.use(cors());
app.use(json());
dotenv.config();
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
      console.log(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
      console.log(mail);
    }
  });
});
