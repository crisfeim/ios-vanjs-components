// import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"
import { styledTags } from './vanjs/styled.js';
import { iOSList } from './ios/list.js';
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

App(iOSList()).mountIn('app')

// const mockLoader = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(['Item 1', 'Item 2', 'Item 3']);
//     }, 1000);
//   });

// export const iOSAsyncList = (screenTitle, loader = mockLoader) => {
//     const state = van.state({ status: 'loading', payload: [] })
//     const items = van.derive(() => state.val.payload)
//     const successView = iOSList(screenTitle, items.value).width('300px').aspectRatio('9 / 16')
//     const loadingView = iOSProgressView()
//     const errorView = p('Error')

//     const load = async () => {
//         loader()
//              .then((result) => state.val = { status: "success", payload: result })
//              .catch(() => state.val = { status: "error", payload: null })
//     }
//     return div(() => {
//         const { status } = state.val;
//         if (status === "loading") return loadingView;
//         if (status === "success") return successView;
//         if (status === "error") return errorView;
//       }).onAppear(() => load())
// }


// const iOSProgressView = () => {
//     const blade = () => {
//         let view = div()
//         view.classList.add('ispinner-blade')
//         return view
//     }

//     let view = div(
//         blade(),
//         blade(),
//         blade(),
//         blade(),
//         blade(),
//         blade(),
//         blade(),
//         blade(),
//         style(`
// .ispinner {
// position: relative;
// width: 20px;
// height: 20px; }
// .ispinner .ispinner-blade {
// position: absolute;
// top: 6.5px;
// left: 8.5px;
// width: 2.5px;
// height: 6.5px;
// background-color: #8e8e93;
// border-radius: 1.25px;
// animation: iSpinnerBlade 1s linear infinite;
// will-change: opacity; }
// .ispinner .ispinner-blade:nth-child(1) {
// transform: rotate(45deg) translateY(-6.5px);
// animation-delay: -1.625s; }
// .ispinner .ispinner-blade:nth-child(2) {
// transform: rotate(90deg) translateY(-6.5px);
// animation-delay: -1.5s; }
// .ispinner .ispinner-blade:nth-child(3) {
// transform: rotate(135deg) translateY(-6.5px);
// animation-delay: -1.375s; }
// .ispinner .ispinner-blade:nth-child(4) {
// transform: rotate(180deg) translateY(-6.5px);
// animation-delay: -1.25s; }
// .ispinner .ispinner-blade:nth-child(5) {
// transform: rotate(225deg) translateY(-6.5px);
// animation-delay: -1.125s; }
// .ispinner .ispinner-blade:nth-child(6) {
// transform: rotate(270deg) translateY(-6.5px);
// animation-delay: -1s; }
// .ispinner .ispinner-blade:nth-child(7) {
// transform: rotate(315deg) translateY(-6.5px);
// animation-delay: -0.875s; }
// .ispinner .ispinner-blade:nth-child(8) {
// transform: rotate(360deg) translateY(-6.5px);
// animation-delay: -0.75s; }
// .ispinner.ispinner-large {
// width: 35px;
// height: 35px; }
// .ispinner.ispinner-large .ispinner-blade {
// top: 11.5px;
// left: 15px;
// width: 5px;
// height: 12px;
// border-radius: 2.5px; }
// .ispinner.ispinner-large .ispinner-blade:nth-child(1) {
// transform: rotate(45deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(2) {
// transform: rotate(90deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(3) {
// transform: rotate(135deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(4) {
// transform: rotate(180deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(5) {
// transform: rotate(225deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(6) {
// transform: rotate(270deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(7) {
// transform: rotate(315deg) translateY(-11.5px); }
// .ispinner.ispinner-large .ispinner-blade:nth-child(8) {
// transform: rotate(360deg) translateY(-11.5px); }

// @keyframes iSpinnerBlade {
// 0% {
//     opacity: 0.85; }
// 50% {
//     opacity: 0.25; }
// 100% {
//     opacity: 0.25; } }
//         `)
//     )

//     view.classList.add('ispinner')

//     return view
// }
