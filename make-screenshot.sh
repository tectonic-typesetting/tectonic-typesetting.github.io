#! /bin/bash
# Copyright 2017 The Tectonic Project
# Licensed under the MIT License
#
# This script assumes that the main `tectonic` repository is in a directory
# next to this one. It requires the "aha" program to be available,
# https://github.com/theZiz/aha .

ttdir=../tectonic
aha=$HOME/sw/aha/aha

set -e

(cd $ttdir/tests/xenia && tectonic paper.tex |$aha -b -n) >_includes/screenshot.html
