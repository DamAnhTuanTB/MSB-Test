import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button";
import { setLogout } from "../../../../store/appSlice";
import { RootState } from "../../../../store/store";
import { TypeButtonEnum } from "../../../../utils/constants";
import {
  Content,
  ItemInfo,
  Label,
  Logout,
  Title,
  Value,
  Wrapper,
} from "./style";

export default function UserInfo() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.app.userInfo);
  const logout = () => {
    dispatch(setLogout());
  };
  return (
    <Wrapper>
      <Title>Thông tin chung</Title>
      <Content>
        <ItemInfo>
          <Label>Họ và tên</Label>
          <Value>
            {userInfo.firstName} {userInfo.lastName || ""}
          </Value>
        </ItemInfo>
        <ItemInfo>
          <Label>Số CMND/CCCD</Label>
          <Value>034200013427</Value>
        </ItemInfo>
        <ItemInfo>
          <Label>Số điện thoại</Label>
          <Value>0862248237</Value>
        </ItemInfo>
      </Content>
      <Logout>
        <Button
          onClick={logout}
          text="Đăng xuất"
          width="100px"
          type={TypeButtonEnum.NORMAL}
        />
      </Logout>
    </Wrapper>
  );
}
