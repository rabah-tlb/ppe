import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Home from "./components/Home";
import Step from "./components/Formular/Step";
import MyStepper from "./components/Formular/MyStepper";

// ABIs
import RealEstate from "./abis/RealEstate.json";
import Escrow from "./abis/Escrow.json";

// Config
import config from "./config.json";

export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formDataResidence, setFormDataResidence] = useState({});
  const [formDataOwner, setFormDataOwner] = useState({});

  const [provider, setProvider] = useState(null);
  const [escrow, setEscrow] = useState(null);

  const [account, setAccount] = useState(null);

  const [homes, setHomes] = useState([]);
  const [home, setHome] = useState({});
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();

    const realEstate = new ethers.Contract(
      config[network.chainId].realEstate.address,
      RealEstate,
      provider
    );
    const totalSupply = await realEstate.totalSupply();
    // afficher numero des bien
    //console.log(totalSupply.toString())
    const homes = [];
    // fetsch NFT pour recupere tout les realestate

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();
      homes.push(metadata);
    }

    setHomes(homes);
    console.log(homes);
    // affichier escrow
    const escrow = new ethers.Contract(
      config[network.chainId].escrow.address,
      Escrow,
      provider
    );
    setEscrow(escrow);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const toggleProp = (home) => {
    setHome(home);
    toggle ? setToggle(false) : setToggle(true);
    //console.log(home)
  };

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <Search />
      <div className="cards__section">
        <h3>SI Homes for yo to invest </h3>
        <hr />
        <div className="cards">
          {homes.map((home, index) => (
            <div className="card" key={index} onClick={() => toggleProp(home)}>
              <div className="card__image">
                <img src={home.image} alt="home" />
              </div>
              <div className="card__info">
                <h4>{home.attributes[0].value} ETH</h4>
                <p>
                  <strong>{home.attributes[2].value}</strong> bds |
                  <strong>{home.attributes[3].value}</strong> ba |
                  <strong>{home.attributes[4].value}</strong> sqft
                </p>
                <p>{home.address}</p>
              </div>
            </div>
          ))}
        </div>
        <FormContext.Provider
          value={{ activeStepIndex, setActiveStepIndex, formDataResidence, setFormDataResidence, formDataOwner,setFormDataOwner }}
        >
          <MyStepper />
          <Step />
        </FormContext.Provider>
      </div>

      {toggle && (
        <>
          <Home
            home={home}
            provider={provider}
            account={account}
            escrow={escrow}
            togglePop={toggleProp}
          />
        </>
      )}
    </div>
  );
}

export default App;
