import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';

const Wrap = styled.div`
  background-color: #efefef;
  margin-left: auto;
  margin-right: auto;
`;

export default function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Header />
    </Wrap>
  );
}
