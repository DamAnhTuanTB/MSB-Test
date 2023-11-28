import { useState } from "react";
import { useQuery } from "react-query";
import RightArrows from "../../../../assets/images/right-arrows.svg";
import productsData from "../../../../db.json";
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
  const [products, setProducts] = useState<any>([]);
  useQuery("get-list-products", () => productService.getListProducts(), {
    onSuccess: (res) => {
      setProducts(res.data);
    },
    onError: () => {
      // In case of server failure, temporarily mount the product data
      // You can comment this line when testing locally
      setProducts(productsData.products);
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
