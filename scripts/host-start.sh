#!/bin/bash

concurrently \
  'if [ ! -d "./packages/app1/dist" ]; then
    yarn app1 build
  fi
  yarn app1 preview' \
  'if [ ! -d "./packages/app2/dist" ]; then
    yarn app2 build
  fi
  yarn app2 preview' \
  'if [ ! -d "./packages/host/dist" ]; then
    yarn workspace host build
  fi
  yarn workspace host preview'
