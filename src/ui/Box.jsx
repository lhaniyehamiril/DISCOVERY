import styled, { css } from "styled-components";
export const Box = styled.div`
  border-radius: 10% / 50%;
  background: var(--green);
  ${(props) => props.display === 'flex' && css`
  display: flex;
 align-items: center;
justify-content: center;
flex-direction: column;
  `}
`