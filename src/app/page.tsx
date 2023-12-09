import React from 'react';
import MyButton from './components/MyButton';
import { ConnectWalletButton } from './components/ConnectWalletButton';
import MyInput from './components/MyInput';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full flex-1 p-20 text-center'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center w-full gap-4'>
          <MyInput type='text' placeholder='Enter address or connect wallet' className='flex-grow' />
          <ConnectWalletButton />
        </div>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <MyButton>Generate reputation</MyButton>
          <MyButton>View reputation</MyButton>
          <MyButton>Mint Tokens</MyButton>
          <MyButton>Vouch</MyButton>
          <MyButton>Unvouch</MyButton>
          <MyButton>Vouch From</MyButton>
        </div>
      </div>
    </main>
  );
}
