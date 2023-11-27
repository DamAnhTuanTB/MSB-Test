import { Button, Drawer } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Drawer)`
  .ant-menu-submenu-arrow {
    border: none !important;
  }
  .ant-drawer-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
  flex: 1;
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const AccountManagement = styled(Button)`
  height: 40px;
  text-align: center;
`;
