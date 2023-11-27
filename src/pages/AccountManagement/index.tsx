import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { SelectedSidebar } from "../../utils/constants";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import { MainContent, Wrapper } from "./style";

export default function AccountManagement() {
  const navigate = useNavigate();
  const [selectedSidebar, setSelectedSidebar] = useState(
    SelectedSidebar.USER_INFO
  );

  return (
    <Wrapper>
      <Breadcrumb
        items={[
          {
            title: <div onClick={() => navigate("/")}>Trang chủ</div>,
          },
          {
            title: "Quản lý tài khoản",
          },
        ]}
      />
      <MainContent>
        <Sidebar
          selectedSidebar={selectedSidebar}
          setSelectedSidebar={setSelectedSidebar}
        />
        <Tabs
          selectedSidebar={selectedSidebar}
          setSelectedSidebar={setSelectedSidebar}
        />
        <Content selectedSidebar={selectedSidebar} />
      </MainContent>
    </Wrapper>
  );
}
