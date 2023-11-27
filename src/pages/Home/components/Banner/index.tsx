import { useWindowSize } from "@uidotdev/usehooks";
import { Carousel } from "antd";
import IconBanner from "../../../../assets/images/banner.svg";
import Button from "../../../../components/Button";
import { TypeButtonEnum } from "../../../../utils/constants";
import {
  Content,
  Description,
  ItemBanner,
  MainContent,
  TextGroup,
  Title,
  Wrapper,
} from "./style";

const listBanner = [
  {
    id: 1,
    icon: IconBanner,
    title: "Trải nghiệm sống cực chất cho dân văn phòng",
    description: "Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND",
    button: "Khám phá ngay",
  },
  {
    id: 2,
    icon: IconBanner,
    title: "Trải nghiệm sống cực chất cho dân văn phòng",
    description: "Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND",
    button: "Khám phá ngay",
  },
  {
    id: 3,
    icon: IconBanner,
    title: "Trải nghiệm sống cực chất cho dân văn phòng",
    description: "Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND",
    button: "Khám phá ngay",
  },
  {
    id: 4,
    icon: IconBanner,
    title: "Trải nghiệm sống cực chất cho dân văn phòng",
    description: "Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND",
    button: "Khám phá ngay",
  },
  {
    id: 5,
    icon: IconBanner,
    title: "Trải nghiệm sống cực chất cho dân văn phòng",
    description: "Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND",
    button: "Khám phá ngay",
  },
];

export default function Banner() {
  const size: any = useWindowSize();
  return (
    <Wrapper>
      <Carousel autoplay>
        {listBanner.map((item) => (
          <ItemBanner key={item.id}>
            <img src={item.icon} alt="" />
            <Content>
              <MainContent>
                <TextGroup>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Button
                    type={TypeButtonEnum.PRIMARY}
                    width={size.width > 767 ? "185px" : "120px"}
                    text={item.button}
                  />
                </TextGroup>
              </MainContent>
            </Content>
          </ItemBanner>
        ))}
      </Carousel>
    </Wrapper>
  );
}
