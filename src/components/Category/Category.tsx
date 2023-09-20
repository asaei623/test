import styled from 'styled-components';
import Palette from 'styles/Palette';
import Typo from 'styles/Typo';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

interface propsType {
  id: number;
  name: string;
  selected: boolean;
  onClick: (id: number) => void;
  userType: number;
}
interface containerProps {
  selected: boolean;
  userType: number;
}

const Category = ({ id, name, selected, onClick }: propsType) => {
  const userType = useRecoilValue(userTypeState);

  return (
    <Container
      selected={selected}
      userType={userType}
      onClick={() => onClick(id)}
    >
      <Typo.b3>{name}</Typo.b3>
    </Container>
  );
};

export default Category;

const Container = styled.div<containerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 3px 10px;

  border-radius: 30px;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `
        border : 1.5px solid  ${Palette(props.userType).Main};
        background: ${Palette(props.userType).Main15};
        color : ${Palette(props.userType).Main};
    `
      : `
        border : 0.75px solid ${Palette().Gray3};
        background: ${Palette().White};
        color : ${Palette().Gray3};
    `};
`;
