#!/bin/bash
cd "$(dirname "$0")"
quarto render .
git add -A
git commit -m "update site"
git push
