import React, { useState } from "react";
import {
  Grid,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { AiFillSave, AiOutlineTool } from "react-icons/ai";
import { File, InputFileFull } from "../../styles/uploader";
import { IoIosImages } from "react-icons/io";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";
import { FaCalendarAlt } from "react-icons/fa";
import RichTextEditor from "react-rte";

registerLocale("pt_br", pt_br);

export default function ListNews() {
  const [modalGalery, setModalGalery] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);

  const [initDate, setInitDate] = useState(new Date());
  const [text, setText] = useState(RichTextEditor.createEmptyValue());

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input value={value} onClick={onClick} w="100%" isReadOnly />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );

  const onChange = (value) => {
    setText(value);
  };

  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={5}
        justifyContent="center"
        mt={10}
      >
        <Box>
          <Box rounded="md" overflow="hidden" borderWidth="1px">
            <Image
              src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
              layout="responsive"
              h="160px"
              alt="Prefeitura de Santa Maria"
              objectFit="cover"
            />
            <Flex
              h={["200px", "230px", "230px", "230px", "230px"]}
              align="center"
            >
              <Box p={3}>
                <Heading
                  fontSize={["md", "lg", "lg", "lg", "lg"]}
                  noOfLines={4}
                >
                  Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                  devido ao Feriado Nacional
                </Heading>
                <Text
                  fontSize={["sm", "md", "md", "md", "md"]}
                  mt={2}
                  noOfLines={3}
                >
                  O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                  data a Portaria n° 224/2021, que
                </Text>

                <Text
                  fontSize={["xs", "sm", "sm", "sm", "sm"]}
                  mt={2}
                  fontWeight="light"
                  noOfLines={1}
                >
                  09 de Setembro de 2021
                </Text>
              </Box>
            </Flex>
          </Box>

          <Menu placement="top">
            <MenuButton
              as={Button}
              rightIcon={<AiOutlineTool />}
              isFullWidth
              mt={3}
              colorScheme="blue"
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
            >
              Opções
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setModalGalery(true)}>
                Alterar Galeria
              </MenuItem>
              <MenuItem onClick={() => setModalImage(true)}>
                Alterar Imagem
              </MenuItem>
              <MenuItem onClick={() => setModalInfo(true)}>
                Alterar Textos
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Grid>

      <Modal
        isOpen={modalGalery}
        onClose={() => setModalGalery(false)}
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alterar Galeria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Grid templateColumns="repeat(4, 1fr)" gap={5}>
                <Image
                  src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                  w="100%"
                  h="130px"
                  objectFit="cover"
                  rounded="md"
                />
                <InputFileFull alt={130} border={"#3d5794"}>
                  <File type="file" />
                  <IoIosImages style={{ fontSize: 50, marginBottom: 15 }} />
                  <Text>Insira uma imagem</Text>
                </InputFileFull>
              </Grid>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
              leftIcon={<AiFillSave />}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalImage}
        onClose={() => setModalImage(false)}
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alterar Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Insira uma Nova Imagem</FormLabel>
              <InputFileFull alt={400} border={"#3d5794"}>
                <File type="file" />
                <IoIosImages style={{ fontSize: 50, marginBottom: 20 }} />
                <Text>Insira uma imagem</Text>
              </InputFileFull>
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Copy da Imagem</FormLabel>
              <Input placeholder="Copy da Imagem" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
              leftIcon={<AiFillSave />}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={modalInfo} onClose={() => setModalInfo(false)} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alterar Textos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Título da Notícia</FormLabel>
              <Textarea
                rows={3}
                resize="none"
                placeholder="Título da Notícia"
              />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Resumo da Notícia</FormLabel>
              <Textarea
                rows={2}
                resize="none"
                placeholder="Resumo da Notícia"
              />
            </FormControl>
            <Grid mt={3} templateColumns="1fr 1fr 1fr" gap={5}>
              <FormControl isRequired>
                <FormLabel>Tag da Notícia</FormLabel>
                <Input placeholder="Tag da Notícia" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Autor da Notícia</FormLabel>
                <Input placeholder="Autor da Notícia" />
              </FormControl>
              <FormControl>
                <FormLabel>Data da Publicação</FormLabel>
                <DatePicker
                  selected={initDate}
                  onChange={(date) => setInitDate(date)}
                  customInput={<CustomInputPicker />}
                  locale="pt_br"
                  dateFormat="dd/MM/yyyy"
                  calendarClassName="calendar"
                  showPopperArrow={false}
                />
              </FormControl>
            </Grid>

            <FormControl isRequired mt={5}>
              <FormLabel>Texto Principal</FormLabel>

              <RichTextEditor
                value={text}
                onChange={onChange}
                rootStyle={{
                  minHeight: "188px",
                }}
                placeholder="Insira seu texto aqui"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
              leftIcon={<AiFillSave />}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
