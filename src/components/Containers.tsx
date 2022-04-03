import styled from 'styled-components'

export const Main = styled.div<{height: string; flexDirection: string; marginTop: string}>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    height: ${(props) => props.height};
    width: 1366px;
    max-width: 90%;
    margin: auto;
    margin-top: ${(props) => props.marginTop};
    border: 1px solid green;
    overflow: hidden;
`

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-family: 'SuecaSlab', 'Georgia', 'serif';
    border: 1px solid blue;
    overflow: hidden;
`
