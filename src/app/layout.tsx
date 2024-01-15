import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Flex } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Footer, Header } from './components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chooose assignment',
  description: 'Created by Agata D.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-gray-300`}
      >
        <ChakraProvider>
          <Flex direction='column' flex='1'>
            <Header />
            <div className='flex flex-grow flex-col justify-center'>
              {children}
            </div>
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
