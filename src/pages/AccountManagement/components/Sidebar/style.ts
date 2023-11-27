import styled from "styled-components";
import { breakpoints } from "../../../../configs/breakpoints";

export const Wrapper = styled.div`
  width: 333px;
  border: 1px solid var(--neutral-color-200, #eaecf0);
  background: var(--base-white, #fff);
  border-radius: 12px;
  @media screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const UserName = styled.div`
  padding: 16px;
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
`;

export const ListItem = styled.div`
  border-top: 1px solid var(--neutral-color-200, #eaecf0);
`;

export const SidebarItem = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &.selected {
    background: var(--branding-primary-color-25, #fef7f3);
    color: var(--branding-primary-color-500, #f4600c);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;

export const Text = styled.div``;
