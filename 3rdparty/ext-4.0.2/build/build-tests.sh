#!/bin/sh
UNAME="$(uname)"
if [ $UNAME = "Darwin" ]; then
    OS="mac"
else
    OS="linux"
fi
HAMMERJS="bin/$OS/hammerjs"

$HAMMERJS build-tests.js