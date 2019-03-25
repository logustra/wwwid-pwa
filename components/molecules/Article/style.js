import Styled from 'styled-components'

import {
    StyledCard,
    StyledThumbnail,
    StyledDescription
} from '../../atoms'

const StyledArticle = Styled(StyledCard)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 185px;
    margin-bottom: 30px;
    transition: .5s;
    cursor: pointer;

    &:first-of-type {
        margin-top: 95px;
    }

    &:hover {
        transform: scale(1.01);
        transition: .5s;
    }

    ${StyledThumbnail} {
        min-width: 350px;
        height: 225px;
        margin: -20px 20px -20px -20px;
    }

    ${StyledDescription} {
        line-height: 23px;
        margin: 23px 0;
    }
`

export default StyledArticle


