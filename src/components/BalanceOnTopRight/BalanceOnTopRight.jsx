import React, { useEffect, useState } from 'react'
import SelectWalletModal from '../Web3Modal/Web3Modal'
import classes from './BalanceOnTopRight.module.css'
import { useDisclosure } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { toHex, truncateAddress } from '../../utils/helper';
import { ethers } from "ethers";
import axios from 'axios';
import { networks } from '../../utils/contants';
import { connectors } from '../../utils/connectors';
import MyButton from '../UI/button/MyButton';

export default function BalanceOnTopRight({ style, topText, bottomText }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { library, chainId, activate, deactivate, active, account } = useWeb3React();
  const [, setError] = useState('');
  const [, setNetwork] = useState(undefined);
  const [networkName, setNetworkName] = useState(undefined);
  const [balance, setBalance] = useState();
  const [balanceUSD, setBalanceUSD] = useState();

  useEffect(() => {
    const getBalance = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      const balance = await provider.getBalance(account);
      const amount = ethers.utils.formatEther(balance.toString());
      const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
      const response = await axios.get(url);
      const ethereumPrice = response.data.ethereum.usd;
      setBalanceUSD((parseFloat(amount) * ethereumPrice).toFixed(2));
      setBalance(parseFloat(amount).toFixed(6))
    }
    if (account) {
      getBalance();
    }

  }, [account]);

  useEffect(() => {
    if (chainId) {
      let network = networks.find((x) => x.id === chainId);
      if (network) {
        setNetworkName(network.name);
      }
    }
  }, [chainId]);

  const handleNetwork = ({ id, name }) => {
    changeNetwork(id);
  };

  const changeNetwork = (id) => {
    setNetwork(Number(id));
    switchNetwork(Number(id));
  };

  const switchNetwork = async (id) => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(id) }]
      });
      setNetworkName(networks.find((x) => x.id === id).name);
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: 'wallet_addEthereumChain'
            // params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const refreshState = () => {
    window.localStorage.setItem('provider', undefined);
    setNetwork('');
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    if (provider) activate(connectors[provider]);
  }, [activate]);

  return (
    <div className={classes.rightText} style={style}>
      {!active ?
        <>
          <MyButton style={{ width: '100%' }} onClick={onOpen}><span>Connect Wallet</span></MyButton>
        </>

        : <>
          <div>
            <span className={classes.rightTextTop}>{topText ? topText : truncateAddress(account)}</span>
            {balance && balanceUSD && <span className={classes.rightTextBottom}>{bottomText ? bottomText : `$${balanceUSD} (${balance} ETH)`}</span>}
          </div>

          <MyButton style={{ width: '50%' }} onClick={disconnect}>Disconnect</MyButton>

        </>}

      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </div>
  )
}
