import React from "react";
import {
  Grid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import { File, InputFile } from "../../styles/uploader";
import { IoIosImages } from "react-icons/io";
import { AiFillSave } from "react-icons/ai";

export default function Secretary() {
  return (
    <>
      <Grid templateColumns="280px 1fr" gap={7} mt={10}>
        <Box>
          <FormControl isRequired>
            <FormLabel>Foto do(a) Secretário(a)</FormLabel>
            <InputFile alt={280} lar={280} border={"#3d5794"}>
              <File type="file" />
              <IoIosImages style={{ fontSize: 50, marginBottom: 20 }} />
              <Text>Insira uma imagem 300x300 pixels, de até 500kb</Text>
            </InputFile>
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel>Nome da Secretaria</FormLabel>
            <Input placeholder="Nome da Secretaria" />
          </FormControl>
          <Grid templateColumns="1fr 1fr 1fr" gap={5} mt={3}>
            <FormControl isRequired>
              <FormLabel>Nome do(a) Secretário(a)</FormLabel>
              <Input placeholder="Nome do(a) Secretário(a)" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Telefone do(a) Secretário(a)</FormLabel>
              <Input placeholder="Telefone do(a) Secretário(a)" />
            </FormControl>
            <FormControl>
              <FormLabel>Email do(a) Secretário(a)</FormLabel>
              <Input placeholder="Email do(a) Secretário(a)" />
            </FormControl>
          </Grid>
          <FormControl mt={3} isRequired>
            <FormLabel>Endereço da Secretaria</FormLabel>
            <Input placeholder="Endereço da Secretaria" />
          </FormControl>
          <FormControl mt={3} isRequired>
            <FormLabel>Horário de Atendimento</FormLabel>
            <Input placeholder="Horário de Atendimento" />
          </FormControl>
        </Box>
      </Grid>

      <Divider mt={5} mb={5} />

      <Button
        size="lg"
        leftIcon={<AiFillSave />}
        colorScheme="blue"
        _hover={{ transform: "scale(1.05)" }}
        _active={{ transform: "scale(1)" }}
      >
        Salvar
      </Button>
    </>
  );
}
