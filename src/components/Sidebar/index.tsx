import { Menu, MenuProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import {
  setLogout,
  setOpenLogin,
  setRequestAdvise,
} from "../../store/appSlice";
import { RootState } from "../../store/store";
import { TypeButtonEnum } from "../../utils/constants";
import Button from "../Button";
import { Content, GroupButton, Wrapper } from "./style";

const items: MenuProps["items"] = [
  {
    label: "Sản phẩm",
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
    label: "So sánh",
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
    label: "Câu hỏi thường gặp",
    key: "question",
  },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.app.isLogin);
  const userInfo = useSelector((state: RootState) => state.app.userInfo);

  const openRequestAdvise = () => {
    dispatch(setRequestAdvise(true));
    onClose();
  };

  const openLogin = () => {
    dispatch(setOpenLogin(true));
    onClose();
  };

  const logout = () => {
    dispatch(setLogout());
    onClose();
  };

  const openAccountManagement = () => {
    navigate(ROUTES.ACCOUNT_MANAGEMENT);
    onClose();
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClickMenu = () => {
    setOpen(false);
  };
  return (
    <Wrapper onClose={onClose} title="Menu" open={open} placement="left">
      <Content>
        <Menu onClick={onClickMenu} mode="inline" items={items} />
      </Content>
      <GroupButton>
        {isLogin ? (
          <>
            <Button
              onClick={openAccountManagement}
              text="Quản lý tài khoản"
              type={TypeButtonEnum.GRAY}
            />
            <Button
              onClick={openRequestAdvise}
              text="Yêu cầu tư vấn"
              type={TypeButtonEnum.PRIMARY}
            />
            <Button
              onClick={logout}
              text={"Đăng xuất"}
              type={TypeButtonEnum.NORMAL}
            />
          </>
        ) : (
          <>
            <Button
              onClick={openLogin}
              text={"Đăng nhập"}
              type={TypeButtonEnum.NORMAL}
            />
            <Button
              onClick={openRequestAdvise}
              text="Yêu cầu tư vấn"
              type={TypeButtonEnum.PRIMARY}
            />
          </>
        )}
      </GroupButton>
    </Wrapper>
  );
}
