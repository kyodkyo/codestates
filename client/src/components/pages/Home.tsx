import { Text } from "../atoms/Text";
import React from "react";
import styled from "styled-components";

import Card from "../atoms/Card";
import { media } from "../../style/media";

const Home = () => {
  return (
    <StyledHomeCard>
      <Text className="big" fontSize="xxl" fontWeight="extraBold">
        {"😁"} ---- 환영합니다 Questions버튼을 눌러보세요 ---- {"😁"}
      </Text>
      <Text className="small" fontSize="xxl" fontWeight="extraBold">
        {"😁"} 환영합니다. 좌측 상단의 햄버거 버튼을 누른 후 Questions버튼을
        눌러보세요 {"😁"}
      </Text>
    </StyledHomeCard>
  );
};

export default Home;

const StyledHomeCard = styled(Card)`
  text-align: center;

  .big {
    display: block;

    ${media.custom("992px")} {
      display: none;
    }
  }

  .small {
    display: none;

    ${media.custom("992px")} {
      display: block;
    }
  }
`;
