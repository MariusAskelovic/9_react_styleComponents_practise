import styled from 'styled-components';
import { EmptyBtn, GreenBtn2 } from './UI/Btn.styled';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 88px;
  padding-right: 88px;
  height: 88px;
`;

const Logo = styled.img.attrs(() => ({
  src: '/img/Logo.svg',
  alt: 'logo',
}))`
  height: 32px;
`;

const UnorderList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 48px;
`;

const List = styled.li`
  font-size: 16px;
  color: #556987;
  font-weight: 500;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 24px;
`;

export default function Header() {
  return (
    <Wrap>
      <Logo />
      <UnorderList>
        <List>Product</List>
        <List>Features</List>
        <List>Pricing</List>
        <List>Resources</List>
      </UnorderList>
      <BtnGroup>
        <EmptyBtn>Log In</EmptyBtn>
        <GreenBtn2>Sign Up</GreenBtn2>
      </BtnGroup>
    </Wrap>
  );
}
