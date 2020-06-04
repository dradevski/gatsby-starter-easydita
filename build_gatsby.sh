#!/bin/sh

mkdir -p ./static

mkdir -p ./overrides # In case you don't pass any
cp -r ./overrides/* .

yarn
gatsby build