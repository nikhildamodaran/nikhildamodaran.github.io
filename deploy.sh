#!/bin/bash
cd "$(dirname "$0")"

echo "What did you change? (commit message):"
read msg

quarto render .
git add -A
git commit -m "$msg"
git push
