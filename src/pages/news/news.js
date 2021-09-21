import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  Grid,
  Text,
  Divider,
  Container,
  Button,
  Image,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  Box,
  Icon,
  Flex,
} from "@chakra-ui/react";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";
import { FaCalendarAlt, FaImages } from "react-icons/fa";
import { AiFillSave, AiOutlineZoomIn } from "react-icons/ai";
import { File, InputFileFull } from "../../styles/uploader";
import { IoIosImages } from "react-icons/io";
import RichTextEditor from "react-rte";
import Parse from "html-react-parser";

registerLocale("pt_br", pt_br);

export default function News() {
  const textRef = useRef(null);

  const [initDate, setInitDate] = useState(new Date());

  const [text, setText] = useState(RichTextEditor.createEmptyValue());

  const [preview, setPreview] = useState(false);

  const onChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    console.log(text.toString("html"));
  }, [text]);

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input value={value} onClick={onClick} w="100%" isReadOnly />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );

  const ScrollToBottom = () => {
    textRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    ScrollToBottom();
  }, [text]);

  return (
    <>
      <Button
        position="fixed"
        top={"170px"}
        right={10}
        leftIcon={<AiOutlineZoomIn />}
        _hover={{ transform: "scale(1.05)" }}
        _active={{ transform: "scale(1)" }}
        colorScheme="green"
        variant="outline"
        onClick={() => setPreview(true)}
        zIndex={1000}
      >
        Prévia
      </Button>
      <Container maxW="5xl">
        <FormControl mt={10} isRequired>
          <FormLabel>Título da Notícia</FormLabel>
          <Textarea rows={3} resize="none" placeholder="Título da Notícia" />
        </FormControl>
        <FormControl mt={3} isRequired>
          <FormLabel>Resumo da Notícia</FormLabel>
          <Textarea rows={2} resize="none" placeholder="Resumo da Notícia" />
        </FormControl>
        <Grid mt={3} templateColumns="450px 450px" gap={5}>
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

        <Divider mt={5} mb={5} />

        <FormControl isRequired>
          <FormLabel>Imagem Principal</FormLabel>
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

        <FormControl mt={5}>
          <FormLabel>
            Galeria de Imagens (É preciso salvar a notícia primeiro para inserir
            as imagens na galeria)
          </FormLabel>
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

        <Divider mt={5} mb={5} />

        <HStack spacing={5}>
          <Button
            size="lg"
            colorScheme="blue"
            leftIcon={<AiFillSave />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Salvar
          </Button>
          <Button
            size="lg"
            colorScheme="blue"
            leftIcon={<AiFillSave />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            variant="outline"
            isDisabled
          >
            Salvar Galeria
          </Button>
        </HStack>

        <div ref={textRef} />
      </Container>

      <Modal isOpen={preview} onClose={() => setPreview(false)} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={6} pb={5}>
            <Heading fontSize="4xl" textAlign="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sed mollis orci. Maecenas ut nisi porttitor, ultrices nibh nec,
              commodo justo. Sed luctus arcu ut.
            </Heading>
            <Text mt={3} textAlign="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse viverra augue vitae congue tincidunt. Duis sodales
              sagittis fermentum. Cras ullamcorper.
            </Text>
            <Text fontSize="sm" mt={3} fontWeight="bold">
              Autor do Texto
            </Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="light">
              13 de Setembro de 2021
            </Text>

            <Box rounded="md" overflow="hidden" mt={3}>
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                h="400px"
                w="100%"
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
            <Text fontStyle="italic" fontSize="xs" fontWeight="light">
              Copy Imagem
            </Text>

            <div id="news-container">{Parse(text.toString("html"))}</div>

            <Flex align="center" mt={10}>
              <Icon as={FaImages} fontSize="xl" />
              <Heading fontSize="lg" ml={2}>
                Galeria de Fotos
              </Heading>
            </Flex>

            <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={5}>
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                w="100%"
                h="130px"
                objectFit="cover"
                rounded="md"
              />
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                w="100%"
                h="130px"
                objectFit="cover"
                rounded="md"
              />
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                w="100%"
                h="130px"
                objectFit="cover"
                rounded="md"
              />
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
