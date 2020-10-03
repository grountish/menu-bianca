import React, { useState, useContext } from "react";
import Foodbox from "./Foodbox";
import Searchbar from "./Searchbar";
import { DataContext } from "./../Context/Context";
import AlergenosPopUp from "./../Components/AlergenosPopUp";
import vegetarianos from './../Assets/ic vegetarianos.svg';
import veganos from './../Assets/ics veganos.svg';
import celiacos from './../Assets/Tacc.svg';

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { lang, allergyList, flattened} = useContext(DataContext);
  const [filterFoods, setFilterFoods] = useState(flattened);

  const [isOpenPopUp, setIsOpenPopUp] = useState();
  const [displayAllergList, setdisplayAllergList] = useState(false);

  const showAllergenPopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
    setdisplayAllergList(true);
  };
  const filterOnChange = (e) => {
    setInputValue(e.target.value);

    let searchValue = e.target.value.toLowerCase();
    let filteredFoods = flattened.filter(
      (food) =>
        food.nombre.toLowerCase().includes(searchValue) ||
        food.descripcion.toLowerCase().includes(searchValue) 
       
    );

    setFilterFoods(filteredFoods);
  };

  const filterByTag = (tag) => {
    setdisplayAllergList(false);
    let filteredFoods = flattened.filter((food) =>
      food.tags.toLowerCase().includes(tag)
    );

    setFilterFoods(filteredFoods);
  };

  const switchLang = (parameter) => {
    const translations = {
      vegetarian: ["VEGETARIANO", "Vegetarian", "Vegetariano"],
      vegan: ["VEGANO", "Vegan", "Vegano"],
      celiacs:["CELIACO", "Allergens", "Alérgenos"]
    }
    switch (lang) {
      case "ca":
        return translations[parameter][0];
      case "en":
        return translations[parameter][1];
      case "es":
        return translations[parameter][2];
      default:
        return translations[parameter][0]
    }
  };

  return (
    <div className="centered fadeIn">
      <Searchbar
        filterOnChange={filterOnChange}
        inputValue={inputValue}
        lang={lang}
      />
      
      <div className="list-add">
        <ul className="list-food">
          {displayAllergList
            ? allergyList.map((e, i) => <Foodbox {...e} lang={lang} key={i} />)
            : filterFoods.map((e, i) => <Foodbox {...e} lang={lang} key={i} />)}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
