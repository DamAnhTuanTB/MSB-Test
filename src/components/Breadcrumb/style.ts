import { Breadcrumb } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Breadcrumb)`
  ol > li {
    color: var(--neutral-color-500, #667085);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.07px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  ol > li:last-child {
    color: var(--branding-primary-color-500, #f4600c);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.07px;
  }
  .ant-breadcrumb-separator {
    margin-inline: 4px !important;
  }
`;
