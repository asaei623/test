import { Row } from 'assets/common';
import styled from 'styled-components';
import Palette from 'styles/Palette';

const PageIndicator = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default PageIndicator;

const Container = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;
export const Dot = styled.div<{ selected: boolean; userType: number }>`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background: ${({ selected, userType }) =>
    selected ? Palette(userType).Main : Palette().Gray2};
`;
