import { MyPageBoxContainer, Row, TextContainer } from 'assets/common';
import Palette from 'styles/Palette';
import Typo from 'styles/Typo';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

interface commentBoxInterface {
  children: string;
  title: string;
  date: string;
}

export const CommentListBox = ({
  children,
  title,
  date,
}: commentBoxInterface) => {
  const userType = useRecoilValue(userTypeState);

  let icon = 'juni_commentSubIcon';
  if (userType == 0) icon = 'juni_commentSubIcon';
  else if (userType == 1) icon = 'cyni_commentSubIcon';

  return (
    <MyPageBoxContainer padding="14px" height="79px">
      <TextContainer>
        <Typo.b4>{children}</Typo.b4>
        <Row gap={5}>
          <img src={`/img/${icon}.svg`} />
          <Typo.b4 color={Palette().Gray4}>{title}</Typo.b4>
        </Row>
        <Typo.s2 color={Palette().Gray4}>{date}</Typo.s2>
      </TextContainer>
    </MyPageBoxContainer>
  );
};
