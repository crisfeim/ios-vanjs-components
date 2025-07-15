---
title: iOS Vanilla JS
---

## NavigationBar

<ios-navigation-bar></ios-navigation-bar>

## List

<ios-app>
    <ios-list></ios-list>
</ios-app>

## Async list

<ios-app>
    <ios-async-list></ios-async-list>
</ios-app>

<script type="module">
import { styledTags } from './vanjs/styled.js'
import { define } from './vanjs/elements.js'
import { App } from './ios/app.js'
import { iOSNavigationBar } from './ios/navigationBar.js'
import { iOSAsyncList } from './ios/asynclist.js'
import { iOSList } from './ios/list.js'
import { mockLoader } from './infra/mock-loader.js'

const { p, slot } = styledTags

define("ios-navigation-bar", () => iOSNavigationBar('NavigationBar', () => alert('Back button clicked')));
define("ios-app", () => App(slot()))
define('ios-async-list', () => iOSAsyncList('Async List', mockLoader))
define('ios-list', () => iOSList('List', ['Item 1', 'Item 2']))
</script>
