import { styled } from 'styled-components';
import Palette from 'styles/Palette';
import Typo from 'styles/Typo';
import { MyPageBoxContainer, Row } from 'assets/common';
import { CategoryLabel } from 'components/Category/CategoryLabel';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

interface qnaBoxInterface {
  children: string;
  count: number;
  dDay: number;
  category: string;
  date: string;
}

export const MyQnaListBox = ({
  children,
  count,
  dDay,
  category,
  date,
}: qnaBoxInterface) => {
  const userType = useRecoilValue(userTypeState);

  return (
    <MyPageBoxContainer height="72px">
      <CountStick ansCount={count} userType={userType} />
      <SubContainer>
        <Row gap={3}>
          <Typo.b3>{userType === 1 ? 'A.' : 'Q.'}</Typo.b3>
          <Typo.b4>{children}</Typo.b4>
        </Row>
        <Row justifyContent="space-between" alignItems="center">
          <Row gap={10} alignItems="center">
            <CategoryLabel>{category}</CategoryLabel>
            {count === 3 && <Typo.s2 color={Palette().Gray4}>{date}</Typo.s2>}
          </Row>
          {count !== 3 && (
            <Typo.s1 color={Palette(userType).Main}>D-{dDay}</Typo.s1>
          )}
        </Row>
      </SubContainer>
    </MyPageBoxContainer>
  );
};

const CountStick = styled.div<{ ansCount?: number; userType: number }>`
  width: 7px;
  height: 100%;
  background: ${({ ansCount, userType }) =>
    ansCount == 0
      ? Palette().Gray2
      : ansCount == 1
      ? `linear-gradient(to top, ${Palette(userType).Main50} 33.3%, ${
          Palette().Gray2
        } 33.3%)`
      : ansCount == 2
      ? `linear-gradient(to top, ${Palette(userType).Main50} 33.3%, ${
          Palette(userType).Main50
        } 33.3%, ${Palette(userType).Main80} 33.3%, ${
          Palette(userType).Main80
        } 66.6%, ${Palette().Gray2} 66.6%)`
      : ansCount == 3
      ? Palette(userType).Main
      : Palette().Black};
  border-radius: 5px 0 0 5px;
`;
const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
