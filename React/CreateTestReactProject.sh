#!/bin/bash
if [ ! -d "./test-react-app/src" ]; then
npx create-react-app test-react-app
cp -r "./src"/* "./test-react-app/src"
cd test-react-app
npm install apex4x
npm start
fi