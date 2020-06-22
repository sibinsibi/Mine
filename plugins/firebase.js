import firebase from "firebase";

var firestore = {};

var realTimeDB = {};

var functions = {};

if (!process.server) {
  var config = {};

  config = {
    apiKey: "AIzaSyAv4JtNjAG20RkBey1G_JPOyzU27DGluQ4",
    authDomain: "mine-d63d6.firebaseapp.com",
    databaseURL: "https://mine-d63d6.firebaseio.com",
    projectId: "mine-d63d6",
    storageBucket: "mine-d63d6.appspot.com",
    messagingSenderId: "924719079265",
    appId: "1:924719079265:web:3944106c860844b520af20",
    measurementId: "G-PKGWZX4MGR"
  };

  if (!firebase.apps.length) firebase.initializeApp(config);

  firestore = firebase.firestore();

  realTimeDB = firebase.database().ref();

  //functions = firebase.app().functions("asia-northeast1");
} else {
  const admin = require("firebase-admin");

  const key = require("../static/service_account.json");
  const url = "https://mine-d63d6.firebaseio.com";

  if (admin.apps.length != 1) {
    try {
      admin.app();
    } catch (e) {
      admin.initializeApp({
        credential: admin.credential.cert(key),
        databaseURL: url
      });
    }
  }

  firestore = admin.firestore();
  realTimeDB = admin.database().ref();

  //functions = require('firebase-functions');
}

export const db = firestore;

export const rd = realTimeDB;

export const ff = functions;
