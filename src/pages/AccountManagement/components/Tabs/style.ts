import styled from "styled-components";
import { breakpoints } from "../../../../configs/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const TabItem = styled.div`
  cursor: pointer;
  &.selected {
    color: var(--branding-primary-color-500, #f4600c);
    font-weight: 600;
  }
  font-size: 12px;
`;
