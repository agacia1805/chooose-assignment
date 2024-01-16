'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ITrip } from '../../types';
import Link from 'next/link';
import { formatWeight } from '@/app/utils/formatWeight';
import { useQueryClient } from '@tanstack/react-query';
import { fetchTrip } from '../../hooks/useTrip';


export const TripCard = ({ trip }: { trip: ITrip }) => {
    const queryClient = useQueryClient();

      const prefetchTrip = async (id: number) => {
        await queryClient.prefetchQuery({queryKey: ['trips', id], queryFn: () => fetchTrip(id)});
      };
return (
  <Card borderRadius={12} width='full' backgroundColor='white'>
    <CardBody padding='0.7rem'>
      <Box
        pt={9}
        pr={6}
        pl={6}
        backgroundImage={trip.photoUrl}
        backgroundSize='cover'
        backgroundPosition='center'
        borderRadius={12}
      >
        <Flex
          direction='column'
          gap={6}
          justify='center'
          align='center'
          color='white'
        >
          <Flex direction='column' gap={1} justify='center' align='center'>
            <Heading fontSize='1.5rem' as='h2'>
              {trip.title}
            </Heading>
            <Text fontSize='sm'>
              {`${trip.countries.length} ${trip.countries.length > 1 ? 'Countries' : 'Country'}, ${trip.days} day${trip.days > 1 ? 's' : ''}`}
            </Text>
          </Flex>
          <Button
            colorScheme='blue'
            size='md'
            as={Link}
            href={`/detailsPage/${trip.id}`}
            onMouseEnter={() => prefetchTrip(Number(trip.id))}
          >
            <span className='sr-only'>{`Learn more details about trip n. ${trip.id}`}</span>
            Learn more
          </Button>
          <Flex
            direction={['column', 'row']}
            justify='space-between'
            align='center'
            textAlign='center'
            width='70%'
            backgroundColor='#1F2838'
            borderRadius={12}
            padding='0.75rem'
            fontSize='sm'
          >
            <Text>Emissions offset: </Text>
            <Text fontWeight='semibold'>{formatWeight(trip.co2kilograms)}</Text>
          </Flex>
          <Flex
            direction={['column', 'row']}
            align='center'
            justify='space-between'
            width='75%'
            color='#1F2838'
            fontSize='sm'
            fontWeight='semibold'
            backgroundColor='white'
            borderRadius='12px 12px 0 0'
            padding={['6px 6px 0', '12px 24px']}
          >
            <Text>Trip rating</Text>

            <Flex direction={['column', 'row']} align='center'>
              <Box height='28px'></Box>
              <Text>{trip.rating}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </CardBody>
  </Card>
)
};
