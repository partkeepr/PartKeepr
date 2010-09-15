#!/bin/sh

BASEDIR="`dirname $0`/.."

# Doctrine
cd $BASEDIR/vendor/doctrine
git pull
git submodule update
