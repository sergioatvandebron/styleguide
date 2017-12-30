#!/bin/bash

if [[ $# -eq 0 ]] ; then
  echo 'Please supply a version number for this build'
  make bump
  exit 0
fi

git checkout master
git pull origin master

yarn test
yarn dist

current_version=$(make current)
sed -i -e "s/\"version\": \"$current_version\"/\"version\": \"$1\"/g" package.json
rm package.json-e

git add dist package.json
git commit -m "v${1}"

git tag $1
git push origin master --tags
