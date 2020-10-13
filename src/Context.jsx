import React from "react";
import {
  catigoriesTitles,
  addressesTitle,
  adultsComponent,
  childrenComponent,
  accessoriesComponent,
  bellsComponent,
  locksComponent,
  mudguardComponent,
  mirrorComponent,
  lightsComponent,
  gearHangerComponent,
} from "./data";
const ProductContext = React.createContext();

export class ProductProvider extends React.Component {
  state = {
    categories: [],
    addresses: [],
    adults: [],
    child: [],
    accessories: [],
    bells: [],
    locks: [],
    mirrors: [],
    lights: [],
    gearHangers: [],
  };

  componentDidMount() {
    this.setCategories();
    this.setAddresses();
    this.setAdultsComponent();
    this.setChildComponent();
    this.setaccessories();
    this.setBells();
    this.setLocks();
    this.setMudguard();
    this.setMirrors();
    this.setLights();
    this.setProducts(gearHangerComponent, this.state.gearHangers);
  }

  setCategories = () => {
    let categories = [];
    catigoriesTitles.map((catg) => {
      const singleCatg = { ...catg };
      categories = [...categories, singleCatg];
    });
    this.setState({ categories });
  };

  setAddresses = () => {
    let addresses = [];
    addressesTitle.map((ad) => {
      const singleAdress = { ...ad };
      addresses = [...addresses, singleAdress];
    });
    this.setState({ addresses });
  };
  setAdultsComponent = () => {
    let adults = [];
    adultsComponent.map((item) => {
      const singleItem = { ...item };
      adults = [...adults, singleItem];
    });
    this.setState({ adults });
  };
  setChildComponent = () => {
    let child = [];
    childrenComponent.map((item) => {
      const singleItem = { ...item };
      child = [...child, singleItem];
    });
    this.setState({ child });
  };
  setaccessories = () => {
    let accessories = [];
    accessoriesComponent.map((item) => {
      const singleItem = { ...item };
      accessories = [...accessories, singleItem];
    });
    this.setState({ accessories });
  };
  setBells = () => {
    let bells = [];
    bellsComponent.map((item) => {
      const singleItem = { ...item };
      bells = [...bells, singleItem];
    });
    this.setState({ bells });
  };
  setLocks = () => {
    let locks = [];
    locksComponent.map((item) => {
      const singleItem = { ...item };
      locks = [...locks, singleItem];
    });
    this.setState({ locks });
  };
  setMudguard = () => {
    let mudguard = [];
    mudguardComponent.map((item) => {
      const singleItem = { ...item };
      mudguard = [...mudguard, singleItem];
    });
    this.setState({ mudguard });
  };
  setMirrors = () => {
    let mirrors = [];
    mirrorComponent.map((item) => {
      const singleItem = { ...item };
      mirrors = [...mirrors, singleItem];
    });
    this.setState({ mirrors });
  };

  setLights = () => {
    let lights = [];
    lightsComponent.map((item) => {
      const singleItem = { ...item };
      lights = [...lights, item];
    });
    this.setState({ lights });
  };

  setProducts = () => {
    let gearHangers = [];
    gearHangerComponent.map((item) => {
      const singleItem = { ...item };
      gearHangers = [...gearHangers, singleItem];
    });
    this.setState({ gearHangers });
  };

  render() {
    console.log(this.state.accessories);
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
