import React from 'react';
import { Game } from '../game';

export interface Iprops {}
export interface Istate {
  login: boolean;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

class Login extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = { login: false };
  }
  render() {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const address = await window.ethereum.enable();
          const obj = {
            connectedStatus: true,
            status: '',
            address: address,
          };
          return obj;
        } catch (error) {
          return {
            connectedStatus: false,
            status: '🦊 Connect to Metamask using the button on the top right.',
          };
        }
      } else {
        return {
          connectedStatus: false,
          status:
            '🦊 You must install Metamask into your browser: https://metamask.io/download.html',
        };
      }
    };
    if (this.state.login) return <Game />;
    else
      return (
        <div style={{ color: 'white' }}>
          <button
            onClick={async () => {
              console.log(await connectWallet());
            }}
          >
            Einloggen
          </button>
        </div>
      );
  }
}
export default Login;
