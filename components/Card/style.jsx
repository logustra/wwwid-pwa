import Styled from 'styled-components'

const StyledCard = Styled.figure `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 185px;
    background: var(--white);
    padding: 20px;
    margin: 0;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 1px 3px 8px rgba(39, 44, 49, .03);
    transition: .5s;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        transition: .5s;
    }
`

export const StyledThumbnail = Styled.img `
    min-width: 350px;
    height: 225px;
    object-fit: cover;
    margin: -20px 20px -20px -20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const StyledTitle = Styled.h2 `
    font-size: 21px;
    margin: 0;
`

export const StyledDescriptions = Styled.p `
    word-break: break-all;
    color: var(--medium-midnight);
    line-height: 23px;
    margin: 23px 0;
`

export const StyledInfo = Styled.p `
    font-size: 14px;
    margin-bottom: 0;

    span + span {
        margin-left: 10px;
    }
`

export default StyledCard


