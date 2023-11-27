import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RootState } from "../../store/store";
import { Content, Wrapper } from "./style";

export default function PrivateLayout() {
  const isLogin = useSelector((state: RootState) => state.app.isLogin);

  if (!isLogin) return <Navigate to="/" replace />;

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
