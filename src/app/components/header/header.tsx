import { Container, IconButton, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { GiChestnutLeaf } from 'react-icons/gi';

export const Header = () => (
  <Container
    as='header'
    role='contentinfo'
    maxW='container.xxl'
    py={{ base: '4', md: '8' }}
    px={{ base: '4', md: '8' }}
  >
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify='space-between' direction='row' align='center'>
        <Link as={NextLink} href='/'>
          <IconButton
            aria-label='Homepage'
            width={75}
            height={75}
            icon={<GiChestnutLeaf size={64} />}
          />
        </Link>
      </Stack>
    </Stack>
  </Container>
);
