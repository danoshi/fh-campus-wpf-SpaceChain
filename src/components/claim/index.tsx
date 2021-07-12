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
export interface Istate {
  txn: boolean;
}

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

class Claim extends React.Component<Iprops, Istate> {
  [x: string]: any;
  constructor(props: Iprops) {
    super(props);
    this.state = { ...this.state, txn: false };
  }

  setTXNStatus() {
    this.setState({ ...this.state, txn: true });
  }

  mintNFT = async () => {
    let name = 'Spaceship';
    let url =
      'https://ipfs.io/ipfs/QmUZAtXKH3iPm5RezXdirY3JZA3pPumuNnTTBG15RWpk8r';
    let description =
      'This is the reward for your first achievement. To access it please open the ipfs link!';
    if (url.trim() === '' || name.trim() === '' || description.trim() === '') {
      return {
        success: false,
        status: '❗Please make sure all fields are completed before minting.',
      };
    }

    //make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: '😢 Something went wrong while uploading your tokenURI.',
      };
    }
    const tokenURI = pinataResponse.pinataUrl;

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };

    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      return (
        console.log(
          '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
            txHash,
        ),
        {
          success: true,
          status:
            '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
            txHash,
        }
      );
    } catch (error) {
      return (
        console.log('😥 Something went wrong: ' + error.message),
        {
          success: false,
          status: '😥 Something went wrong: ' + error.message,
        }
      );
    }
  };

  mintNFT2 = async () => {
    let name = 'Spaceship 2';
    let url =
      'https://ipfs.io/ipfs/QmYJVQj6MC3VzgVF9PQxsxHA54kX7M2Jt12cHCXJhQCT8e';
    let description =
      'This is the reward for your second achievement. To access it please open the ipfs link!';
    if (url.trim() === '' || name.trim() === '' || description.trim() === '') {
      return {
        success: false,
        status: '❗Please make sure all fields are completed before minting.',
      };
    }

    //make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: '😢 Something went wrong while uploading your tokenURI.',
      };
    }
    const tokenURI = pinataResponse.pinataUrl;

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };

    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      return (
        console.log(
          '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
            txHash,
        ),
        {
          success: true,
          status:
            '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
            txHash,
        }
      );
    } catch (error) {
      return (
        console.log('😥 Something went wrong: ' + error.message),
        {
          success: false,
          status: '😥 Something went wrong: ' + error.message,
        }
      );
    }
  };

  mintNFT3 = async () => {
    let name = 'Spaceship 3';
    let url =
      'https://ipfs.io/ipfs/QmfJNPWK5E6HFKWcfFamsGMrMamNAFYa6pQQCnNen2TLFL';
    let description =
      'This is the reward for your third achievement. To access it please open the ipfs link!';
    if (url.trim() === '' || name.trim() === '' || description.trim() === '') {
      return {
        success: false,
        status: '❗Please make sure all fields are completed before minting.',
      };
    }

    //make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: '😢 Something went wrong while uploading your tokenURI.',
      };
    }
    const tokenURI = pinataResponse.pinataUrl;

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };

    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      return (
        console.log(
          '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
            txHash,
        ),
        {
          success: true,
          status:
            '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
            txHash,
        }
      );
    } catch (error) {
      return (
        console.log('😥 Something went wrong: ' + error.message),
        {
          success: false,
          status: '😥 Something went wrong: ' + error.message,
        }
      );
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
              this.mintNFT2();
            }}
          >
            Claim
          </button>
        </div>
        <div>
          <img className="imgstyle3" src={ship3} />
          <button
            className="claimButton3"
            onClick={async () => {
              this.mintNFT3();
            }}
          >
            Claim
          </button>
        </div>
      </div>
    );
  }
}

export default Claim;
