import styled, { keyframes } from "styled-components";
// div animation
const divAnimation = keyframes`
to {
    opacity: 1;
  }
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
`
const ImgEarth = styled.img`
animation: ${divAnimation} 1 1s;
`
const DivSlowContent = styled.div`
animation: ${divAnimation} 1 1s;
`
export { DivSlowContent, ImgEarth }