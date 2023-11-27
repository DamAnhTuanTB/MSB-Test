import { SelectedSidebar } from "../../../../utils/constants";
import { TabItem, Wrapper } from "./style";

const tabs = [
  {
    name: "Thông tin tài khoản",
    value: SelectedSidebar.USER_INFO,
  },
  {
    name: "Thông tin sản phẩm",
    value: SelectedSidebar.PRODUCT_INFO,
  },
];

export default function Tabs({
  selectedSidebar,
  setSelectedSidebar,
}: {
  selectedSidebar: string;
  setSelectedSidebar: React.Dispatch<React.SetStateAction<SelectedSidebar>>;
}) {
  const handleClickSidebar = (item: {
    name: string;
    value: SelectedSidebar;
  }) => {
    setSelectedSidebar(item.value);
  };
  return (
    <Wrapper>
      {tabs.map((item) => (
        <TabItem
          onClick={() => handleClickSidebar(item)}
          className={`${item.value === selectedSidebar && "selected"}`}
          key={item.name}
        >
          {item.name}
        </TabItem>
      ))}
    </Wrapper>
  );
}
