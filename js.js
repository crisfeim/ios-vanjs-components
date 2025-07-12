import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"
import { styledTags } from './vanjs/styled.js';
import { iOSList } from './ios/list.js';
import { iOSAsyncList } from './ios/asynclist.js';
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
