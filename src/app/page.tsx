import React from 'react';
import { ConnectWalletButton } from './components/ConnectWalletButton';
import MyInput from './components/MyInput';
import GenerateReputationButton from './components/Buttons/GenerateReputationButton';
import ViewReputationButton from './components/Buttons/ViewReputationButton';
import MintTokensButton from './components/Buttons/MintTokensButton';
import VouchButton from './components/Buttons/VouchButton';
import UnvouchButton from './components/Buttons/UnvouchButton';
import VouchFromButton from './components/Buttons/VouchFromButton';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full flex-1 p-20 text-center'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center w-full gap-4'>
          <MyInput type='text' placeholder='Enter address or connect wallet' className='flex-grow' />
          <ConnectWalletButton />
        </div>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <GenerateReputationButton />
          <ViewReputationButton />
          <MintTokensButton />
          <VouchButton />
          <UnvouchButton />
          <VouchFromButton />
        </div>
      </div>
    </main>
  );
}
