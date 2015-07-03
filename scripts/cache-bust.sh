#!/bin/bash

# This script renames a file to include its sha1, and updates all references to
# that file. For example, site.css is renamed to site-abc123.css.

set -e

# The path to the file we're going to rename: staging/static/site.css
ASSET_PATH=$1

# The file name of the file: site.css
ASSET_FILE=$(basename $1)
 
# The asset extension: css
ASSET_EXT="${ASSET_FILE##*.}"

# The asset name: site
ASSET_NAME="${ASSET_FILE%.*}"

# The folder that contains html with references to the file.
HTML_FOLDER=$2

# Get the sha1 of the asset file.
SHA1=$(sha1sum $ASSET_PATH | awk '{print $1}')

# Get the new name of the asset with the sha1: site-abc123.css
NEW_FILE=$ASSET_NAME-$SHA1.$ASSET_EXT

# Rename the file
mv $ASSET_PATH $(dirname $ASSET_PATH)/$NEW_FILE

# Update all references to the file
find $HTML_FOLDER -regex '.*\.html' | xargs sed -i "s/$ASSET_FILE/$NEW_FILE/"
