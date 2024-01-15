import { Container, Flex, FlexProps, Box, BoxProps } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex as='main' role='main' direction='column' flex='1' py='16'>
      <Container flex='1'>
        <Box role='presentation' py='3' px='4' color='fg.accent.default' />
      </Container>
    </Flex>
  );
}
