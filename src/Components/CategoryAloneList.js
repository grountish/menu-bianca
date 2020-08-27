import React, { useContext } from "react";
import FoodCategory from "./FoodCategory";
import { Link } from "react-router-dom";
import { DataContext } from '../Context/Context'

const CategoryAloneList = ({ lang }) => {
  const {foundPlace} = useContext(DataContext)
  const CategoriesAloneList = foundPlace.categorias.filter(x=>x.categoryAlone === true)

    return (
      <div className="centered fadeIn">
        <ul className="list-food">
          {CategoriesAloneList.map((category, index) => {
            return (
              <Link
                style={{ color: foundPlace.color }}
                key={index}
                to={`${foundPlace.place}/category/${category.nombre}`}
              >
                <FoodCategory {...category} lang={lang} />
              </Link>
            );
          })}
        </ul>
      </div>
    );
}

export default CategoryAloneList;