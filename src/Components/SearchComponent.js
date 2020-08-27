import React, { useState, useContext } from "react";
import Foodbox from "./Foodbox";
import Searchbar from "./Searchbar";
import { DataContext } from "./../Context/Context";
import AlergenosPopUp from "./../Components/AlergenosPopUp";


const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { lang, allergyList, flattened, foundPlace } = useContext(DataContext);
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
        food.descripcion.toLowerCase().includes(searchValue) ||
        food.tags.toLowerCase().includes(searchValue) ||
        food.nombre_en.toLowerCase().includes(searchValue) ||
        food.descripcion_en.toLowerCase().includes(searchValue) ||
        food.nombre_es.toLowerCase().includes(searchValue) ||
        food.descripcion_es.toLowerCase().includes(searchValue)
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
      vegetarian: ["Vegetarià", "Vegetarian", "Vegetariano"],
      vegan: ["Vegà", "Vegan", "Vegano"],
      allergens:["Al·lèrgens", "Allergens", "Alérgenos"]
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
      <div className="iconos-filter">
        <div className="iconos-filter-text" onClick={() => filterByTag("vega")}>
          <svg
            className="icono-svg"
            stroke={foundPlace.color}
            fill={foundPlace.color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <defs></defs>
            <title>ÍconosArtboard 7</title>
            <g id="Layer_2" data-name="Layer 2">
              <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,1A23,23,0,1,1,1,24,23,23,0,0,1,24,1Z" />
              <path d="M36.82,11.52c-1.55,2.37-1.24,4.84-2.47,7.21s-4.74,2.06-4.74,2.06c-4.53,5.77-5,15.76-5,15.76H22.19c-1.65-16.9-9-25-9-25,8.34,3.81,10.2,19.16,10.2,19.16a34.92,34.92,0,0,1,6.7-14c.6-.76,1-1.18,1-1.18-2.55.33-4,3.86-4,3.86S25.35,10.56,36.82,11.52Z" />
            </g>
          </svg>
          {switchLang("vegan")}
        </div>
        <div
          className="iconos-filter-text"
          onClick={() => filterByTag("vegetaria")}
        >
          <svg
            className="icono-svg"
            stroke={foundPlace.color}
            fill={foundPlace.color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <defs></defs>
            <title>ÍconosArtboard 8</title>
            <g id="Layer_2" data-name="Layer 2">
              <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,47A23,23,0,1,1,47,24,23,23,0,0,1,24,47Z" />
              <path
                className="cls-1"
                d="M20.35,18.13A3.15,3.15,0,0,1,22.16,20c0,.06,0,.13.06.19a3.57,3.57,0,0,1,1.44-.54.4.4,0,1,1,.1.79,3,3,0,0,0-1.35.58,4.86,4.86,0,0,1-.07,1.63l.35.53h.76a4.07,4.07,0,0,1,1.51-.79c-.74-2.33-1.49-4.61-1.85-5.68A3.75,3.75,0,0,0,20.35,18.13Z"
              />
              <path
                className="cls-1"
                d="M24,16.8c.46,1.37,1.3,3.92,2.05,6.36h1.11a2.09,2.09,0,0,1,.37-.71,2.16,2.16,0,0,1,.61-.5l-2.45-5.21a.4.4,0,1,1,.72-.34l2.45,5.21a.18.18,0,0,0,0-.07,2.15,2.15,0,0,1,1.71-2.07h0a1,1,0,0,1,0-.45,1.35,1.35,0,0,0-.84-1.46,1,1,0,0,1-.61-1.06A1.35,1.35,0,0,0,27.4,15a1,1,0,0,1-1.14-.51A1.32,1.32,0,0,0,25,13.8a1.4,1.4,0,0,0-.64.18l-.07,0a1.33,1.33,0,0,0-.42,1.8A1,1,0,0,1,24,16.8Z"
              />
              <path
                className="cls-1"
                d="M18.83,16.22a2.43,2.43,0,0,0,.43,1.56l.1.17h.18a.37.37,0,0,1,0-.08,4.53,4.53,0,0,1,3.25-2,2.24,2.24,0,0,0-.91-1.19A2.63,2.63,0,0,0,18.83,16.22Z"
              />
              <path
                className="cls-1"
                d="M18.53,33.14a.27.27,0,0,0,0,.54H29.48a.27.27,0,0,0,0-.54H18.53Z"
              />
              <path
                className="cls-1"
                d="M29.67,21.56a1,1,0,0,1-.78.95,1.35,1.35,0,0,0-.76.46,1.3,1.3,0,0,0-.12.2h3.3l2.51-3.05a.4.4,0,0,1,.62.51l-2.09,2.54h2a2.73,2.73,0,0,1,.91.17,1,1,0,0,1,.64-.45,1.34,1.34,0,0,0,.82-2.11,1,1,0,0,1,.1-1.27,1.33,1.33,0,0,0-.14-1.85l0,0a1.41,1.41,0,0,0-.61-.29,1.35,1.35,0,0,0-1.29.46,1,1,0,0,1-1.22.32,1.35,1.35,0,0,0-1.61.36l0,.05a1.35,1.35,0,0,0-.27.78,1,1,0,0,1-.78.95,1.35,1.35,0,0,0-1.08,1.3Z"
              />
              <path
                className="cls-1"
                d="M19.11,21.55a1.08,1.08,0,0,0-1.34.72,1.07,1.07,0,0,0,.13.89h1.79a1.07,1.07,0,0,0,.14-.26A1.08,1.08,0,0,0,19.11,21.55Z"
              />
              <path
                className="cls-1"
                d="M16.43,21.31a4.05,4.05,0,0,0-.13,1.85H17A1.83,1.83,0,0,1,17,22a1.88,1.88,0,1,1,3.59,1.1v0h.78c0-.1.08-.2.11-.31a3.93,3.93,0,0,0-.05-2.58,2.35,2.35,0,0,0-1.47-1.46C18.56,18.39,17,19.51,16.43,21.31Z"
              />
              <path
                className="cls-1"
                d="M13.68,23s0,.05,0,.18h1.83a4.85,4.85,0,0,1,0-1.13L13,16.84a.4.4,0,0,1,.72-.34l2,4.29a4.58,4.58,0,0,1,1.93-2.38c0-.07.06-.13,0-.16a1.36,1.36,0,0,0-.68-.58,1,1,0,0,1-.61-1.06,1.35,1.35,0,0,0-.13-.82l0-.06a1.35,1.35,0,0,0-1.53-.63,1,1,0,0,1-1.14-.51,1.34,1.34,0,0,0-1.21-.69,1.4,1.4,0,0,0-.64.18l-.08,0a1.33,1.33,0,0,0-.42,1.79,1,1,0,0,1-.12,1.26,1.34,1.34,0,0,0,.45,2.21,1,1,0,0,1,.61,1.06,1.35,1.35,0,0,0,.84,1.46A1,1,0,0,1,13.68,23Z"
              />
              <path d="M38.5,34H30.58a1.14,1.14,0,0,0,0-1.2,7.85,7.85,0,0,0,4.59-3.47L36.6,26.9a2.38,2.38,0,0,0,0-2.42,2.53,2.53,0,0,0-.7-.76.18.18,0,0,1,.08-.05,2.14,2.14,0,0,0,1.3-3.36c-.05-.07,0-.17.06-.28a2.13,2.13,0,0,0-.28-3L37,16.94h0a2.24,2.24,0,0,0-.88-.39,2.17,2.17,0,0,0-2.1.79.18.18,0,0,1-.23.06,2.15,2.15,0,0,0-2.39.38h0l-.16.19,0,0a2.12,2.12,0,0,0-.12-.26A2.15,2.15,0,0,0,30,16.82a.18.18,0,0,1-.11-.2,2.15,2.15,0,0,0-2.7-2.39c-.08,0-.17,0-.24-.15A2.18,2.18,0,0,0,25,13a2.24,2.24,0,0,0-.92.23l-.1.05a2.16,2.16,0,0,0-1,1.31,1.89,1.89,0,0,0-.83-.66,2.69,2.69,0,0,0-.94,0l.11-.13a1.29,1.29,0,0,0,.32-.91.81.81,0,0,0-.13-.35l-.07-.08a1.72,1.72,0,0,0,.18-.24,2.86,2.86,0,0,0,.22-.39,1.09,1.09,0,0,0,.09-.57.77.77,0,0,0-.21-.45l-.07-.07.11-.21a4,4,0,0,0,.17-.4A1.22,1.22,0,0,0,22,9.54a.68.68,0,0,0-.11-.3.55.55,0,0,0-.24-.2.52.52,0,0,0-.3,0,1,1,0,0,0-.35.15l-.09.07-.24.23a3.13,3.13,0,0,0-.38.52l-.13.24,0,0-.15,0a.65.65,0,0,0-.52.48.9.9,0,0,0,0,.39l0,.18c0,.22.1.43.16.64a.89.89,0,0,0-.16.27,1.17,1.17,0,0,0,0,.56,5.06,5.06,0,0,0,.25.79c0,.05,0,.11,0,.17s-.07-.11-.1-.17a5.09,5.09,0,0,0-.36-.75,1.17,1.17,0,0,0-.42-.37.89.89,0,0,0-.3-.08c-.1-.2-.2-.39-.32-.58l-.1-.15a.89.89,0,0,0-.28-.27.65.65,0,0,0-.71,0l-.12.09h0l-.26-.09a3.14,3.14,0,0,0-.63-.11h-.44a1,1,0,0,0-.36.14.52.52,0,0,0-.2.23A.55.55,0,0,0,15,12a.67.67,0,0,0,.13.29,1.22,1.22,0,0,0,.44.35l.4.17.22.08v.1a.77.77,0,0,0,.16.47,1.1,1.1,0,0,0,.45.35,2.89,2.89,0,0,0,.43.13,1.72,1.72,0,0,0,.29.05v.11a.81.81,0,0,0,.14.34,1.29,1.29,0,0,0,.86.44l.2,0,.16,0a4.67,4.67,0,0,0-.39.37,3,3,0,0,0-.45.7,2.53,2.53,0,0,0,.22,1.69,2.15,2.15,0,0,0-.92-.73.18.18,0,0,1-.11-.2,2.15,2.15,0,0,0-.26-1.4l-.12-.2h0a2.15,2.15,0,0,0-2.31-.8c-.09,0-.17,0-.24-.15A2.18,2.18,0,0,0,12.4,13.1a2.23,2.23,0,0,0-.92.23l-.1.05a2.13,2.13,0,0,0-.81,2.87l.06.11a.18.18,0,0,1,0,.24,2.14,2.14,0,0,0,.72,3.53.18.18,0,0,1,.11.2,2.15,2.15,0,0,0,1.34,2.33.18.18,0,0,1,.11.21s0,.07,0,.43a2.61,2.61,0,0,0-1.5,1.18,2.38,2.38,0,0,0,0,2.42l1.45,2.43a7.85,7.85,0,0,0,4.59,3.47,1.14,1.14,0,0,0,0,1.2H9.5a.5.5,0,0,0,0,1h29a.5.5,0,0,0,0-1ZM30.75,20.26a1,1,0,0,0,.78-.95,1.35,1.35,0,0,1,.27-.78l0-.05a1.35,1.35,0,0,1,1.61-.36,1,1,0,0,0,1.22-.32A1.35,1.35,0,0,1,36,17.33a1.41,1.41,0,0,1,.61.29l0,0a1.33,1.33,0,0,1,.14,1.85,1,1,0,0,0-.1,1.27,1.34,1.34,0,0,1-.82,2.11,1,1,0,0,0-.64.45,2.73,2.73,0,0,0-.91-.17h-2l2.09-2.54a.4.4,0,0,0-.62-.51L31.3,23.16H28a1.3,1.3,0,0,1,.12-.2,1.35,1.35,0,0,1,.76-.46,1,1,0,0,0,.78-.95,1.35,1.35,0,0,1,1.08-1.3ZM24.33,14l.07,0A1.4,1.4,0,0,1,25,13.8a1.32,1.32,0,0,1,1.21.69A1,1,0,0,0,27.4,15a1.35,1.35,0,0,1,1.7,1.5,1,1,0,0,0,.61,1.06A1.35,1.35,0,0,1,30.55,19a1,1,0,0,0,0,.45h0a2.15,2.15,0,0,0-1.71,2.07.18.18,0,0,1,0,.07L26.39,16.4a.4.4,0,1,0-.72.34L28.12,22a2.16,2.16,0,0,0-.61.5,2.09,2.09,0,0,0-.37.71H26c-.75-2.44-1.6-5-2.05-6.36a1,1,0,0,0-.07-1A1.33,1.33,0,0,1,24.33,14ZM23.1,16.69c.36,1.07,1.12,3.34,1.85,5.68a4.07,4.07,0,0,0-1.51.79h-.76l-.35-.53A4.86,4.86,0,0,0,22.41,21a3,3,0,0,1,1.35-.58.4.4,0,1,0-.1-.79,3.57,3.57,0,0,0-1.44.54c0-.06,0-.13-.06-.19a3.15,3.15,0,0,0-1.81-1.85A3.75,3.75,0,0,1,23.1,16.69Zm-2.94-4.26a.23.23,0,0,1,.08-.11h0a.35.35,0,0,0,.14-.42,4.41,4.41,0,0,1-.2-.74l0-.11a.41.41,0,0,1,0-.16.19.19,0,0,0,.2.07.45.45,0,0,0,.18-.07l.09-.08,0,0,0-.12,0,0c0-.09.1-.18.15-.27a2.32,2.32,0,0,1,.3-.42l.15-.15a.5.5,0,0,1,0,.13,3.64,3.64,0,0,1-.14.35l-.11.2a.65.65,0,0,0-.13.32A.58.58,0,0,0,21,11a1,1,0,0,0,.26.28.47.47,0,0,1,0,.27,1.83,1.83,0,0,1-.16.28c-.06.09-.13.2-.19.31a.72.72,0,0,0-.09.41.91.91,0,0,0,.19.38L21,13a.75.75,0,0,1-.18.35l-.12.14c-.07.07-.14.15-.2.24l0,0a3,3,0,0,0-.1-.43,4.06,4.06,0,0,1-.22-.67A.57.57,0,0,1,20.16,12.43Zm-1.34,1.76-.19,0a.76.76,0,0,1-.37-.13l0-.06a.91.91,0,0,0-.12-.41.72.72,0,0,0-.34-.23l-.35-.1a1.83,1.83,0,0,1-.31-.09A.47.47,0,0,1,16.9,13a1,1,0,0,0,0-.38.58.58,0,0,0-.11-.2.65.65,0,0,0-.32-.15l-.22-.07L15.91,12l-.11-.07H16a2.33,2.33,0,0,1,.5.1l.29.09h.05l.11.06h.19a.45.45,0,0,0,.18-.07.19.19,0,0,0,.09-.19.4.4,0,0,1,.11.12l.06.09a4.4,4.4,0,0,1,.37.67.35.35,0,0,0,.39.21h0a.23.23,0,0,1,.14,0,.59.59,0,0,1,.17.14,4.12,4.12,0,0,1,.3.64,3,3,0,0,0,.22.38h0Zm0,2A2.63,2.63,0,0,1,21.9,14.7a2.24,2.24,0,0,1,.91,1.19,4.53,4.53,0,0,0-3.25,2,.37.37,0,0,0,0,.08h-.18l-.1-.17A2.43,2.43,0,0,1,18.83,16.22Zm1.12,2.6a2.35,2.35,0,0,1,1.47,1.46,3.93,3.93,0,0,1,.05,2.58c0,.11-.07.21-.11.31h-.78v0A1.88,1.88,0,1,0,17,22a1.83,1.83,0,0,0,0,1.12H16.3a4.05,4.05,0,0,1,.13-1.85C17,19.51,18.56,18.39,19.95,18.82Zm-.12,4.08a1.07,1.07,0,0,1-.14.26H17.9a1.07,1.07,0,0,1-.13-.89,1.08,1.08,0,1,1,2.06.63Zm-7.43-1.56a1.35,1.35,0,0,1-.17-.88,1,1,0,0,0-.61-1.06,1.34,1.34,0,0,1-.45-2.21,1,1,0,0,0,.12-1.26,1.33,1.33,0,0,1,.42-1.79l.08,0a1.4,1.4,0,0,1,.64-.18,1.34,1.34,0,0,1,1.21.69,1,1,0,0,0,1.14.51,1.35,1.35,0,0,1,1.53.63l0,.06a1.35,1.35,0,0,1,.13.82,1,1,0,0,0,.61,1.06,1.36,1.36,0,0,1,.68.58s0,.09,0,.16a4.58,4.58,0,0,0-1.93,2.38l-2-4.29a.4.4,0,0,0-.72.34L15.49,22a4.85,4.85,0,0,0,0,1.13H13.68c0-.13,0-.18,0-.18a1,1,0,0,0-.61-1.06A1.35,1.35,0,0,1,12.39,21.33Zm1.32,7.48-1.45-2.43a1.37,1.37,0,0,1,0-1.42,1.65,1.65,0,0,1,1.46-.81H34.3a1.65,1.65,0,0,1,1.46.81,1.37,1.37,0,0,1,0,1.41L34.3,28.82a7,7,0,0,1-6.06,3.32H19.77A7,7,0,0,1,13.71,28.82Zm15.76,4.86H18.53a.27.27,0,0,1,0-.54H29.48a.27.27,0,0,1,0,.54Z" />
            </g>
          </svg>
          {switchLang("vegetarian")}
        </div>
        <AlergenosPopUp
          isOpenPopUp={isOpenPopUp}
          showAllergenPopUp={showAllergenPopUp}
        />
        <div className="iconos-filter-text" onClick={showAllergenPopUp}>
          <svg
            className="icono-svg"
            stroke={foundPlace.color}
            fill={foundPlace.color}
            viewBox="0 0 48 48"
          >
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
              <line x1="18.57" y1="15.74" x2="29.42" y2="32.26" />
              <line x1="26.88" y1="15.74" x2="37.73" y2="32.26" />
              <line x1="10.27" y1="15.74" x2="21.12" y2="32.26" />
              <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,1A23,23,0,1,1,1,24,23,23,0,0,1,24,1Z" />
              <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,1A23,23,0,1,1,1,24,23,23,0,0,1,24,1Z" />
            </g>
          </svg>

          {switchLang("allergens")}
        </div>
      </div>
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