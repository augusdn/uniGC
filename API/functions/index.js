const functions = require("firebase-functions");
const admin = require("firebase-admin");

// How to retrieve your service account key:
// 1. Create your firebase project
// 2. Go to project settings
// 3. Go to service accounts tab
// 4. Generate new private key
// 5. Save the file on your working directory
const ServiceAccount = require("./ServiceAccountKey.json");
const express = require("express");
const app = express();
const firebase = require("firebase");

// How to retrieve your firebase config:
// 1. Create your firebase project
// 2. Go to project settings
// 3. On the bottom part of the General tab, click the </> icon
// 4. Follow the command shown on the prompt
// 5. You can now access the config on the "Firebase SDK snippet" section
// 5. Save the file on your working directory
/* FORMAT OF THE CONFIG FILE: 
    const firebaseConfig = {
      apiKey: "randomcharactershereasdfghjkl",
      authDomain: "csesocworkshop.firebaseapp.com",
      databaseURL: "https://xxxxxx.firebaseio.com",
      projectId: "csesocworkshop",
      storageBucket: "csesocworkshop.appspot.com",
      messagingSenderId: "xxxxxxxxxx",
      appId: "x:xxxxx:xxxxxx:Xxxxx",
      measurementId: "X-XXXXXX"
    };
*/
const config = require("./FirebaseConfig");

firebase.initializeApp(config);
admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: "https://unigc-eea69.firebaseio.com/",
});

const db = admin.firestore();

app.get("/courses", (request, response) => {
  db.collection("courses")
    .orderBy("code")
    .get()
    .then((data) => {
      let courses = new Array();
      data.forEach((doc) => {
        courses.push(doc.data());
      });
      return response.json({ courses });
    });
});
app.post("/addCourse", (request, response) => {
    const newCourse = {
        title: request.body.title,
        code: request.body.code,
    };
    db.collection("courses").doc(request.body.code).set({
        title: request.body.title,
        code: request.body.code,
    })
    .then(function() {
        return response.json({
            status: "success",
            details: `course code ${newCourse.code} added`,
        });
    })
    .catch(function(error) {
        response.status(500).json({ status: "failed", error: err.code })
    });
});

app.get("/course/:courseID", (request, response) => {
  const id = request.params.courseID;
  db.collection("courses")
    .doc(id)
    .get()
    .then((data) => {
      if (data.exists) {
        console.log(data);
        return response.json({ status: "success", course: data.data() });
      }
      return response
        .status(404)
        .json({ status: "failed", error: "course not found" });
    })
    .catch((err) =>
      response.status(500).json({ status: "failed", error: err.code })
    );
});

exports.api = functions.region("asia-east2").https.onRequest(app);
