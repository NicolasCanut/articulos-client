import styled from 'styled-components'

export const Title = styled.h1`
    z-index: 999;
    font-size: 1.625rem;
    font-weight: 600;
    line-height: 2.0625rem;
    letter-spacing: -0.4px;
    text-decoration: underline;
    width: 1366px !important;
    text-underline-position: under;
`

export const TextLink = styled.a`
    font-size: 0.875rem;
    color: #0074c4;
    margin-right: 1.3125em;
    text-decoration: none;
    &:hover {
        opacity: 0.8;
        transition: 0.3s;
    }
    cursor: pointer;
    `

export const ImgLink = styled.a<{ height: any, width: any }>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    color: #000000;
    &:hover {
        opacity: 0.8;
        transition: 0.3s;
    }
    cursor: pointer;
`
