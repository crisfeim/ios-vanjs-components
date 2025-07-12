import { styledTags } from '../vanjs/styled.js'
const { div, style } = styledTags

const uid = () => crypto.randomUUID().slice(0, 8);
export const iOSProgressView = () => {
    const animationId = uid();
    const blades = Array.from({ length: 8 }, (_, i) => blade(i + 1, animationId))

    return div(...blades, keyFrames(animationId))
    .position('relative')
    .width('20px')
    .height('20px')
}

const blade = (n, animationId) => {
    let view = div()
        .position('absolute')
        .top('6.5px')
        .left('8.5px')
        .width('2.5px')
        .height('6.5px')
        .backgroundColor('#8e8e93')
        .borderRadius('1.25px')
        .animation(`${animationId} 1s linear infinite`)
        .willChange('opacity')
        .transform(`rotate(${n*45}deg) translateY(-6.5px)`)
        .animationDelay(`-${1.75-(0.125*n)}s`)
    return view
}

const keyFrames = (animationId) => {
   return style(`
@keyframes ${animationId} {
0% {
opacity: 0.85; }
50% {
opacity: 0.25; }
100% {
opacity: 0.25; } }
    `)
}
