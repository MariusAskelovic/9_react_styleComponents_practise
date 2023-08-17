import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 88px;
  padding-right: 88px;
  height: 88px;
`;

export default function Header() {
  return <Wrap>Header</Wrap>;
}
