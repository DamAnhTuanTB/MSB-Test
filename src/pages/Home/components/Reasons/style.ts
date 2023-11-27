import styled from "styled-components";
import { breakpoints } from "../../../../configs/breakpoints";

export const Wrapper = styled.div`
  background-color: white;
  max-width: 1048px;
  margin: auto;
  display: flex;
  height: 216px;
  border-radius: 16px;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.1); /* Đổ bóng với độ mờ và màu được chỉ định */
  @media screen and (max-width: ${breakpoints.md}) {
    box-shadow: none;
    flex-direction: column;
    height: max-content;
    padding: 10px;
  }
`;

export const WhyItem = styled.div`
  width: 269px;
  padding: 48px;
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.12px;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 10px;
  }
`;

export const ListReason = styled.div`
  flex: 1;
  display: flex;
  & > div {
    flex: 1;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ReasonItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
  img {
    width: 40px;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.09px;
`;

export const Description = styled.div`
  color: var(--neutral-color-500, #667085);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  @media screen and (max-width: ${breakpoints.md}) {
    text-align: center;
  }
`;
