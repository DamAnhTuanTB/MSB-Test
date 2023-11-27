import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconTextFile from "../../../../assets/images/file-text.svg";
import IconLogOut from "../../../../assets/images/log-out.svg";
import IconUser from "../../../../assets/images/user.svg";
import { ROUTES } from "../../../../routes/routes";
import { setLogout } from "../../../../store/appSlice";
import { RootState } from "../../../../store/store";
import { SelectedSidebar } from "../../../../utils/constants";
import { ListItem, SidebarItem, Text, UserName, Wrapper } from "./style";

export const listSidebar = [
  {
    name: "Thông tin tài khoản",
    value: SelectedSidebar.USER_INFO,
    icon: IconUser,
  },
  {
    name: "Thông tin sản phẩm",
    value: SelectedSidebar.PRODUCT_INFO,
    icon: IconTextFile,
  },
  {
    name: "Đăng xuất",
    value: SelectedSidebar.LOGOUT,
    icon: IconLogOut,
  },
];

export default function Sidebar({
  selectedSidebar,
  setSelectedSidebar,
}: {
  selectedSidebar: string;
  setSelectedSidebar: React.Dispatch<React.SetStateAction<SelectedSidebar>>;
}) {
  const userInfo = useSelector((state: RootState) => state.app.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickSidebar = (item: {
    name: string;
    value: SelectedSidebar;
  }) => {
    if (item.value !== "logout") {
      setSelectedSidebar(item.value);
    } else {
      dispatch(setLogout());
      navigate(ROUTES.HOME);
    }
  };
  return (
    <Wrapper>
      <UserName>
        {userInfo.firstName} {userInfo.lastName || ""}
      </UserName>
      <ListItem>
        {listSidebar.map((item, index) => (
          <SidebarItem
            key={index}
            onClick={() => handleClickSidebar(item)}
            className={`${item.value === selectedSidebar && "selected"}`}
          >
            <img src={item.icon} alt="" />
            <Text>{item.name}</Text>
          </SidebarItem>
        ))}
      </ListItem>
    </Wrapper>
  );
}
