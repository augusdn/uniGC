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

const cors = require('cors');
app.use(cors({origin: true}));

app.get("/courses", (request, response) => {
  db.collection("courses")
    .orderBy("code")
    .limit(5)
    .get()
    .then((data) => {
      let courses = new Array();
      data.forEach((doc) => {
        courses.push(doc.data());
      });
      return response.json({ courses });
    })
    .catch((err) => {
        response.status(500).json({ status: "failed", error: err.code })
    });
});

app.get("/subjects", (request, response) => {
  db.collection("subjects")
    .orderBy("code")
    .get()
    .then((data) => {
      let subjects = new Array();
      data.forEach((doc) => {
        subjects.push(doc.data());
      });
      return response.json({ subjects });
    })
    .catch((err) => {
        response.status(500).json({ status: "failed", error: err.code })
    });
});
// app.post("/addCourse", (request, response) => {
//     db.collection("courses").doc(request.body.code).set({
//         title: request.body.title,
//         code: request.body.code,
//         subject: request.body.subject
//     })
//     .then(() => {
//         return response.json({
//             status: "success",
//             details: `course code ${request.body.code} added`,
//         });
//     })
//     .catch((err) => {
//         response.status(500).json({ status: "failed", error: err.code })
//     });
// });

// app.post("/addSubject", (request, response) => {
//   // const courses = request.body.courses.split(",");
//   db.collection("subjects").doc(request.body.subject).set({
//       subject: request.body.subject,
//       title: request.body.title,
//       courses: request.body.courses,
//   })
//   .then(() => {
//       return response.json({
//           status: "success",
//           details: `suject ${request.body.subject} added`,
//       });
//   })
//   .catch((err) => {
//       response.status(500).json({ status: "failed", error: err.code })
//   });
// });

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

app.get("/subject/:subjectID", (request, response) => {
  const id = request.params.subjectID;
  db.collection("courses")
    .where("subject", "==", id)
    .orderBy("code")
    .get()
    .then((data) => {
      let courses = new Array();
      data.forEach((doc) => {
        courses.push(doc.data());
      });
      return response.json({ courses });
    })
    .catch((err) => {
        response.status(500).json({ status: "failed", error: err.code })
    });
});

app.get("/search/:courseID", (request, response) => {
  const id = request.params.courseID.toUpperCase();
  db.collection("courses")
    .where("code", ">=", id)
    .where("code", "<=", id+"\uf8ff")
    .orderBy("code")
    .limit(5)
    .get()
    .then(snapshot => {
      let arrayR = snapshot.docs.map(doc => {
        return doc.data();
      })
      return response.json(arrayR);
    })
    .catch((err) =>
      response.status(500).json({ status: "failed", error: err.code })
    );
});

app.post("/addChat", (request, response) => {
  db.collection("chats").add({
      uid: request.body.uid,
      fullName: request.body.fullName,
      code: request.body.code,
      URL: request.body.URL,
      waiting: 0,
      users: 0,
      created: admin.firestore.Timestamp.fromDate(new Date())
  })
  .then((docRef) => {
      return response.json({
          status: "success",
          details: `course chat ${docRef.id} added`,
      });
  })
  .catch((err) => {
      response.status(500).json({ status: "failed", error: err.code })
  });
});

app.post("/joinChat", (request, response) => {
  const userData = {
    uid: request.body.uid,
    fullName: request.body.fullName
  }
  const chatID = request.body.chatID
  db.collection("chats").doc(chatID).update({
    waitingList: admin.firestore.FieldValue.arrayUnion(userData),
    users: admin.firestore.FieldValue.increment(1),
    waiting: admin.firestore.FieldValue.increment(1)
  })
  .then((docRef) => {
      return response.json({
          status: "success",
          details: `Added to waiting list`,
      });
  })
  .catch((err) => {
      response.status(500).json({ status: "failed", error: err.code })
  });
});

app.post("/leaveChat", (request, response) => {
  const userData = {
    uid: request.body.uid,
    fullName: request.body.fullName
  }
  const chatID = request.body.chatID
  db.collection("chats").doc(chatID).update({
    waitingList: admin.firestore.FieldValue.arrayRemove(userData),
    waiting: admin.firestore.FieldValue.increment(-1)
  })
  .then((docRef) => {
      return response.json({
          status: "success",
          details: `Deleted from waiting list`,
      });
  })
  .catch((err) => {
      response.status(500).json({ status: "failed", error: err.code })
  });
});

app.get("/getChats/:courseCode", (request, response) => {
  const id = request.params.courseCode;
  console.log(id)
  db.collection("chats")
    .where("code", "==", id)
    // .orderBy("created")
    .get()
    .then((data) => {
      let chats = new Array();
      data.forEach((doc) => {
        chats.push(doc.data());
      });
      return response.json({ chats });
    })
    .catch((err) => {
        response.status(500).json({ status: "failed", error: err.code })
    });
});

app.get("/myChats/:uid", (request, response) => {
  const id = request.params.uid;
  console.log(id)
  db.collection("chats")
    .where("uid", "==", id)
    // .orderBy("created")
    .get()
    .then((data) => {
      let chats = new Array();
      data.forEach((doc) => {
        chats.push(doc.data());
      });
      return response.json({ chats });
    })
    .catch((err) => {
        response.status(500).json({ status: "failed", error: err.code })
    });
});

app.get("/waitingList", (request, response) => {
  db.collection("chats")
    .where("waiting", ">", 0)
    .get()
    .then(data => {
      let chats = new Array();
      data.forEach((doc) => {
        chats.push(doc.data());
      });
      return response.json({ chats });
    })
    .catch((err) =>
      response.status(500).json({ status: "failed", error: err.code })
    );
});

exports.api = functions.region("asia-east2").https.onRequest(app);