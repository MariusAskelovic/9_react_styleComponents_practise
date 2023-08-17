import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2a3342;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 88px;
  padding-bottom: 88px;
`;

const Pill = styled.p`
  padding: 2px 8px;
  text-align: center;
  border-radius: 36px;
  background-color: #22c55e;
  color: white;
  text-transform: uppercase;
  display: inline-block;
  font-size: 12px;
`;

const Title = styled.h2`
  color: white;
  font-size: 60px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #8896ab;
  font-size: 20px;
  font-weight: 500;
  max-width: 715px;
`;

export default function SectionTitle() {
  return (
    <Wrap>
      <Pill>Header</Pill>
      <Title>
        A small business is only <br></br> as good as its tools.
      </Title>
      <Subtitle>
        We&apos;re different. Flex is the only saas business platform that lets
        you run your business on one platform, seamlessly across all digital
        channels.
      </Subtitle>
    </Wrap>
  );
}
