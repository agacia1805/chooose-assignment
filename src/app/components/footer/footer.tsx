import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => (
  <Container as='footer' py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify='space-between' direction='row' align='center'>
        <Text fontSize='sm' fontWeight='semibold' color='fg.subtle'>
          &copy; {new Date().getFullYear()} Pinehead Coder
        </Text>
        <ButtonGroup variant='tertiary'>
          <Link
            as={NextLink}
            href='https://www.linkedin.com/in/agatadopierala/'
          >
            <IconButton aria-label='LinkedIn' icon={<FaLinkedin />} />
          </Link>
          <Link as={NextLink} href='https://github.com/agacia1805'>
            <IconButton aria-label='GitHub' icon={<FaGithub />} />
          </Link>
        </ButtonGroup>
      </Stack>
    </Stack>
  </Container>
);
