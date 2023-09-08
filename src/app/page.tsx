'use client';

import Head from 'next/head';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Next.js + Tailwind + ThirdWeb + web3 + dapp + TypeScript Starter</h1>
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://github.com/annasudol?ref=tsnextstarter'>
              Anna Sudol
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
