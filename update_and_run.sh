#!/bin/bash

CODE_DIR=/home/pi/TrapHouse/

# kill existing server
ps aux | grep [o]pen_door.py | awk '{print $2}' | xargs kill

# update server code
cd $CODE_DIR;
git pull;

# run server
python open_door.py
