import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";
import Foodbox from "./Foodbox";
import "./../App.css";

const FoodList = ({ lang, match }) => {
  const { foundPlace } = useContext(DataContext);

  const categoryFoods = match.params.categoryName;
  const foundCategory = foundPlace.categorias.find(
    (category) => categoryFoods === category.nombre
  );

  
  return (
    <div className="centered fadeIn">
      <div className="list-add">
        <ul className="list-food">
          {foundCategory.data.map((oneFood, index) => {
            return <Foodbox {...oneFood} key={index} lang={lang} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
