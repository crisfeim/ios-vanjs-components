---
title: Vanjs
---

<script type="text/javascript" src="./vanjs/van-1.5.5.nomodule.min.js"></script>
<div id="app" class="reset no-select"></div>

<script type="module">
  import { App, iOSAsyncList } from './js.js';
  App(iOSAsyncList('Screen')).mountIn('app');
</script>
