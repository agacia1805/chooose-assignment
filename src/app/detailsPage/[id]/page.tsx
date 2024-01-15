import { Container, IconButton, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function DetailsPage() {
  return (
    <Container
      as='main'
      role='contentinfo'
      maxW='container.xxl'
      py={{ base: '2', md: '4' }}
      px={{ base: '12', md: '16' }}
    ></Container>
  );
}
