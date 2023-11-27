import { Menu } from "antd";
import { styled } from "styled-components";
import { breakpoints } from "../../configs/breakpoints";
export const Wrapper = styled.div`
  z-index: 100;
  background: white;
  height: 72px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1d2939;
  .ant-menu-horizontal {
    border-bottom: none !important;
  }
  .ant-menu-overflow-item {
    padding: 0px 10px !important;
  }
  position: sticky;
  top: 0;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 10px;
  }
`;

export const MenuSmall = styled.img`
  width: 30px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.lg}) {
    display: block;
  }
`;

export const LabelMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconExpand = styled.img`
  width: 17px !important;
`;

export const IconLogo = styled.img`
  cursor: pointer;
`;

export const ContentMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const GroupMenu = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  padding-right: 24px;
`;

export const ItemLogin = styled.div`
  margin: 0px 10px;
  cursor: pointer;
`;

export const ItemPhone = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0px 10px;
  white-space: nowrap;
`;

export const LoginInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 24px;
`;

export const Bar = styled.div`
  width: 1.5px;
  height: 16px;
  background: #98a2b3;
  border-radius: 2px;
  display: inline-block;
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const UserName = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const MenuCustom = styled(Menu)`
  margin-top: 16px !important;
  li {
    padding: 16px !important;
    span {
      color: var(--neutral-color-800, #1d2939);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.08px;
    }
  }
`;
