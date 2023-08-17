import styled from 'styled-components';
import SectionTitle from './UI/SectionTitle';
import Input from './UI/Input.styled';
import { GreenBtn } from './UI/Btn.styled';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2a3342;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 88px;
  padding-bottom: 88px;
  margin: 0 150px;
  border-radius: 24px;
`;

const FormWrap = styled.form`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 26px auto 16px;
`;

const Text = styled.p`
  color: #8896ab;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export default function SubHeader() {
  function preventReload(event) {
    event.preventDefault();
  }

  return (
    <Wrap>
      <SectionTitle />
      <FormWrap onSubmit={preventReload}>
        <Input />
        <GreenBtn>Get early access</GreenBtn>
      </FormWrap>
      <Text>Start your free 14-day trial today, no credit card required.</Text>
    </Wrap>
  );
}
