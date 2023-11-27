import IconCheckmark from "../../../../assets/images/checkmark.svg";
import IconDocument from "../../../../assets/images/document.svg";
import IconReplace from "../../../../assets/images/replace.svg";
import {
  Description,
  ListReason,
  ReasonItem,
  Title,
  WhyItem,
  Wrapper,
} from "./style";
const reasons = [
  {
    icon: IconDocument,
    title: "100% online",
    description: "Đăng ký và nộp hồ sơ trực tuyến",
  },
  {
    icon: IconCheckmark,
    title: "Phê duyệt siêu tốc",
    description: "Duyệt hồ sơ nhanh trong 5 phút",
  },
  {
    icon: IconReplace,
    title: "Sử dụng linh hoạt",
    description: "Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm",
  },
];

export default function Reasons() {
  return (
    <Wrapper>
      <WhyItem>Vì sao nên chọn chúng tôi</WhyItem>
      <ListReason>
        {reasons.map((item, index) => (
          <ReasonItem key={index}>
            <img src={item.icon} alt="" />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </ReasonItem>
        ))}
      </ListReason>
    </Wrapper>
  );
}
