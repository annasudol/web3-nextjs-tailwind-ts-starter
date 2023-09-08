import { Goerli } from '@thirdweb-dev/chains';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider supportedChains={[Goerli]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
