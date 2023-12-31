import { Column, EntireContainer } from 'assets/common';
import WriteInputBox from 'components/common/WriteInputBox';
import { QDetailCard } from 'components/common/Card';
import { Header } from 'components/common/Header';
import WriteConfirmBar from 'components/common/WriteConfirmBar';
import Palette from 'styles/Palette';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

const WriteAnswer = () => {
  const userType = useRecoilValue(userTypeState);

  return (
    <Column>
      <Header borderBottom={true} color={Palette(userType).Main}>
        답변하기
      </Header>
      <EntireContainer>
        <Column gap={22} alignItems="center">
          <QDetailCard />
          <WriteInputBox
            minHeight={203}
            placeholder="시니어님의 경험을 바탕으로 답변을 작성해주세요."
          />
        </Column>
      </EntireContainer>
      <WriteConfirmBar />
    </Column>
  );
};

export default WriteAnswer;
