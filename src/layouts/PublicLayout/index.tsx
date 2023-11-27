import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Content, Wrapper } from "./style";

export default function PublicLayout() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Wrapper>
  );
}
