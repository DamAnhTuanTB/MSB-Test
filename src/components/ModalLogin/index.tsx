import { message } from "antd";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { authService } from "../../services/authService";
import { setLogin, setOpenLogin } from "../../store/appSlice";
import { RootState } from "../../store/store";
import { TypeButtonEnum } from "../../utils/constants";
import { setCookie } from "../../utils/cookies";
import Button from "../Button";
import {
  FormCustom,
  FormItem,
  InputItem,
  InputPassword,
  RowButton,
  Title,
  TitleInput,
  Wrapper,
} from "./style";

export default function ModalLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((state: RootState) => state.app.openLogin);
  const [form] = FormCustom.useForm();

  const mutationLogin = useMutation(
    (payload: { username: string; password: string }) =>
      authService.login(payload),
    {
      onSuccess: (res) => {
        handleCancel();
        setCookie("accessToken", res.data.token);
        setCookie("userInfo", JSON.stringify(res.data));
        dispatch(setLogin(res.data));
        navigate(ROUTES.ACCOUNT_MANAGEMENT);
      },
      onError: (error: any) => {
        if (error.response.status === 400) {
          message.error("Sai tên tài khoản hoặc mật khẩu!");
        } else {
          message.error("Hệ thống đang lỗi. Vui lòng thử lại sau.");
        }
      },
    }
  );
  const handleCancel = () => {
    dispatch(setOpenLogin(false));
  };
  const handleFinish = (values: { username: string; password: string }) => {
    mutationLogin.mutate(values);
  };
  return (
    <Wrapper closable={false} open={open} centered footer={null} width={343}>
      <Title>Đăng nhập</Title>
      <FormCustom form={form} onFinish={handleFinish}>
        <TitleInput>Tên tài khoản</TitleInput>
        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: "User name is a required field",
            },
          ]}
        >
          <InputItem placeholder="Nhập tên tài khoản" />
        </FormItem>
        <TitleInput>Mật khẩu</TitleInput>
        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: "Password is a required field",
            },
          ]}
        >
          <InputPassword placeholder="Nhập mật khẩu" />
        </FormItem>
      </FormCustom>
      <RowButton>
        <Button
          onClick={handleCancel}
          text="Đóng"
          width="50%"
          type={TypeButtonEnum.NORMAL}
        />
        <Button
          isLoading={mutationLogin.isLoading}
          onClick={() => form.submit()}
          text="Đăng nhập"
          width="50%"
          type={TypeButtonEnum.PRIMARY}
        />
      </RowButton>
    </Wrapper>
  );
}
