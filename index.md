---
title: Vanjs
---

<script type="text/javascript" src="./van-1.5.5.nomodule.min.js"></script>

<div id="app" class="reset"></div>

<script>
const styled = (el) => {
  el.fontWeight = (v) => { el.style.fontWeight = v; return el; };
  el.fontSize = (v) => { el.style.fontSize = v; return el; };
  el.width = (v) => { el.style.width = v; return el; };
  el.height = (v) => { el.style.height = v; return el; };
  el.background = (v) => { el.style.background = v; return el; };
  el.color = (v) => { el.style.color = v; return el; };
  el.borderRadius = (v) => { el.style.borderRadius = v; return el; };
  el.padding = (v) => { el.style.padding = v; return el; };
  el.aspectRatio = (v) => { el.style.aspectRatio = v; return el; };
  el.position = (v) => { el.style.position = v; return el; };
  el.transition = (v) => { el.style.transition = v; return el; };
  el.zIndex = (v) => { el.style.zIndex = v; return el; };
  el.marginBottom = (v) => { el.style.marginBottom = v; return el; };
  el.marginInline = (v) => { el.style.marginInline = v; return el; };
  el.marginRight = (v) => { el.style.marginRight = v; return el; };
  el.display = (v) => { el.style.display = v; return el; };
  el.borderBottom = (v) => { el.style.borderBottom = v; return el; };
  el.borderRight = (v) => { el.style.borderRight = v; return el; };
  el.transform = (v) => { el.style.transform = v; return el; };
  el.cursor = (v) => { el.style.cursor = v; return el; };
  el.left = (v) => { el.style.left = v; return el; };
  el.flexDirection = (v) => { el.style.flexDirection = v; return el; };
  el.flex = (v) => { el.style.flex = v; return el; };
  el.justifyContent = (v) => { el.style.justifyContent = v; return el; };
  el.alignItems = (v) => { el.style.alignItems = v; return el; };
  el.top = (v) => { el.style.top = v; return el; };
  el.right = (v) => { el.style.right = v; return el; };
  el.left = (v) => { el.style.left = v; return el; };
  el.bottom = (v) => { el.style.bottom = v; return el; };
  el.overflow = (v) => { el.style.overflow = v; return el; };
  el.maxHeight = (v) => { el.style.maxHeight = v; return el; };

  el.mountIn = (elementId) => {
      const target = document.getElementById(elementId)
      van.add(target, el)
  }

    return el;
};

const styledTags = new Proxy({}, {
  get(_, tag) {
    return (...args) => styled(van.tags[tag](...args));
  }
});

const {button, div, pre, span, ul, li, p, style} = styledTags

const App = (element) => {
    return div(element)
        .background('white')
        .color('black')
        .width('300px')
        .aspectRatio('9 / 16')
        .display('flex')
        .justifyContent('center')
        .alignItems('center')
        .marginInline('auto')
}

const iOSAsyncList = (load) => {
    const state = van.state(load())
}

const iOSList = (items, cell = (item) => li(item.text)) => {
    const title = p('Screen')
      .fontWeight('bold')
      .fontSize('24px')
      .marginBottom('12px')

    const list = ul(...items.map(cell))
    .background('white')
    .borderRadius('8px')

    const styles = style(`
        .ios-list ul li:hover::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: -1px;
          background: #D2D1D7;
          border-radius: inherit;
          z-index: -1;
        }
        .ios-list ul li {
            position: relative;
            padding: 8px 16px;
            transition: background 0.2s ease;
            z-index: 1;
        }
        .ios-list ul li:not(:first-child)::after {
          content: '';
          position: absolute;
          left: 16px;
          right: 0;
          top: 0;
          height: 0.5px;
          background-color: #D2D1D7;
        }
        .ios-list ul li::before {
          transition: background 0.2s ease;
        }
        .ios-list ul li:first-child {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .ios-list ul li:last-child {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
    `)

    let view = div(title, list, styles)
        .display('block')
        .width('100%')
        .height('100%')
        .background('#efeef5')
        .color('black')
        .padding('16px')
        .cursor('default')

    view.classList.add('ios-list')
    return view
}


const items = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" }
];

App(iOSList(items)).mountIn('app')
</script>
