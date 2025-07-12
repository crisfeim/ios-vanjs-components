import { styledTags } from './vanjs/styled.js';
const {button, div, pre, span, ul, li, p, style} = styledTags

export const App = (element) => {
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

const mockLoader = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 1000);
  });

export const iOSAsyncList = (screenTitle, loader = mockLoader) => {
    const state = van.state({ status: 'loading', payload: [] })
    const items = van.derive(() => state.val.payload)
    const successView = iOSList(screenTitle, items.value).width('300px').aspectRatio('9 / 16')
    const loadingView = iOSProgressView()
    const errorView = p('Error')

    const load = async () => {
        loader()
             .then((result) => state.val = { status: "success", payload: result })
             .catch(() => state.val = { status: "error", payload: null })
    }
    return div(() => {
        const { status } = state.val;
        if (status === "loading") return loadingView;
        if (status === "success") return successView;
        if (status === "error") return errorView;
      }).onAppear(() => load())
}

const iOSList = (screenTitle, items = ['Item 1', 'Item 2'], cell = (item) => li(item)) => {
    const title = p(screenTitle)
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


const iOSProgressView = () => {
    const blade = () => {
        let view = div()
        view.classList.add('ispinner-blade')
        return view
    }

    let view = div(
        blade(),
        blade(),
        blade(),
        blade(),
        blade(),
        blade(),
        blade(),
        blade(),
        style(`
.ispinner {
position: relative;
width: 20px;
height: 20px; }
.ispinner .ispinner-blade {
position: absolute;
top: 6.5px;
left: 8.5px;
width: 2.5px;
height: 6.5px;
background-color: #8e8e93;
border-radius: 1.25px;
animation: iSpinnerBlade 1s linear infinite;
will-change: opacity; }
.ispinner .ispinner-blade:nth-child(1) {
transform: rotate(45deg) translateY(-6.5px);
animation-delay: -1.625s; }
.ispinner .ispinner-blade:nth-child(2) {
transform: rotate(90deg) translateY(-6.5px);
animation-delay: -1.5s; }
.ispinner .ispinner-blade:nth-child(3) {
transform: rotate(135deg) translateY(-6.5px);
animation-delay: -1.375s; }
.ispinner .ispinner-blade:nth-child(4) {
transform: rotate(180deg) translateY(-6.5px);
animation-delay: -1.25s; }
.ispinner .ispinner-blade:nth-child(5) {
transform: rotate(225deg) translateY(-6.5px);
animation-delay: -1.125s; }
.ispinner .ispinner-blade:nth-child(6) {
transform: rotate(270deg) translateY(-6.5px);
animation-delay: -1s; }
.ispinner .ispinner-blade:nth-child(7) {
transform: rotate(315deg) translateY(-6.5px);
animation-delay: -0.875s; }
.ispinner .ispinner-blade:nth-child(8) {
transform: rotate(360deg) translateY(-6.5px);
animation-delay: -0.75s; }
.ispinner.ispinner-large {
width: 35px;
height: 35px; }
.ispinner.ispinner-large .ispinner-blade {
top: 11.5px;
left: 15px;
width: 5px;
height: 12px;
border-radius: 2.5px; }
.ispinner.ispinner-large .ispinner-blade:nth-child(1) {
transform: rotate(45deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(2) {
transform: rotate(90deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(3) {
transform: rotate(135deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(4) {
transform: rotate(180deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(5) {
transform: rotate(225deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(6) {
transform: rotate(270deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(7) {
transform: rotate(315deg) translateY(-11.5px); }
.ispinner.ispinner-large .ispinner-blade:nth-child(8) {
transform: rotate(360deg) translateY(-11.5px); }

@keyframes iSpinnerBlade {
0% {
    opacity: 0.85; }
50% {
    opacity: 0.25; }
100% {
    opacity: 0.25; } }
        `)
    )

    view.classList.add('ispinner')

    return view
}
