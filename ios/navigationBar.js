import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"
import { styledTags } from '../vanjs/styled.js';
const { div, span, button } = styledTags

export const iOSNavigationBar = (title, onBackButtonClick) => {
  let titleView = span('title')
  return div(
    iOSNavigationBackButton(),
    div(titleView.fontWeight('bold'))
      .position('absolute')
      .left('50%')
      .transform('translateX(-50%)')
  )
  .display('flex')
  .alignItems('center')
  .padding('16px')
  .backgroundColor('white')
  .color('black')
}

const iOSNavigationBackButton = (onClick) => div(
  iOSChevron().marginRight('4px'),
  iOSButton('Back', onClick).cursor('pointer')
).cursor('pointer')

const iOSChevron = (color = '#007AFF') => div([])
        .display('inline-block')
        .borderBottom(`2px solid ${color}`)
        .borderRight(`2px solid ${color}`)
        .transform('rotate(-225deg)')
        .height('10px')
        .width('10px')


const iOSButton = (label, onClick) => button(label)
  .color('#007AFF')
  .onClick(onClick)
