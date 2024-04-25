import styled from "styled-components";

type ProductionsPropsType = {
  title: string;
  description: string;
  price: number | string;
  photo: string;
};

export const Productions = (props: ProductionsPropsType) => {
  return (
    <>
      <div>
        <ProductionsPhoto src={props.photo}></ProductionsPhoto>
        <title>{props.title}</title>
        <h3>{props.description}</h3>
        <Price>
          <h4>{props.price} </h4>
          <h5>{props.price}</h5>
        </Price>
     <button>Подробнее</button>
      </div>
    </>
  );
};

const ProductionsPhoto = styled.img`
  width: 240px;
  height: 220px;
`;

const Price = styled.div`
  align-items: center;
  display: flex;
`;
