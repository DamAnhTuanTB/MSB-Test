import { useState } from "react";
import { useQuery } from "react-query";
import RightArrows from "../../../../assets/images/right-arrows.svg";
import { productService } from "../../../../services/productService";
import {
  Content,
  Description,
  Explore,
  Group,
  ListProducts,
  Name,
  ProductItem,
  Title,
  Wrapper,
} from "./style";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState([]);
  useQuery("get-list-products", () => productService.getListProducts(), {
    onSuccess: (res) => {
      setProducts(res.data);
    },
  });

  return (
    <Wrapper>
      <Title>Danh sách sản phẩm</Title>
      <ListProducts>
        {products.map((item: Product) => (
          <ProductItem key={item.id}>
            <img src={item.image} alt="" />
            <Content>
              <Group>
                <Name>{item.name}</Name>
                <Description>{item.description}</Description>
              </Group>
              <Explore>
                Khám phá ngay <img src={RightArrows} alt="" />
              </Explore>
            </Content>
          </ProductItem>
        ))}
      </ListProducts>
    </Wrapper>
  );
}
