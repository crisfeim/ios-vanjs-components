import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"

const onVisible = (element, callback) => {
  const observer = new IntersectionObserver(([entry], obs) => {
    if (entry.isIntersecting) {
      callback();
      obs.disconnect();
    }
  });
  observer.observe(element);
};

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
  el.onAppear = (callback) => { onVisible(el, callback) ; return  el; }
  el.onClick = (onClick) => {
      el.addEventListener('click', onClick);
      return el;
  }

  el.mountIn = (elementId) => {
      const target = document.getElementById(elementId)
      van.add(target, el)
  }

    return el;
};

export const styledTags = new Proxy({}, {
  get(_, tag) {
    return (...args) => styled(van.tags[tag](...args));
  }
})
