import { styledTags } from '../vanjs/styled.js'
const { div, style } = styledTags

export const iOSProgressView = () => {
    const blade = () => {
        let view = div()
            .position('absolute')
            .top('6.5px')
            .left('8.5px')
            .width('2.5px')
            .height('6.5px')
            .backgroundColor('#8e8e93')
            .borderRadius('1.25px')
            .animation('iSpinnerBlade 1s linear infinite')
            .willChange('opacity')
        return view
    }

    let view = div(
        blade().transform('rotate(45deg) translateY(-6.5px)').animationDelay('-1.625s'),
        blade().transform('rotate(90deg) translateY(-6.5px)').animationDelay('-1.5s'),
        blade().transform('rotate(135deg) translateY(-6.5px)').animationDelay('-1.375s'),
        blade().transform('rotate(180deg) translateY(-6.5px)').animationDelay('-1.25s'),
        blade().transform('rotate(225deg) translateY(-6.5px)').animationDelay('-1.125s'),
        blade().transform('rotate(270deg) translateY(-6.5px)').animationDelay('-1s'),
        blade().transform('rotate(315deg) translateY(-6.5px)').animationDelay('-0.875s'),
        blade().transform('rotate(360deg) translateY(-6.5px)').animationDelay('-0.75s'),
        style(`
@keyframes iSpinnerBlade {
0% {
    opacity: 0.85; }
50% {
    opacity: 0.25; }
100% {
    opacity: 0.25; } }
        `)
    )

    return view.position('relative').width('20px').height('20px')
}
