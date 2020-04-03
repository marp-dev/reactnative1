#!/usr/bin/bash
tmux new -d -s react expo start
tmux new -d -s server json-server --host 0.0.0.0 --watch ./db.json
