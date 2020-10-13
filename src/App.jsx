import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
/* import CategoryPage from "./components/CategoryPage/CategoryPage"; */
import AdultsCatigory from "./components/AdultsCatigory/AdultsCatigory";
import ChildCategory from "./components/ChildCategory/ChildCategory";
import ClothesCategory from "./components/ClothesCategory/ClothesCategory";
import AccessoriesCategory from "./components/AccessoriesCategory/AccessoriesCategory";
import MotorCategory from "./components/MotorCategory/MotorCategory";
import ToolsCategory from "./components/ToolsCategory/ToolsCategory";
import Mirrors from "./components/Mirrors/Mirrors";
import Bells from "./components/Bells/Bells";
import Mudguards from "./components/Mudguards/Mudguards";
import Lighting from "./components/Lighting/Lighting";
import Locks from "./components/Locks/Locks";
import Gear from "./components/Gear/Gear";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/race" component={AdultsCatigory} />
        <Route path="/children" component={ChildCategory} />
        <Route path="/clothes" component={ClothesCategory} />
        <Route path="/accesories" component={AccessoriesCategory} />
        <Route path="/motor" component={MotorCategory} />
        <Route path="/tools" component={ToolsCategory} />
        <Route path="/mirrors" component={Mirrors} />
        <Route path="/Bells" component={Bells} />
        <Route path="/Mudguards" component={Mudguards} />
        <Route path="/Lighting" component={Lighting} />
        <Route path="/Locks" component={Locks} />
        <Route path="/gear" component={Gear} />
      </Switch>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
