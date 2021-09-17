import React, { useState, useEffect } from "react";
import {
  Grid,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import { File, InputFile } from "../../styles/uploader";
import { IoIosImages } from "react-icons/io";
import RichTextEditor from "react-rte";
import { AiFillSave } from "react-icons/ai";

export default function Desks() {
  const [text, setText] = useState(RichTextEditor.createEmptyValue());

  const onChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    console.log(text.toString("html"));
  }, [text]);

  return (
    <>
      <Grid templateColumns="280px 1fr" gap={7} mt={7}>
        <FormControl isRequired>
          <FormLabel>Foto</FormLabel>
          <InputFile alt={280} lar={280} border={"#3d5794"}>
            <File type="file" />
            <IoIosImages style={{ fontSize: 50, marginBottom: 20 }} />
            <Text>Insira uma imagem 300x300 pixels, de até 500kb</Text>
          </InputFile>
        </FormControl>

        <Box>
          <Grid templateColumns="2fr 1fr" gap={5}>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Nome" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Cargo</FormLabel>
              <Select placeholder="Selecione uma opção">
                <option value="major">Prefeito</option>
                <option value="vice-major">Vice-Prefeito</option>
              </Select>
            </FormControl>
          </Grid>

          <FormControl mt={5} isRequired>
            <FormLabel>Descrição</FormLabel>
            <Box>
              <RichTextEditor
                value={text}
                onChange={onChange}
                rootStyle={{
                  minHeight: "188px",
                }}
              />
            </Box>
          </FormControl>
        </Box>
      </Grid>

      <Divider mt={5} mb={5} />

      <Button
        leftIcon={<AiFillSave />}
        colorScheme="blue"
        size="lg"
        _hover={{ transform: "scale(1.05)" }}
        _active={{ transform: "scale(1)" }}
      >
        Salvar
      </Button>
    </>
  );
}
