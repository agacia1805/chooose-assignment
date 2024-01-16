'use client';

import React, { useEffect, useRef } from 'react';
import { Container, SimpleGrid, Spinner, Flex, Box } from '@chakra-ui/react';
import { TripCard } from './components';
import { useInView } from 'react-intersection-observer';
import { useTrips } from './hooks/useTrips';

export default function Home() {
  const {
    data: queryData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useTrips();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <Flex
        justifyContent='center'
        alignItems='center'
        as='main'
        role='main'
        width='full'
      >
        <Spinner
          thickness='4px'
          speed='1s'
          emptyColor='gray.200'
          color='gray.700'
          size='xl'
        />
      </Flex>
    );

  return (
    <Container as='main' role='main' maxW='container.xl'>
      <SimpleGrid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        justifyItems='center'
        gap={6}
      >
        {queryData?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map((trip) => (
              <TripCard trip={trip} key={`trip-${trip.id}`} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Flex
        justifyContent='center'
        alignItems='center'
        as='main'
        role='main'
        width='full'
        ref={ref}
        mt={12}
      >
        {isFetchingNextPage && (
          <Spinner
            thickness='4px'
            speed='1s'
            emptyColor='gray.200'
            color='gray.700'
            size='xl'
          />
        )}
      </Flex>
    </Container>
  );
}
