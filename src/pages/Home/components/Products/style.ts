import styled from "styled-components";
import { breakpoints } from "../../../../configs/breakpoints";

export const Wrapper = styled.div`
  max-width: 1048px;
  margin: auto;
  padding: 88px 0px;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 20px 10px;
  }
`;

export const Title = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.12px;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 18px;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    margin-bottom: 20px;
  }
`;

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 24px;
  @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;

export const ProductItem = styled.div`
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Group = styled.div``;

export const Content = styled.div`
  flex: 1;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

export const Name = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.09px;
`;

export const Description = styled.div`
  color: #344054;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.08px;
  margin-bottom: 22px;
`;

export const Explore = styled.div`
  color: var(--branding-primary-color-500, #f4600c);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
