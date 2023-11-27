import { Dropdown, Menu, MenuProps } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconArrorRight from "../../assets/images/arror-right.svg";
import IconArrowDown from "../../assets/images/arrow-down.svg";
import Avatar from "../../assets/images/avatar.svg";
import Down from "../../assets/images/down.svg";
import IconMenu from "../../assets/images/icon-menu.png";
import Logo from "../../assets/images/logo.svg";
import Phone from "../../assets/images/phone.svg";
import { ROUTES } from "../../routes/routes";
import {
  setLogout,
  setOpenLogin,
  setRequestAdvise,
} from "../../store/appSlice";
import { RootState } from "../../store/store";
import Button from "../Button";
import ModalLogin from "../ModalLogin";
import RequestAdvise from "../RequestAdvise";

import { TypeButtonEnum } from "../../utils/constants";
import Sidebar from "../Sidebar";
import {
  Bar,
  ContentMenu,
  GroupMenu,
  IconExpand,
  IconLogo,
  InfoUser,
  ItemLogin,
  ItemPhone,
  LabelMenu,
  LoginInfo,
  MenuCustom,
  MenuSmall,
  UserName,
  Wrapper,
} from "./style";

const items: MenuProps["items"] = [
  {
    label: (
      <LabelMenu>
        Sản phẩm <img src={IconArrowDown} alt="" />
      </LabelMenu>
    ),
    key: "product",
    children: [
      {
        label: "Thẻ tín dụng",
        key: "credit-cart",
        children: [
          {
            label: "MSB Mastercard mDigi",
            key: "msb-mastercard-mdigi",
          },
          {
            label: "MSB Mastercard Super Free",
            key: "msb-mastercard-super-free",
          },
          {
            label: "MSB Visa Online",
            key: "msb-visa-online",
          },
          {
            label: "MSB Visa Travel",
            key: "msb-visa-travel",
          },
          {
            label: "MSB Visa Signature",
            key: "msb-visa-signature",
          },
        ],
      },
      {
        label: "Vay",
        key: "borrow",
        children: [
          {
            label: "Vay mua nhà",
            key: "borrow-house",
          },
          {
            label: "Vay mua xe",
            key: "borrow-traffic",
          },
          {
            label: "Vay học tập",
            key: "borrow-study",
          },
        ],
      },
      {
        label: "Bảo hiểm",
        key: "insurance",
      },
    ],
  },
  {
    label: (
      <LabelMenu>
        So sánh <img src={IconArrowDown} alt="" />
      </LabelMenu>
    ),
    key: "compare",
    children: [
      {
        label: "So sánh 1",
        key: "compare-1",
      },
      {
        label: "So sánh 2",
        key: "compare-2",
      },
    ],
  },
  {
    label: <LabelMenu>Câu hỏi thường gặp</LabelMenu>,
    key: "question",
  },
];

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);

  const isLogin = useSelector((state: RootState) => state.app.isLogin);
  const userInfo = useSelector((state: RootState) => state.app.userInfo);
  const openRequestAdvise = useSelector(
    (state: RootState) => state.app.openRequestAdvise
  );
  const openLogin = useSelector((state: RootState) => state.app.openLogin);

  const onClickMenu: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const handleOpenLogin = () => {
    dispatch(setOpenLogin(true));
  };

  const handleMenuClick = (e: any) => {
    switch (e.key) {
      case "account-management": {
        navigate(ROUTES.ACCOUNT_MANAGEMENT);
        break;
      }
      case "logout": {
        dispatch(setLogout());
        break;
      }
      default:
        break;
    }
  };

  const handleOpenRequestAdvise = () => {
    dispatch(setRequestAdvise(true));
  };

  const menuLogin = (
    <MenuCustom
      selectedKeys={[
        window.location.pathname === ROUTES.ACCOUNT_MANAGEMENT
          ? "account-management"
          : "",
      ]}
      onClick={handleMenuClick}
    >
      <MenuCustom.Item key="account-management">
        Quản lý tài khoản
      </MenuCustom.Item>
      <MenuCustom.Item key="logout">Đăng xuất</MenuCustom.Item>
    </MenuCustom>
  );

  return (
    <Wrapper>
      <IconLogo onClick={() => navigate(ROUTES.HOME)} src={Logo} alt="" />
      <ContentMenu>
        <GroupMenu>
          <Menu
            expandIcon={
              <IconExpand
                style={{ transition: "none" }}
                src={IconArrorRight}
                alt=""
              />
            }
            onClick={onClickMenu}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
          {!isLogin && (
            <ItemLogin onClick={handleOpenLogin}>Đăng nhập</ItemLogin>
          )}

          <ItemPhone>
            <img src={Phone} alt="" />
            1900 6083
          </ItemPhone>
        </GroupMenu>
        <Button
          onClick={handleOpenRequestAdvise}
          width="123px"
          text="Yêu cầu tư vấn"
          type={TypeButtonEnum.NORMAL}
        />
        {isLogin && (
          <LoginInfo>
            <Bar />
            <Dropdown
              trigger={["click"]}
              overlay={menuLogin}
              placement="bottomLeft"
            >
              <InfoUser>
                <img src={Avatar} alt="" />
                <UserName>
                  {userInfo.firstName} {userInfo.lastName || ""}
                </UserName>
                <img src={Down} alt="" />
              </InfoUser>
            </Dropdown>
          </LoginInfo>
        )}
      </ContentMenu>
      <MenuSmall onClick={() => setOpenSidebar(true)} src={IconMenu} alt="" />
      {openLogin && <ModalLogin />}
      {openRequestAdvise && <RequestAdvise />}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
    </Wrapper>
  );
}
