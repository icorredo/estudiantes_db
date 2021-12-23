import React from 'react'
import {Heading, Box, Stack, Text} from '@chakra-ui/react'
import {Container} from '../components'

/* Pagina que coniene el mensaje de aceptacion de la solicitud de incorporar la internship
   Dentro del componente de React, Succes, se usan los componentes de chakra importados. 
   Las opciones que se pueden aplicar a estos elementos de chakra estan en la documentacion.
   Exportar el componente implica que sea utilizable por otros scripts sin necesidad de importarlo cada vez.*/

const Success = () => {
  return (
    <Container>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        py={{base: 20, md: 36}}
      >
        <Heading
          fontWeight={600}
          fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
          lineHeight={'110%'}
        >
          <Text as={'span'} color={'green.400'}>
            Congrats! <br />
          </Text>
          You have successfully submitted your application <span>😄</span>
        </Heading>
      </Stack>
    </Container>
  )
}
export default Success
