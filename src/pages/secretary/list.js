import React from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Image,
  Text,
  Center,
  Box,
  Grid,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { IoIosImages } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";

export default function ListSecretary() {
  return (
    <>
      <FormControl mt={10}>
        <FormLabel>Pesquisar por Nome da Secretaria</FormLabel>
        <Input placeholder="Digite para buscar" />
      </FormControl>

      <Divider mt={5} mb={5} />

      <Stack spacing={5}>
        <Box rounded="md" borderWidth="1px" p={5}>
          <Center
            p={2}
            bg="green.500"
            color="white"
            fontWeight="bold"
            rounded="md"
          >
            Nome da Secretaria
          </Center>

          <Grid templateColumns="280px 1fr" gap={6} mt={3}>
            <Box>
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                w="280px"
                h="280px"
                objectFit="cover"
                rounded="md"
              />
              <Button
                leftIcon={<IoIosImages />}
                colorScheme="blue"
                isFullWidth
                mt={3}
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
              >
                Alterar Imagem
              </Button>
            </Box>

            <Box>
              <Center>
                <Text>DADOS DA SECRETARIA</Text>
              </Center>

              <Heading fontSize="2xl" mt={5}>
                Nome do Secretário
              </Heading>
              <Text mt={3}>
                <strong>ENDEREÇO:</strong> It is a long established fact that a
                reader will be distracted by the
              </Text>
              <Text mt={3}>
                <strong>TELEFONE:</strong> (99) 99999-9999
              </Text>
              <Text mt={3}>
                <strong>EMAIL:</strong> email@email.com
              </Text>
              <Text mt={3}>
                <strong>ATENDIMENTO:</strong> 08:00 às 12:00 (Público) e 14:00
                às 18:00, segunda a sexta-feira.
              </Text>

              <Divider mt={3} mb={3} />
              <Flex justify="flex-end">
                <Button
                  leftIcon={<AiFillEdit />}
                  colorScheme="blue"
                  mt={3}
                  _hover={{ transform: "scale(1.05)" }}
                  _active={{ transform: "scale(1)" }}
                >
                  Editar Informações
                </Button>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Stack>
    </>
  );
}
