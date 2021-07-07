import React from 'react';
import './style.css';
import ship from './rewardShip.png';
import ship2 from './Spaceship2.png';
import ship3 from './Spaceship3.png';
import pinJSONToIPFS from './pinata';

const alchemyKey =
  'https://eth-ropsten.alchemyapi.io/v2/XEvHE5fCX3wrNLojOo3S4AFAypOyD_Jz';
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('./contract-abi.json');
const contractAddress = '0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE';

export interface Iprops {}

declare global {
  interface Window {
    contract: any;
  }
}

declare global {
  interface Object {
    name: string;
    image: string;
    description: string;
    pinataUrl: string;
  }
}

class Claim extends React.Component<Iprops> {
  [x: string]: any;

  constructor(props: Iprops) {
    super(props);

    //make metadata
    const metadata = new Object();
    metadata.name = 'Spaceship';
    metadata.image =
      'https://ipfs.io/ipfs/QmUZAtXKH3iPm5RezXdirY3JZA3pPumuNnTTBG15RWpk8r';
    metadata.description = 'This is the reward for your first achievement';
  }

  pinataResponse: any = async () => {
    this.tokenURI = await pinJSONToIPFS(this.metadata);
  };

  tokenURI = this.pinataResponse.pinataUrl;

  mintNFT = async () => {
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    //set up your Ethereum transaction
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, this.tokenURI)
        .encodeABI(),
    };

    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: '😥 Something went wrong: ' + error.message,
      };
    }
  };

  render() {
    return (
      <div>
        <h1 className="headertext">Congratulations, Claim your NFT</h1>
        <img className="imgstyle" src={ship} />
        <button
          className="claimButton"
          onClick={async () => {
            this.mintNFT();
          }}
        >
          Claim
        </button>
        <div>
          <img className="imgstyle2" src={ship2} />
          <button
            className="claimButton2"
            onClick={async () => {
              this.mintNFT();
            }}
          >
            Not available yet
          </button>
        </div>
        <div>
          <img className="imgstyle3" src={ship3} />
          <button
            className="claimButton3"
            onClick={async () => {
              this.mintNFT();
            }}
          >
            Not available yet
          </button>
        </div>
      </div>
    );
  }
}

export default Claim;
