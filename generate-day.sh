#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <day_number>"
  exit 1
fi

# Extract the day number
DAY=$1

# Create the directory and files
DIR="./day$DAY"
mkdir -p "$DIR"
touch "$DIR/input.txt"
cp "./template.ts" "$DIR/main.ts"

echo "Generated directory and files for day $DAY:"
echo "$DIR/main.ts"
echo "$DIR/input.txt"