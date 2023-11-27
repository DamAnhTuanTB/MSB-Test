import { Button } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../configs/breakpoints";

export const ButtonCustom = styled(Button)`
  padding: 0px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    /* filter: brightness(0.8); */
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 12px;
    height: 30px !important;
    line-height: 16px;
  }
`;
