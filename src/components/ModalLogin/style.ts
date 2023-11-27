import { Form, Input, Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Modal)`
  .ant-modal-content {
    padding: 24px;
    border-radius: 16px;
  }
`;

export const Title = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.09px;
`;

export const FormCustom = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`;

export const TitleInput = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 20px;
`;

export const FormItem = styled(Form.Item)``;

export const InputPassword = styled(Input.Password)`
  height: 40px;
  font-size: 16px;
  &::placeholder {
    color: var(--neutral-color-400, #98a2b3);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.08px;
  }
`;

export const InputItem = styled(Input)`
  height: 40px;
  font-size: 16px;
  &::placeholder {
    color: var(--neutral-color-400, #98a2b3);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.08px;
  }
`;

export const RowButton = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`;
