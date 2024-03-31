import { useState } from "react";
import styled from "@emotion/styled";
import COLORS from "../../styles/Colors";
import EachCategory from "./EachCategory";

const Container = styled.div`
  position: fixed;
  top: 4.25rem;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.main};
  padding: 0.5rem;
  height: 2rem;
  border-top: 0.5px solid black;
  background-color: ${COLORS.main};
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  width: 70%;
  display: flex;
  justify-content: left;
`;

const NavigationLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const Link = styled.a`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${COLORS.text};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const LowerNav = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <Container>
      <CategoryList>
        {categories?.map((category, index) => (
          <EachCategory
            category={category}
            index={index}
            handleCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />
        ))}
      </CategoryList>
      <NavigationLinks>
        <Link>About Us</Link>
        <Link>Contact</Link>
      </NavigationLinks>
    </Container>
  );
};

export default LowerNav;