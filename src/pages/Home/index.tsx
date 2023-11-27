import Banner from "./components/Banner";
import Products from "./components/Products";
import Reasons from "./components/Reasons";
import { Wrapper } from "./style";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <Reasons />
      <Products />
    </Wrapper>
  );
}
