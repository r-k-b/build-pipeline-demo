#!/usr/bin/env sh

set -e

{
    printf "head: ";
    git rev-parse HEAD;
    echo "";
    printf "build timestamp: ";
    date +%FT%T%z;
    echo "";
    git status;
} > static/version.txt
echo "updated version.txt"
