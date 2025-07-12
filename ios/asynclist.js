import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"
import { iOSList } from './list.js'
import { iOSProgressView } from './progressView.js'
import { styledTags } from '../vanjs/styled.js'
const { p, div, style } = styledTags

export const iOSAsyncList = (screenTitle, loader) => {
    const state = van.state({ status: 'loading', payload: [] })
    const loadingView = iOSProgressView()
    const errorView = p('Error')

    const load = async () => {
        loader()
             .then((result) => state.val = { status: "success", payload: result })
             .catch(() => state.val = { status: "error", payload: null })
    }
    return div(() => {
        const { status, payload } = state.val;
        if (status === "loading") return loadingView;
        if (status === "success") return iOSList(screenTitle, payload).width('300px').aspectRatio('9 / 16');
        if (status === "error") return errorView;
      }).onAppear(() => load())
}
