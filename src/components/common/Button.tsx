import styled from 'styled-components';
import Palette from 'styles/Palette';
import Typo from 'styles/Typo';
import ctaArrow from 'assets/icons/cta-arrow.svg';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

interface buttonProps {
  children: string;
  to: string;
}
export const LongBtn = ({ children, to }: buttonProps) => {
  const userType = useRecoilValue(userTypeState);

  return (
    <Container to={to} userType={userType}>
      <Typo.h5 color={Palette().White}>{children}</Typo.h5>
    </Container>
  );
};

export const ShortBtn = ({ children, to }: buttonProps) => {
  const userType = useRecoilValue(userTypeState);

  return (
    <Container to={to} userType={userType}>
      <Typo.b4 color={Palette().White}>{children}</Typo.b4>
    </Container>
  );
};

export const CTABtn = ({ children, to }: buttonProps) => {
  const userType = useRecoilValue(userTypeState);

  return (
    <CTABtnContainer to={to} userType={userType}>
      <Typo.b3 color={Palette().White}>{children}</Typo.b3>
      <img src={ctaArrow}></img>
    </CTABtnContainer>
  );
};

const Container = styled(Link)<{ width?: number; userType?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  background: ${({ userType }) => Palette(userType).Main};

  text-decoration: none;
  cursor: pointer;
`;
const CTABtnContainer = styled(Container)`
  width: 130px;
  height: 33px;
`;
