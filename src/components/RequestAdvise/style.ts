import { Checkbox, Drawer, Form, Input, Radio, Select } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../configs/breakpoints";

export const Wrapper = styled(Drawer)`
  .ant-drawer-header {
    padding: 16px;
    .ant-drawer-header-title {
      flex-direction: row-reverse;
      div {
        color: var(--neutral-color-800, #1d2939);
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.09px;
      }
      button {
        margin-inline-end: 0px;
      }
    }
  }
  .ant-drawer-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ant-radio-group {
    .ant-radio-wrapper {
      margin-inline-end: 72px !important;
      .ant-radio-inner::after {
        background-color: #f4600c;
        transform: scale(0.6);
      }
    }
    .ant-radio-checked .ant-radio-inner {
      background-color: white !important;
      border-color: #f4600c !important;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
  margin-bottom: 16px;
`;

export const FormCustom = styled(Form)`
  .ant-form-item {
    /* margin-bottom: 16px; */
  }
  .ant-checkbox-group {
    display: grid !important;
    row-gap: 16px;
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .no-margin-bottom{
    margin-bottom: 0px !important;
  }
`;

export const TitleInput = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const FormItem = styled(Form.Item)``;

export const InputItem = styled(Input)`
  height: 40px;
  font-size: 16px;
  &::placeholder {
    color: var(--neutral-color-400, #98a2b3);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.08px;
  }
`;

export const SelectCustom = styled(Select)`
  height: 40px;
  .ant-select-selection-placeholder {
    color: var(--neutral-color-400, #98a2b3);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.08px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media screen and (max-width: ${breakpoints.sm}) {
   flex-direction: column;
   gap: 0px;
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const RadioCustom = styled(Radio)``;

export const TitleProduct = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
  margin-bottom: 16px;
`;

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: #f4600c !important;
      border-color: #f4600c !important;
    }
  }
`;

export const TextAreaItem = styled(Input.TextArea)`
  font-size: 16px;
  &::placeholder {
    color: var(--neutral-color-400, #98a2b3);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.08px;
  }
`;
