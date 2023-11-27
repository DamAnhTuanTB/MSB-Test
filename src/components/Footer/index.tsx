import { Content, ItemLink, License, Links, Wrapper } from "./style";

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <License>
          Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB
        </License>
        <Links>
          <ItemLink>Điều khoản dịch vụ</ItemLink>
          <ItemLink>Ngân hàng điện tử</ItemLink>
        </Links>
      </Content>
    </Wrapper>
  );
}
