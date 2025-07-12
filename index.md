---
title: Vanjs
---

<div id="app" class="reset no-select"></div>

<script type="module">
import { styledTags } from './vanjs/styled.js'
import { App } from './ios/app.js'
import { iOSProgressView } from './ios/progressView.js'
import { iOSAsyncList } from './ios/asynclist.js'

const { div } = styledTags;

const mockLoader = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 10000);
  });

const githubLoader = () => {
  return fetch('./data/github.json')
    .then((res) => {
      if (!res.ok) throw new Error('Api error')
      return res.json()
    })
    .then((data) => data.map((item) => item.name))
}

const mockList = iOSAsyncList('Screen', mockLoader)
const githubList = iOSAsyncList('Github', githubLoader)

div(App(mockList)).mountIn('app');
</script>
