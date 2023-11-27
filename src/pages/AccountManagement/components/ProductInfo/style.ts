import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid var(--neutral-color-200, #eaecf0);
  background-color: white;
  border-radius: 12px;
`;

export const Title = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
  padding: 16px;
  border-bottom: 1px solid var(--neutral-color-200, #eaecf0);
`;

export const Content = styled.div`
  padding: 16px;
  padding-top: 0px;
  height: 150px;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

export const Label = styled.div`
  width: 120px;
  color: var(--neutral-color-500, #667085);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

export const Value = styled.div`
  color: var(--neutral-color-800, #1d2939);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
