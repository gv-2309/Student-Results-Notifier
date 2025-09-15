# 📚 Student Results Notification System

This is a simple web application where a student can enter their marks.
The system automatically:

* ✅ Calculates **Grade & Remarks**
* ✅ Sends the result via **Email**
* ✅ Sends the result via **SMS**

---

## 🚀 Features

* Student submits **Name, Email, Phone, Marks**.
* Backend calculates **Grade & Remarks**.
* Result is sent to the student’s **Email** using Gmail SMTP.
* Result is sent to the student’s **Phone** via Twilio SMS API.

---

## 🛠️ Tech Stack

* **Frontend:** HTML + JavaScript
* **Backend:** Node.js + Express
* **Email:** Nodemailer (Gmail SMTP)
* **SMS:** Twilio API

---

## 📂 Project Structure

```
student-results/
│── index.html      # Frontend form
│── server.js       # Backend server (API + Email + SMS)
│── package.json    # Node.js project file
```

---

## ⚡ Setup Instructions

### 1️⃣ Install Node.js

Download from [Node.js](https://nodejs.org/) and verify:

```bash
node -v
npm -v
```

### 2️⃣ Clone the Project

```bash
git clone https://github.com/your-username/student-results.git
cd student-results
```

### 3️⃣ Install Dependencies

```bash
npm install express nodemailer twilio body-parser cors
```

### 4️⃣ Configure Email & SMS

Open `server.js` and update:

#### Gmail (for Email)

```js
user: "your_email@gmail.com",    // your Gmail ID
pass: "your_app_password"        // Gmail App Password
```

👉 Generate App Password:
[Google App Passwords](https://myaccount.google.com/apppasswords)

#### Twilio (for SMS)

```js
const accountSid = "TWILIO_ACCOUNT_SID";
const authToken = "TWILIO_AUTH_TOKEN";
const twilioClient = twilio(accountSid, authToken);

await twilioClient.messages.create({
  body: message,
  from: "+1234567890",   // your Twilio phone number
  to: phone              // student's phone
});
```

👉 Get SID, Auth Token & Phone Number from [Twilio Dashboard](https://www.twilio.com/).
👉 If using **Trial Account**, you must verify the student’s phone number in Twilio.

---

### 5️⃣ Run the Server

```bash
node server.js
```

Server will start at:

```
http://localhost:5000
```

---

### 6️⃣ Open the Website

Open `index.html` in your browser.

* Fill details → Click Submit
* Email & SMS will be sent with results

---

## 📝 Example

**Input:**

* Name: Ramesh
* Email: [ramesh@example.com](mailto:ramesh@example.com)
* Phone: +919876543210
* Marks: 85

**Output (sent to email & SMS):**

```
Hello Ramesh, your marks: 85, Grade: A, Remarks: Very Good ✅
```

---

## 🎯 Future Improvements

* Store student results in a database (MongoDB / Firebase).
* Add multiple subjects & percentage calculation.
* Deploy backend to **Render / Railway** for free hosting.

---

## 👨‍💻 Author

Developed by **Soldier Vishnu** 🚀

