# UniGC 💬

## Overview
UniGC is a platform to manage all your university courses' group chats.

Before UniGC, it's very inconvenient to manage Facebook group chats for courses. Students would post in UNSW Discussion Group only to inquire whether a particular group chat already exists.

With UniGC, a user can add the already-created Facebook group chat to be included in our database. Then, other users can search for the group chat and request to join the group chat. The group creator can then manually add the requesters themselves OR let our helpful bot take care of the adding.

It's really simple!

## Background
The idea came when we saw many people are posting in the UNSW Discussion Group asking questions about course group chats. It's a bit annoying to not have a centralised platform where people can just search whether a group chat has already been created - so we made one!

## System Architecture
- React ⚛️
- Bootstrap 👢& Material-UI 🧱
- Firebase 🔥

## File Structure
```
UniGC
├── API
│   ├── firebase.json
│   ├── firestore.indexes.json
│   ├── firestore.rules
│   └── functions
│       ├── index.js
│       ├── package-lock.json
│       └── package.json
├── README.md
├── crawler
│   ├── courses*.json
│   ├── crawler.py
│   └── subjects.json
└── frontend
    ├── README.md
    ├── firebase.json
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── public
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── components
        ├── config
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── pages
        ├── serviceWorker.js
        └── setupTests.js
```
