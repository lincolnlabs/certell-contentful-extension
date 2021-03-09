#!/usr/bin/env bash
zip extension.zip -r * .[^.]* -x "*node_modules*" -x "*.ts" -x ".git*" -x "*.pem" -x "env/*.config"
