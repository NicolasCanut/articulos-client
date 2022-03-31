import styled from 'styled-components';

export const Span = styled.span<{color: string}>`
    color: ${(props) => props.color};
`