import { Fragment } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logos = styled.img.attrs((props) => ({
  src: `/img/${props.children}`,
  alt: 'lalala',
}))``;

export default function Companies() {
  return (
    <Fragment>
      <p>Join 4,000+ companies already growing</p>
      <Wrap>
        <Logos></Logos>
      </Wrap>
    </Fragment>
  );
}
