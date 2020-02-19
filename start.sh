#!/usr/bin/bash
screen -dm -S react expo start
screen -dm -S server json-server --watch ./db.json
