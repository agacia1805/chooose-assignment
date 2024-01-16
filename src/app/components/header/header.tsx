import { Container, IconButton, Stack, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { GiChestnutLeaf } from 'react-icons/gi';

export const Header = () => (
  <Container as='header' maxW='container.xxl' py={8}>
    <Stack
      spacing={{ base: '4', md: '5' }}
      justify='center'
      direction='row'
      align='center'
    >
      <Link as={NextLink} href='/'>
        <span className='sr-only'>{`Chooose app homepage`}</span>
        <GiChestnutLeaf size={64} />
      </Link>
    </Stack>
  </Container>
);
