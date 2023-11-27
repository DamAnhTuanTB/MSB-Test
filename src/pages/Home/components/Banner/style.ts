import styled from "styled-components";
import { breakpoints } from "../../../../configs/breakpoints";

export const Wrapper = styled.div`
  .slick-dots {
    li {
      width: 24px !important;
    }
    button {
      background-color: #eaecf0 !important;
      opacity: 1 !important;
      border-radius: 3px !important;
    }
    .slick-active button {
      background-color: #f4600c !important;
      opacity: 1 !important;
    }
  }
`;

export const ItemBanner = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0px 15px;
`;

export const MainContent = styled.div`
  max-width: 1048px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TextGroup = styled.div`
  max-width: 423px;
  @media screen and (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`;
export const Title = styled.div`
  color: var(--neutral-color-800, #1d2939);
  /* Desktop/H2-[Bold] */
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; 
  letter-spacing: -0.2px;
  margin-bottom: 16px;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 16px; 
  }
`;

export const Description = styled.div`
  color: var(--neutral-color-500, #667085);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.08px;
  margin-bottom: 32px;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 6px;
  }
`;
