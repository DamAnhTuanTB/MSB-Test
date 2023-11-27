import { ReactNode } from "react";
import Right from "../../assets/images/right.svg";
import { Wrapper } from "./style";

export default function Breadcrumb({
  items,
}: {
  items: { title: string | ReactNode }[];
}) {
  return <Wrapper items={items} separator={<img src={Right} alt="" />} />;
}
