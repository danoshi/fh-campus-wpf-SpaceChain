import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import axios from 'axios';
import './style.css';

function App() {
  const [tokenInfo, setTokenInfo] = useState(undefined);
  const element = <h1>Not found </h1>

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      const tokenURI = await nft.tokenURI(0);
      const { data } = await axios.get(tokenURI);
      setTokenInfo(data.result);
    };
    init();
  }, []);

  if(typeof tokenInfo === 'undefined') {
    return element;
  }

  return (
    <div className='container'>
    <button className="metamask">Connect</button>
      <h1 className="headertext">Ranking Screen coming soon</h1>
      <p className="headertext">Ranking Screen coming soon</p>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='text-center'>{tokenInfo.name}</h1>
          <div className="jumbotron">
            <p className="lead text-center">{tokenInfo.description}</p>
            <img src={tokenInfo.image} className="img-fluid" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
