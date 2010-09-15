#!/bin/sh

BASEDIR=`dirname $0`/..

# initialization
mkdir -p $BASEDIR/vendor
rm -rf $BASEDIR/vendor/*
cd $BASEDIR/vendor

# Doctrine
git clone git://github.com/doctrine/doctrine2.git doctrine
cd doctrine
git submodule init
git submodule update
cd ..

