#!/usr/bin/bash
set -e

for file in $(find public -name *.png -o -name *.jpg -o -name *.jpeg); do
  newfile="${file%.*}.avif"
  if [ ! -f "$newfile" ]; then
    echo "-> Creating $newfile"
    convert "$file" -quality 70 "$newfile"
  fi
  newfile="${file%.*}.jxl"
  if [ ! -f "$newfile" ]; then
    echo "-> Creating $newfile"
    convert "$file" -quality 80 "$newfile"
  fi
  newfile="${file%.*}.webp"
  if [ ! -f "$newfile" ]; then
    echo "-> Creating $newfile"
    convert "$file" "$newfile"
  fi
done
