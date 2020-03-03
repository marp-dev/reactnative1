#!/usr/bin/bash
screen -dm -S react expo start
screen -dm -S server json-server --host 0.0.0.0 --watch ./db.json
