---
title: Vanjs
---

<div id="app" class="reset no-select"></div>

<script type="module">
import { App } from './ios/app.js'
import { iOSProgressView } from './ios/progressView.js'
import { iOSAsyncList } from './ios/asynclist.js'

const mockLoader = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 1000);
  });

const mockList = iOSAsyncList('Screen', mockLoader)

App(iOSProgressView()).mountIn('app');
</script>
