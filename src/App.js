import styled from "styled-components";
import BACChart from "./Chart";

const AppWrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TopSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  margin: 10px;
  color: white;
`;

const BigText = styled.div`
  color: white;
  font-size: 50px;
`;

const SmallText = styled.span`
  color: #aaa;
`;

const Unit = styled.span`
  color: green;
  font-size: 20px;
`;

function App() {
  return (
    <AppWrapper>
      <TopSectionWrapper>
        <TopSection>
          <BigText>
            4.5<Unit>%</Unit>
          </BigText>
          <SmallText>BAC</SmallText>
        </TopSection>
        <TopSection>
          <BigText>
            1<Unit>h</Unit> 20<Unit>min</Unit>
          </BigText>
          <SmallText>Time until 0%</SmallText>
        </TopSection>
      </TopSectionWrapper>
      <BACChart />
    </AppWrapper>
  );
}

export default App;
