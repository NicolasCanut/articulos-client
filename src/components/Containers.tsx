import styled from 'styled-components'

export const Main = styled.div<{ height: string, flexDirection: string, marginTop: string, onBreakpoint: string }>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    height: ${(props) => props.height};
    width: 1366px;
    max-width: 90%;
    margin: auto;
    margin-top: ${(props) => props.marginTop};
    border: 1px solid green;
    overflow: hidden;
    @media(max-width: 900px){
        ${(props) => props.onBreakpoint}
    }
`

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-family: 'SuecaSlab';
    border: 1px solid blue;
    overflow: hidden;
`

export const Cover = styled.div`
    border: 1px solid red;
    height: 170px;
    width: 100%;
    margin-top: 80px;
    background-color: #F3F3F3;
`

export const Aside = styled.aside`
    border: 1px solid blue;
    height: 100%;
    width: 300px;
    min-width: 300px;
    background-color: #9FDAE9;
    @media(max-width: 900px){
        display: none;
    }
`

export const Advertising = styled.div<{ height: string, width: string }>` 
    background-color: #9FDAE9;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
`
