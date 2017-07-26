#!/bin/bash

export HOMEIP=$(ifconfig en0 | awk '$1 == "inet" {print $2}')
echo $HOMEIP "alejandro" >> /etc/hosts