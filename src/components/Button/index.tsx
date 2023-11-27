import { TypeButtonEnum } from "../../utils/constants";
import { ButtonCustom } from "./style";

export default function Button({
  text,
  type,
  width,
  height,
  onClick,
  isLoading,
}: {
  text: string;
  type: TypeButtonEnum;
  width?: string;
  height?: string;
  onClick?: () => void;
  isLoading?: boolean;
}) {
  return (
    <ButtonCustom
      loading={!!isLoading}
      onClick={onClick}
      style={{
        width: width || "100%",
        height: height || "40px",
        background: type === TypeButtonEnum.PRIMARY ? "#F4600C" : "white",
        color:
          type === TypeButtonEnum.PRIMARY
            ? "white"
            : type === TypeButtonEnum.NORMAL
            ? "#F4600C"
            : "black",
        border:
          type === TypeButtonEnum.PRIMARY
            ? "none"
            : type === TypeButtonEnum.NORMAL
            ? "1px solid #F4600C"
            : "1px solid gray",
      }}
    >
      {text}
    </ButtonCustom>
  );
}
