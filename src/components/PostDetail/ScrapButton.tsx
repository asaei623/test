import scrapOff from 'assets/icons/scrap-off.svg';
import scrapOnCyni from 'assets/icons/scrap-on-cyni.svg';
import scrapOnJuni from 'assets/icons/scrap-on-juni.svg';
import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userTypeState } from 'recoil/state';

const ScrapButton = () => {
  const [isScraped, setIsScraped] = useState<boolean>(false);
  const userType = useRecoilValue(userTypeState);

  const handleClick = () => {
    setIsScraped(!isScraped);
  };

  return (
    <ScrapImg
      src={isScraped ? (userType === 1 ? scrapOnCyni : scrapOnJuni) : scrapOff}
      onClick={handleClick}
    ></ScrapImg>
  );
};

export default ScrapButton;

const ScrapImg = styled.img`
  cursor: pointer;
`;
