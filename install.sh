#!/bin/bash
echo "Installing Theme please wait a moment."
mkdir -p /usr/share/lightdm-webkit/themes/ltheme
cp -R ./* /usr/share/lightdm-webkit/themes/ltheme/
echo "lightdm-webkit2-greeter discover Theme is installed."