---
title: Title
description: A small description
date: '2020-12-13'
draft: false
slug: '/pensieve/template'
tags:
  - Tag 1
  - Tag 2
---

## Problem

Here is a default text.

```shell:title=bin/composer
#!/bin/bash
docker-compose exec -w /var/www/html/wp-content/themes/skela wordpress composer "$@"
```

## Solution

```yaml:title=docker-compose.yml
version: '3.6' # highlight-line
services:
  wordpress:
    build:
```
