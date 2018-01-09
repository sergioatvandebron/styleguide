#!/bin/bash

git checkout master
git pull origin master

yarn catalog-build
rm -r docs
mkdir docs
mv catalog/build/** docs/
rm -r catalog/build
sed -i -e "s/n.p=\"\/\"/n.p=\"\"/g" docs/static/manifest*
sed -i -e "s/\/static\//..\/static\//g" docs/static/*.css
sed -i -e "s/\/static\//static\//g" docs/index.html
rm docs/index.html-e
rm docs/static/*-e
rm docs/static/*.map

git add docs
git commit -m "Update website"

git push origin master
