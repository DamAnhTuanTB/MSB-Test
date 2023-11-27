import styled from "styled-components";
import { breakpoints } from "../../configs/breakpoints";

export const Wrapper = styled.div`
  padding: 16px 10px;
  border-top: 1px solid var(--neutral-color-200, #eaecf0);
  background: var(--neutral-color-50, #f9fafb);
`;

export const Content = styled.div`
  max-width: 1048px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const License = styled.div`
  color: var(--neutral-color-500, #667085);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.06px;
  @media screen and (max-width: ${breakpoints.md}) {
    text-align: center;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 24px;
`;

export const ItemLink = styled.div`
  color: var(--neutral-color-500, #667085);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;
