#!/bin/bash

echo "Hit CTRL + C to kill the Node-sass watcher..."
./app/src/node_modules/node-sass/bin/node-sass -o app/src/public/css app/src/sass -w
