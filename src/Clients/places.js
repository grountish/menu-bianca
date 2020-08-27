import React, { useState } from "react";
import DivisionList from "../Components/DivisionList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Foodlist from "../Components/Foodlist";
import DividedFoodlist from "../Components/DividedFoodList";
import { DataContext } from "./../Context/Context";
import SearchComponent from "../Components/SearchComponent";
import foods from "../foods.json";
import Helmet from "react-helmet";
import "./../App.css";
import Upselling from "../Components/Upselling";
import home from './../Assets/home.svg'


const param = window.location.pathname.slice(1);
const foundPlace =foods.places.find((x) => x.place === param) || foods.places[0];
const option1 = foundPlace.place || "";
const arrayOfMenu = [];
foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));
let flattened = arrayOfMenu.flat();

function Places() {
  const [buscar, setBuscar] = useState(false);
  const [lang, setLang] = useState("ca");
  const [isOpen, setIsOpen] = useState(false);
  const [allergyList, setAllergyList] = useState([]);
  const [showBack, setShowBack] = useState(false);

  const showModal = () => {
    setIsOpen(!isOpen);
  };

  const categoryAndSearchSwitcher = () => {
    setBuscar(false);
    setShowBack(false);
  };

  const switchLang = (parameter) => {
   const nombreEs = `${parameter}_es`
   const nombreEn = `${parameter}_en`
    switch (lang) {
      case "ca":
        return foundPlace[parameter];
      case "en":
        return foundPlace[nombreEn];
      case "es":
        return foundPlace[nombreEs];
      default:
        return foundPlace[parameter];
    }
  };
const hasUpselling = () => {
  if(foundPlace.hasUpselling)
  return <div className="buttonDivUpselling">
  <button
    style={{
      border: foundPlace.borderButton,
      color: foundPlace.color,
    }}
    className="buttonUpselling buttonSugerencia"
    onClick={showModal}
  >
    {switchLang("sugerenciaButton")}
  </button>
</div>
 else{
   return null
 }
}

  return (
    <div className="App version-movil">
      <div className="contenedor-movil">
        <div className="App-desktop-container">
          <Router>
            <DataContext.Provider
              value={{
                lang,
                buscar,
                allergyList,
                setAllergyList,
                param,
                foundPlace,
                flattened,
                isOpen
              }}
            >
              <Upselling isOpen={isOpen} showModal={showModal} />

              <Helmet>
                <style>{`body { background-color: ${foundPlace.backgroundColor}; min-height:100vh; font-family: ${foundPlace.font}; color: ${foundPlace.color}}`}</style>
              </Helmet>
              <div style={{minHeight:'40px'}}>
                {showBack ? (
                  <div onClick={categoryAndSearchSwitcher}>
                    {" "}
                    <Link to={`/${option1}`}>
                      <img className="homeIcon" style={{filter: foundPlace.homeInverted? 'invert(1)':''}} src={home} alt=""/>
                    </Link>
                  </div>
                ) : hasUpselling()}</div>
              {
                foundPlace.hasLang
                ? <div className="languages">
                <div
                  className={lang === "ca" ? "perLanguage-act" : "perLanguage"}
                  onClick={() => setLang("ca")}
                >
                  CA
                </div>
                <div
                  className={lang === "en" ? "perLanguage-act" : "perLanguage"}
                  onClick={() => setLang("en")}
                >
                  EN
                </div>
                <div
                  className={lang === "es" ? "perLanguage-act" : "perLanguage"}
                  onClick={() => setLang("es")}
                >
                  ES
                </div>
              </div>
              : null
              }
              
                <img src={foundPlace.iso} alt="logo" className="isoTipo" />
              <div className="homeAndSearch">
                <div className="search-bar" onClick={() => setBuscar(!buscar)}>
                  {buscar ? (
                    <div className="buscador">
                     
                      <p>{lang === "en" ? "< BACK" : " < VOLVER"}</p>
                    </div>
                  ) : (
                    <div className="buscador">
                      {/* <AiOutlineSearch /> */}
                      <p>{lang === "en" ? "SEARCH" : "BUSCAR"}</p>
                    </div>
                  )}
                </div>
              </div>
              {buscar ? (
                <SearchComponent lang={lang} />
              ) : (
                <div
                  onClick={() => {
                    setShowBack(true);
                  }}
                >
                  <Route
                    exact
                    path="/:place"
                    render={(props) => <DivisionList {...props} lang={lang} />}
                  />
                
                  <Route
                    exact
                    path="/:place/category/:categoryName"
                    render={(props) => <Foodlist {...props} lang={lang} />}
                  />
                  <Route
                    exact
                    path="/:place/division/:divisionName"
                    render={(props) => <DividedFoodlist {...props} lang={lang} />}
                  />
                  <Route
                    exact
                    path="/:place/division/:divisionName/category/:categoryName"
                    render={(props) => <Foodlist {...props} lang={lang} />}
                  />
                </div>
              )}
             
            </DataContext.Provider>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Places;
