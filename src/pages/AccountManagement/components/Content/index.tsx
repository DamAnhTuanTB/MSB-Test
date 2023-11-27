import { SelectedSidebar } from "../../../../utils/constants";
import ProductInfo from "../ProductInfo";
import UserInfo from "../UserInfo";
import { Wrapper } from "./style";

export default function Content({
  selectedSidebar,
}: {
  selectedSidebar: SelectedSidebar;
}) {
  const renderContent = () => {
    switch (selectedSidebar) {
      case SelectedSidebar.USER_INFO: {
        return <UserInfo />;
      }
      case SelectedSidebar.PRODUCT_INFO: {
        return <ProductInfo />;
      }
      default:
        return <></>;
    }
  };
  return <Wrapper>{renderContent()}</Wrapper>;
}
