import { styled } from 'styled-components';
import Palette from 'styles/Palette';
import Typo from 'styles/Typo';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

export const CategoryLabel = ({ children }: { children: React.ReactNode }) => {
  const userType = useRecoilValue(userTypeState);
  return (
    <Container userType={userType}>
      <Typo.s2>{children}</Typo.s2>
    </Container>
  );
};

const Container = styled.div<{ userType: number }>`
  display: flex;
  width: fit-content;
  height: 19px;
  padding: 10px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ userType }) => Palette(userType).Main15};
`;
