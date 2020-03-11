#!/bin/sh

mkdir -p ./static
cp -r ./ezd_content/assets/* ./static

mkdir -p ./overrides # In case you don't pass any
cp -r ./overrides/* ./src

gatsby build