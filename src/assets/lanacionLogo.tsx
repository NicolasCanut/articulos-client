import styled from 'styled-components'

export const LanacionLogo = styled.div.attrs((props: {imgSrc: string}) => props)`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imgSrc});
    backgrond-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`
