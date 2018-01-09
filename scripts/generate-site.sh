#!/bin/bash

git checkout master
git pull origin master

yarn catalog-build
rm -r docs
mkdir docs
mv catalog/build/** docs/
rm -r catalog/build

git add docs
git commit -m "Update website"

git push origin master
