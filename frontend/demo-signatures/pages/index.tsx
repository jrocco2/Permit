import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useSigner } from 'wagmi';
import { ethers } from "ethers";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { abi, getPermit } from './typeData';

const Home: NextPage = () => {
  const [balance, setBalance] = useState("0");
  const [userAddress, setUserAddress] = useState("");

  const { data: signer, isError, isLoading } = useSigner();

  const contractAddress = "0xaDf1e5171Bbc1605Bf746B490ED925cEc6479B1d";
  const providerUrl = "https://eth-goerli.g.alchemy.com/v2/cWbSiG2tHrQ1Np3VpcUnStJUsxE7BEze"
  const contract = new ethers.Contract(
    contractAddress,
    abi,
    new ethers.providers.JsonRpcProvider(providerUrl)
  );

  async function signWithEIP712() {
    const erc20name = "MyToken"
    const version = "1"
    const chainid = "5"
    const tokenAddress = contractAddress
    const owner = userAddress
    const spender = "0x9b591bf6970D271c4660Df5E08d85773E998B59E"
    const value = ethers.utils.parseEther("1").toString()
    const nonce = await contract.nonces(userAddress)
    const timestamp = (await contract.provider!.getBlock(await contract.provider!.getBlockNumber())).timestamp;
    const deadline = `${timestamp + 60 * 60 * 24 * 30}`;

    const typedData = await getPermit(
      erc20name,
      version,
      chainid,
      tokenAddress,
      owner,
      spender,
      value,
      nonce,
      deadline
    )

    const tempSigner = signer as ethers.providers.JsonRpcSigner;
    console.log("and here")
    const rawSignature = await tempSigner._signTypedData(typedData.domain, typedData.types, typedData.message)
    const sig = ethers.utils.splitSignature(rawSignature);

    console.log("Raw Signature: ", rawSignature)
    console.log("Owner: ", typedData.message.owner)
    console.log("Spender: ", typedData.message.spender)
    console.log("Value: ", typedData.message.value)
    console.log("Deadline: ", typedData.message.deadline)
    console.log("V: ", sig.v)
    console.log("R: ", sig.r)
    console.log("S: ", sig.s)

  }
  function signGenericMessage() {
    if (!signer?._isSigner) return;
    signer
      .signMessage("0x6101406040523480156200001257600080fd5b506040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000")
      .then((signature) => {
        console.log('Signature: ', signature);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  useEffect(() => {
    const getBalance = async () => {
      if (!signer?._isSigner) return;
      const address = await signer?.getAddress();
      setUserAddress(address);
      console.log("Address: ", address)
      const balance = await contract.balanceOf(address);
      setBalance(ethers.utils.formatEther(balance))
      console.log(balance);
    }
    getBalance();
  }, [signer]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Signature App</title>
        <meta
          name="description"
          content="An small app to demonstrate how to sign messages."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to the <a href="">Signature</a> Express! 🚀
        </h1>

        <p className={styles.description}>
          Choose a signing method to see how signatures work
        </p>

        <div className={styles.grid}>
          <a onClick={() => signGenericMessage()} className={styles.card}>
            <h2>Sign Message</h2>
            <p>Click this to see an old school message</p>
          </a>

          <a onClick={() => signWithEIP712()} className={styles.card}>
            <h2>EIP-712 Signature</h2>
            <p>See how an EIP-712 Signature looks like</p>
          </a>

          <a href="https://goerli.etherscan.io/address/0xadf1e5171bbc1605bf746b490ed925cec6479b1d" className={styles.card}>
            <h2>MyToken Balance &rarr;</h2>
            <p>You have <b>{balance}</b> MyTokens in your wallet</p>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        🚀🚀🚀🚀🚀🚀🚀🚀
      </footer>
    </div>
  );
};

export default Home;
