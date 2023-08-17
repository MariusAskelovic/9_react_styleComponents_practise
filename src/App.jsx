import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Companies from './components/Companies';

const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export default function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Header />
      <SubHeader />
      <Companies />
    </Wrap>
  );
}
