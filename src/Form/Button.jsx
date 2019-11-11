import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  font-size: 1rem;
  padding: 0.7em 1em;
  border: 0;
  color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgba(41, 18, 66, 0.3);
  transition: background 1s;
  width: fit-content;
  word-break: keep-all;
  &:focus {
    ${props => {
    if (props.background === false) {
      return css``;
    }
    return css`
        background: #3f1e63;
      `;
  }}
    outline: 0;
  }
`;

export default Button;