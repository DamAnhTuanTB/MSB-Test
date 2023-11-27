import { message } from "antd";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import districtsData from "../../assets/jsons/districts.json";
import provincesData from "../../assets/jsons/provinces.json";
import { setRequestAdvise } from "../../store/appSlice";
import { RootState } from "../../store/store";
import { TypeButtonEnum } from "../../utils/constants";
import { regexFullName } from "../../utils/regex";
import Button from "../Button";
import {
  Column,
  Content,
  CustomCheckbox,
  FormCustom,
  FormItem,
  InputItem,
  RadioCustom,
  Row,
  SelectCustom,
  TextAreaItem,
  Title,
  TitleInput,
  TitleProduct,
  Wrapper,
} from "./style";

export default function RequestAdvise() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openRequestAdvise);
  const listProvinces: any = useMemo(() => provincesData, []);
  const listDistricts: any = useMemo(() => districtsData, []);
  const provinces = useMemo(
    () =>
      Object.keys(listProvinces).map((key: string) => ({
        value: listProvinces[key].code,
        label: listProvinces[key].name,
      })),
    [listProvinces]
  );
  const districts = useMemo(
    () =>
      Object.keys(listDistricts).map((key: string) => ({
        value: listDistricts[key].code,
        label: listDistricts[key].name_with_type,
        parent_code: listDistricts[key].parent_code,
      })),
    [listDistricts]
  );

  const [districtsOption, setDistrictsOption] = useState<any>();

  const [form] = FormCustom.useForm();
  const onClose = () => {
    dispatch(setRequestAdvise(false));
  };
  const handleFinish = (values: any) => {
    onClose();
    message.success("Gửi thông tin yêu cầu tư vấn thành công!");
  };

  const validateFullName = (_: any, value: any) => {
    if (value && value.trim() !== value) {
      return Promise.reject("Không được nhập dấu cách ở đầu hoặc cuối chuỗi");
    }

    if (value && /\s{2,}/.test(value)) {
      return Promise.reject("Không được nhập 2 dấu cách liền kề");
    }

    if (value && value.split(" ").length === 1 && !/'/.test(value)) {
      return Promise.reject(
        "Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn"
      );
    }

    if (value && !regexFullName.test(value)) {
      return Promise.reject(
        "Vui lòng nhập tên chỉ chứa chữ, dấu nháy đơn và dấu cách."
      );
    }

    return Promise.resolve();
  };

  const handleChangeProvince = (value: string) => {
    const districtsOption = districts
      .filter((item) => item.parent_code === value)
      .map((item) => ({
        value: item.value,
        label: item.label,
      }));
    setDistrictsOption(districtsOption);
    form.setFieldValue("district", undefined);
  };

  return (
    <Wrapper
      width={500}
      title="Yêu cầu tư vấn"
      onClose={onClose}
      placement="right"
      open={open}
    >
      <Content>
        <Title>Thông tin khách hàng</Title>
        <FormCustom form={form} onFinish={handleFinish}>
          <TitleInput>Họ và tên</TitleInput>
          <FormItem
            name="fullname"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên",
              },
              {
                validator: validateFullName,
              },
            ]}
          >
            <InputItem maxLength={100} placeholder="Nhập họ và tên" />
          </FormItem>
          <TitleInput>Số điện thoại</TitleInput>
          <FormItem
            name="telephone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
            ]}
          >
            <InputItem placeholder="Nhập số điện thoại" />
          </FormItem>
          <Row>
            <Column>
              <TitleInput>Thành phố</TitleInput>
              <FormItem
                name="city"
                rules={[{ required: true, message: "Vui lòng chọn thành phố" }]}
              >
                <SelectCustom
                  onChange={handleChangeProvince}
                  options={provinces}
                  placeholder="Chọn thành phố"
                ></SelectCustom>
              </FormItem>
            </Column>
            <Column>
              <TitleInput>Quận/Huyện</TitleInput>
              <FormItem
                name="district"
                rules={[
                  { required: true, message: "Vui lòng chọn quận/huyện" },
                ]}
              >
                <SelectCustom
                  options={districtsOption}
                  placeholder="Chọn Quận/Huyện"
                ></SelectCustom>
              </FormItem>
            </Column>
          </Row>
          <TitleInput>Giới tính</TitleInput>
          <FormItem
            name="gender"
            rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
          >
            <RadioCustom.Group>
              <RadioCustom value="male">Nam</RadioCustom>
              <RadioCustom value="female">Nữ</RadioCustom>
            </RadioCustom.Group>
          </FormItem>
          <TitleProduct>Sản phẩm cần tư vấn</TitleProduct>
          <FormItem name="products">
            <CustomCheckbox.Group>
              <CustomCheckbox value="credit-card">Thẻ tín dụng</CustomCheckbox>
              <CustomCheckbox value="first-buy">
                Mua trước trả sau
              </CustomCheckbox>
              <CustomCheckbox value="borrow">Vay linh hoạt</CustomCheckbox>
              <CustomCheckbox value="mpro">Tài khoản M-Pro</CustomCheckbox>
              <CustomCheckbox value="fast-money">Tiền nhanh</CustomCheckbox>
            </CustomCheckbox.Group>
          </FormItem>
          <TitleInput>Chúng tôi có thể hỗ trợ gì cho bạn?</TitleInput>
          <FormItem
            className="no-margin-bottom"
            name="description"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <TextAreaItem
              placeholder="Nhập thông tin"
              style={{ height: 128, resize: "none" }}
            />
          </FormItem>
        </FormCustom>
      </Content>
      <Button
        onClick={() => form.submit()}
        text="Xác nhận"
        type={TypeButtonEnum.PRIMARY}
        width="100%"
      />
    </Wrapper>
  );
}
