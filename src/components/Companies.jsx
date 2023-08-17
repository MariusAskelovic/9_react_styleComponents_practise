import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  margin: 88px 150px;
  text-align: center;
`;

const Text = styled.p`
  color: #bbc3cf;
  font-weight: 500;
`;

const Logos = styled.img.attrs((props) => ({
  src: `/img/${props.imgSrc}`,
  alt: 'lalala',
}))``;

export default function Companies() {
  return (
    <Wrap>
      <Text>Join 4,000+ companies already growing</Text>
      <Flex>
        <Logos imgSrc='JiggleLogo.svg' />
        <Logos imgSrc='resecurbLogo.svg' />
        <Logos imgSrc='SymtricLogo.svg' />
        <Logos imgSrc='WelyticsLogo.svg' />
        <Logos imgSrc='WishelpLogo.svg' />
      </Flex>
    </Wrap>
  );
}
