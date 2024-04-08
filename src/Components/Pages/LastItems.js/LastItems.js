import styled from "@emotion/styled";
import { useState } from "react";
import { useQuery } from "react-query";
import { clientProduct } from "../../../Client/products/Product";
import RightSide from "../SubCategories/RightSide/RightSide";
import LeftSide from "../SubCategories/LeftSide/LeftSide";
import { fetchLastItemsData } from "../../../Client/Requests/ProductRequests";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 0;
  @media (max-width: 1024px) {
    justify-content: center;
    width: 90%;
    margin-left: 0%;
    margin-right: 0%;
  }
`;

const Component1 = styled.div`
  width: 25%;
  padding: 0;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Component2 = styled.div`
  width: 70%;
  padding: 0;
  margin: 0;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const LastItems = () => {
  const [dataInfo, setDataInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [size, setSize] = useState();
  const [price, setPrice] = useState({
    price_gte: undefined,
    price_lte: undefined,
  });

  const { data, isLoading, isError, refetch } = useQuery(
    ["lastItems", currentPage, size, price],
    () =>
      fetchLastItemsData(
        5, // aq chavwere maqsimum ramdeni quantity unda iyos
        size,
        price.min,
        price.max,
        currentPage,
        dataInfo,
        prevPage
      )
  );

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <div>Error fetching subcategory data</div>;
  }

  return (
    <Container>
      <Component1>
        <LeftSide
          setSize={setSize}
          size={size}
          setPrice={setPrice}
          price={price}
        />
      </Component1>
      <div></div> {/* Gap */}
      <Component2>
        <RightSide
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPrevPage={setPrevPage}
          prevPage={prevPage}
          data={data}
          setDataInfo={setDataInfo}
        />
      </Component2>
    </Container>
  );
};

export default LastItems;
