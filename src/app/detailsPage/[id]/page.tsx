'use client';

import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { PiGlobeHemisphereEast, PiFlag, PiBagSimple } from 'react-icons/pi';
import { BsPeople } from 'react-icons/bs';
import { GiBrokenHeartZone } from 'react-icons/gi';
import { formatWeight } from '@/app/utils/formatWeight';
import { useTrip } from '../../hooks/useTrip';
import NextLink from 'next/link';

export default function DetailsPage() {
  const id = useParams()?.id;
  const { data: trip, isLoading, error } = useTrip(Number(id));

  if (isLoading) {
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
  }

  if (error) {
    return (
      <Flex
        justifyContent='center'
        alignItems='center'
        as='main'
        role='main'
        width='full'
        flexDirection='column'
        gap={4}
        px={2}
      >
        <GiBrokenHeartZone size={60} />
        <Text>Something went wrong, try again later.</Text>
      </Flex>
    );
  }

  if (!trip) return null;

  const icons = [
    <PiFlag size={32} key='flag-icon' fill='#1A202C' />,
    <PiGlobeHemisphereEast size={32} key='globe-icon' fill='#1A202C' />,
    <PiBagSimple size={32} key='bad-icon' fill='#1A202C' />,
    <BsPeople size={32} key='people-icon' fill='#1A202C' />,
  ];

  return (
    <Container
      as='main'
      role='contentinfo'
      maxW='container.xl'
      py={{ base: '2', md: '4' }}
      px={4}
    >
      <Link as={NextLink} href='/' textDecor='underline'>
        Go Back
      </Link>
      <Heading mt={{ base: '10', md: '16' }} as='h1' color='gray.800'>
        {trip.title}
      </Heading>
      <Text fontWeight='medium' mb={{ base: '6', md: '10' }} color='gray.600'>
        {trip.subtitle}
      </Text>
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        gap={{ base: '10', xl: '20' }}
      >
        <Box order={1}>
          <AspectRatio
            bgGradient='radial(blackAlpha.100,blackAlpha.200)'
            ratio={40 / 20}
            borderRadius={12}
            overflow='hidden'
          >
            <Image
              width='full'
              src={trip.photoUrl}
              alt={`'${trip.title}' image`}
            />
          </AspectRatio>
          <Heading
            as='h2'
            size='md'
            fontWeight='semibold'
            mt={{ base: '6', md: '10' }}
            mb={6}
          >
            Overview
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='6'>
            {trip.advantages.map((benefit, idx) => (
              <Flex gap='5' key={`benefit-${idx + 1}`}>
                <Box w='16'>{icons[idx]}</Box>
                <Stack spacing={1}>
                  <Heading
                    mt={1}
                    as='h3'
                    size='md'
                    fontWeight='semibold'
                    color='gray.800'
                  >
                    {benefit.title}
                  </Heading>
                  <Text color='gray.600' fontSize='sm'>
                    {benefit.description}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </SimpleGrid>
          <Divider my='8' borderColor='blackAlpha.400' />
          <Text fontWeight='regular' fontSize='sm'>
            {trip.description}
          </Text>
        </Box>
        <Stack
          alignSelf='flex-start'
          minW={{ md: '25rem' }}
          w='100%'
          maxW='25rem'
          bgColor='white'
          borderRadius={12}
          p={6}
          boxShadow='base'
          divider={<StackDivider borderColor='gray.200' />}
          fontWeight='medium'
          gap='4'
          order={{ base: 0, xl: 1 }}
        >
          <Box>
            <Heading fontSize='xl' as='h3' color='gray.800'>
              {trip.days} day{trip.days > 1 && 's'}
            </Heading>
            <Text fontWeight='semibold' fontSize='sm' color='gray.600' pt={2}>
              Emissions: {formatWeight(trip.co2kilograms)}
            </Text>
          </Box>
          <Box>
            <Text fontWeight='semibold' color='gray.600'>
              Countries included:
            </Text>
            <UnorderedList
              display='grid'
              gap='2'
              gridTemplateColumns='1fr 1fr'
              fontWeight='regular'
              fontSize='sm'
              color='gray.600'
              px={2}
              pt={2}
            >
              {trip.countries.map((country) => (
                <ListItem key={country}>{country}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}
