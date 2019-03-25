import {css} from 'styled-components';

const screens = {
    max: {
        xs: 375,
        sm: 575,
        md: 767,
        lg: 991,
        xl: 1199,
    },
    min: {
        xs: 376,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    }
}

const MediaQueryMax = Object.keys(screens.max).reduce((acc, label) => {
    acc[label] = (...args) => css `
        @media (max-width: ${screens.max[label]}px) {
            ${css(...args)}
        }
    `

    return acc
}, {})

const MediaQueryMin = Object.keys(screens.min).reduce((acc, label) => {
    acc[label] = (...args) => css `
        @media (min-width: ${screens.min[label]}px) {
            ${css(...args)}
        }
    `

    return acc
}, {})

export {
    MediaQueryMax,
    MediaQueryMin
}
