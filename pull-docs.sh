#! /bin/bash
# Copyright 2017 The Tectonic Project
# Licensed under the MIT License
#
# This script assumes that the main `tectonic` repository is in a directory
# next to this one.

ttdir=../tectonic

set -e

(cd $ttdir && cargo doc) || exit 1
rm -rf api-docs
cp -r $ttdir/target/doc api-docs
rm -rf api-docs/src/backtrace/home # weird bad file gets copied over here
