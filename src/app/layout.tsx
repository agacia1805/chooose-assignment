'use client';

import { Inter } from 'next/font/google';
import { Flex } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Footer, Header } from './components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Chooose assignment</title>
        <meta
          name='description'
          content='Take home assignment for frontend developer role'
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-200`}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Flex direction='column' flex={1} gap={6} minHeight='100vh'>
              <Header />
              <Flex flex='1'>{children}</Flex>
              <Footer />
            </Flex>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
