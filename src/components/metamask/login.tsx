import React from 'react';
import { Game } from '../game';

export interface Iprops {}
export interface Istate {
  login: boolean;
  error: boolean;
  address: string | null;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

class Login extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = { login: false, error: false, address: null };
  }
  setMetamaskError() {
    this.setState({ ...this.state, login: false, error: true });
  }

  async connectWallet() {
    if (window.ethereum) {
      try {
        const address = await window.ethereum.enable();
        //typeguard for poorly typed external API
        if (Array.isArray(address) && typeof address[0] == 'string')
          return this.setState({
            ...this.state,
            login: true,
            address: address[0],
          });
        else
          return this.setState({ ...this.state, login: true, address: null });
      } catch (error) {}
    }
    return this.setMetamaskError();
  }

  render() {
    if (this.state.login) {
      return (
        <div>
          {Boolean(this.state.address) && (
            <p className="addressText">
              {'Your Metamask address:' + this.state.address}
            </p>
          )}
          <Game />
        </div>
      );
    } else
      return (
        <div style={{ color: 'white' }}>
          <h1 className="headertext">
            To access the Game please connect your wallet by clicking the
            button. To be able to claim your first NFT reward you must need to
            achieve at least 30 points!
          </h1>
          <button
            className="metamask"
            onClick={async () => {
              if (this.state.login == false) await this.connectWallet();
            }}
          >
            {!this.state.login ? 'Connect' : 'Connected'}
          </button>
          {this.state.error && (
            <div className="headertext" style={{ color: 'white' }}>
              To access the game you must install Metamask into your browser:
              https://metamask.io/download.html 🦊
            </div>
          )}
        </div>
      );
  }
}
export default Login;
