import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"
import { iOSList } from './list.js'
import { iOSProgressView } from './progressView.js'
import { styledTags } from '../vanjs/styled.js'
const { p, div, style } = styledTags

export const iOSAsyncList = (screenTitle, loader) => {
    const state = van.state({ status: 'loading', payload: [] })

    const load = async () => {
        loader()
             .then((result) => state.val = { status: "success", payload: result })
             .catch(() => state.val = { status: "error", payload: null })
    }
    return div(() => {
        const { status, payload } = state.val;
        if (status === "loading") return iOSProgressView();
        if (status === "success") return iOSList(screenTitle, payload);
        if (status === "error") return p('Error');
      }).onAppear(() => load())
    .width('100%')
    .height('100%')
    .display('flex')
    .alignItems('center')
    .justifyContent('center')
}
