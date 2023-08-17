import styled from 'styled-components';

const Input = styled.input.attrs(() => ({
  placeholder: 'Enter your work email',
  type: 'email',
}))`
  color: #667085;
  font-size: 16px;
`;

export default Input;
