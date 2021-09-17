import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Image,
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import RichTextEditor from "react-rte";
import { File, InputFile } from "../../styles/uploader";
import { IoIosImages } from "react-icons/io";

export default function ListDesk() {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(RichTextEditor.createEmptyValue());
  const [editImage, setEditImage] = useState(false);

  const onChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    console.log(text.toString("html"));
  }, [text]);
  return (
    <>
      <Tabs variant="solid-rounded" mt={7} size="sm">
        <TabList>
          <Tab _focus={{ outline: "none" }}>PREFEITO</Tab>
          <Tab _focus={{ outline: "none" }}>VICE-PREFEITO</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid templateColumns="280px 1fr" gap={5}>
              <Box w="280px">
                <Image
                  rounded="md"
                  src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160098.jpg?size=338&ext=jpg"
                  w="280px"
                  h="280px"
                  objectFit="cover"
                />
                <Button
                  leftIcon={<AiFillEdit />}
                  isFullWidth
                  mt={3}
                  colorScheme="blue"
                  _hover={{ transform: "scale(1.05)" }}
                  _active={{ transform: "scale(1)" }}
                  size="lg"
                  onClick={() => setEditImage(true)}
                >
                  Alterar Imagem
                </Button>
              </Box>
              <Flex align="flex-start" direction="column">
                <Heading mb={3}>Nome do Prefeito</Heading>

                <Text textAlign="justify">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Text>

                <Divider mt={5} mb={5} />

                <Flex justify="flex-end" w="100%">
                  <Button
                    colorScheme="blue"
                    size="lg"
                    leftIcon={<AiFillEdit />}
                    _hover={{ transform: "scale(1.05)" }}
                    _active={{ transform: "scale(1)" }}
                    onClick={() => setEdit(true)}
                  >
                    Alterar Informações
                  </Button>
                </Flex>
              </Flex>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="280px 1fr" gap={5}>
              <Box w="280px">
                <Image
                  rounded="md"
                  src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160098.jpg?size=338&ext=jpg"
                  w="280px"
                  h="280px"
                  objectFit="cover"
                />
                <Button
                  leftIcon={<AiFillEdit />}
                  isFullWidth
                  mt={3}
                  colorScheme="blue"
                  _hover={{ transform: "scale(1.05)" }}
                  _active={{ transform: "scale(1)" }}
                  size="lg"
                >
                  Alterar Imagem
                </Button>
              </Box>
              <Flex align="flex-start" direction="column">
                <Heading mb={3}>Nome do Prefeito</Heading>

                <Text textAlign="justify">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Text>

                <Divider mt={5} mb={5} />

                <Flex justify="flex-end" w="100%">
                  <Button
                    colorScheme="blue"
                    size="lg"
                    leftIcon={<AiFillEdit />}
                    _hover={{ transform: "scale(1.05)" }}
                    _active={{ transform: "scale(1)" }}
                  >
                    Alterar Informações
                  </Button>
                </Flex>
              </Flex>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal
        isOpen={edit}
        onClose={() => setEdit(false)}
        scrollBehavior="outside"
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Informações</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            <FormControl isRequired mt={5}>
              <FormLabel>Descrição</FormLabel>
              <RichTextEditor
                value={text}
                onChange={onChange}
                rootStyle={{
                  minHeight: "188px",
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              leftIcon={<AiFillSave />}
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={editImage}
        onClose={() => setEditImage(false)}
        scrollBehavior="outside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alterar Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="280px 280px" gap={5} justifyContent="center">
              <FormControl>
                <FormLabel>Imagem Atual</FormLabel>
                <Image
                  rounded="md"
                  src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160098.jpg?size=338&ext=jpg"
                  w="280px"
                  h="280px"
                  objectFit="cover"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Nova Imagem</FormLabel>
                <InputFile alt={280} lar={280} border={"#3d5794"}>
                  <File type="file" />
                  <IoIosImages style={{ fontSize: 50, marginBottom: 20 }} />
                  <Text>Insira uma imagem 300x300 pixels, de até 500kb</Text>
                </InputFile>
              </FormControl>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              leftIcon={<AiFillSave />}
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
