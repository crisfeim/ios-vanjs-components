import { styledTags } from '../vanjs/styled.js';
const { p, ul, li, div, style } = styledTags;

export const iOSList = (screenTitle, items, cell = (item) => li(item)) => {
    const title = p(screenTitle)
      .fontWeight('bold')
      .fontSize('24px')
      .marginBottom('12px')

    const list = ul(...items.map(cell))
    .background('white')
    .borderRadius('8px')
    .listStyle('none')
    .padding(0)

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
        .background('#efeef5')
        .color('black')
        .cursor('default')
        .overflow('scroll')
        .width('100%')
        .height('100%')
        .padding('16px')
        .boxSizing('border-box')

    view.classList.add('ios-list')
    return view
}
