#!/bin/bash -e

. ~/init/php 7.1.24

echo "Downloading Cecil"
curl -SOL https://cecil.app/cecil.phar
php cecil.phar --version

echo "Started themes installation"
composer install
echo "Finished themes installation"

echo "Started Cecil build"
php cecil.phar build --verbose

# test build
if [ $? = 0 ]
then
  echo "Finished Cecil build"
  bash scripts/deploy.sh
else
  echo "Error during build"
fi
