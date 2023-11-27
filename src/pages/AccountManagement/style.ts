import styled from "styled-components";
import { breakpoints } from "../../configs/breakpoints";

export const Wrapper = styled.div`
  max-width: 1048px;
  margin: auto;
  padding: 24px 10px;
`;

export const MainContent = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;
