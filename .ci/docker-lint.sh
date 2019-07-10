#!/bin/bash
set -e
set -o pipefail


echo ""
echo "--------------------------------"
echo "Running Hadoolint on Dockerfiles"
echo ""

#find `pwd` -iname "Dockerfile" -printf "%h\n" | sort -u | while read i; do                                              
find "$(pwd)" -iname "Dockerfile" -printf "%h\n" | sort -u | while read -r i; do
	cd "$i" && pwd && docker run --rm -i hadolint/hadolint hadolint --ignore DL3018 - < Dockerfile
done

