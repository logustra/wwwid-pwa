import {rem} from 'polished'

interface Fonts {
    family: {
        [key: string]: string,
    },
    size: {
        [key: string]: {
            [key: string]: any,
        }
    },
    weight: {
        [key: string]: string,
    },
}

const Fonts: Fonts = {
    family: {
        systemUI: 'system-ui, sans-serif',
        georgia: 'Georgia, sans-serif'
    },
    size: {
        md: {
            16: rem('16px'),
            14: rem('14px'),
            13: rem('13px'),
            12: rem('12px'),
        },
        lg: {
            21: rem('21px'),
        },
        xl: {
            38: rem('38px'),
            34: rem('34px'),
            30: rem('30px'),
        },
    },
    weight: {
        light: '300',
        norml: '400',
        bold: '700',
    }
}

export default Fonts
