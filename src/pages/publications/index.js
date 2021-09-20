import React, { useState } from "react";
import {
  Center,
  Text,
  Grid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Icon,
  Flex,
  Table,
  Th,
  Thead,
  Td,
  Tr,
  Tbody,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { File, InputFile } from "../../styles/uploader";
import { FaFilePdf, FaCalendarAlt } from "react-icons/fa";
import {
  AiFillSave,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineCheck,
} from "react-icons/ai";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";

registerLocale("pt_br", pt_br);

export default function Publications() {
  const [showPdf, setShowPdf] = useState(false);
  const [initDate, setInitDate] = useState(new Date());

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input value={value} onClick={onClick} w="100%" />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );
  return (
    <>
      <Center rounded="md" bg="green.500" p={1}>
        <Text color="white" fontWeight="bold" fontSize="lg">
          PUBLICAÇÕES
        </Text>
      </Center>

      <Grid templateColumns="330px 1fr" gap={7} mt={10}>
        <Box
          borderWidth="2px"
          rounded="md"
          p={3}
          borderColor="blue.500"
          shadow="md"
        >
          <FormControl isRequired>
            <FormLabel>Título</FormLabel>
            <Input placeholder="Título" />
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel>Data da Publicação</FormLabel>
            <DatePicker
              selected={initDate}
              onChange={(date) => setInitDate(date)}
              customInput={<CustomInputPicker />}
              locale="pt_br"
              dateFormat="dd/MM/yyyy"
              calendarClassName="calendar"
            />
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel>Arquivo PDF</FormLabel>
            <InputFile alt={80} lar={300} border={"#3d5794"}>
              <File type="file" />
              <Icon as={FaFilePdf} fontSize="2xl" />
              <Text fontSize="sm" mt={1}>
                Insira o arquivo PDF
              </Text>
            </InputFile>
          </FormControl>
          <Button
            colorScheme="blue"
            leftIcon={<AiFillSave />}
            isFullWidth
            mt={3}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Salvar
          </Button>
        </Box>
        <Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <Box borderWidth="1px" rounded="md" overflow="hidden" p={2}>
              <Flex align="center" justify="center">
                <Text mb={2} textAlign="center" fontWeight="semibold">
                  Edição nº 27 de 08 de Setembro de 2021
                </Text>
              </Flex>
              <Text textAlign="center" fontWeight="light" fontSize="sm">
                8 de Setembro de 2021
              </Text>

              <Divider mt={3} />
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Arquivo</Th>
                    <Th w="10%">Opções</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Text noOfLines={1} w="90%">
                        ashdkajskdhjaskdjasodaosid.pdf
                      </Text>
                    </Td>
                    <Td w="10%">
                      <Button
                        size="xs"
                        leftIcon={<AiOutlineSearch />}
                        colorScheme="green"
                        _hover={{ transform: "scale(1.05)" }}
                        _active={{ transform: "scale(1)" }}
                        onClick={() => setShowPdf(true)}
                      >
                        Ver
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>

              <Popover>
                <PopoverTrigger>
                  <Button
                    colorScheme="red"
                    mt={3}
                    leftIcon={<AiOutlineClose />}
                    isFullWidth
                    _hover={{ transform: "scale(1.02)" }}
                    _active={{ transform: "scale(1)" }}
                  >
                    Excluir Publicação
                  </Button>
                </PopoverTrigger>
                <PopoverContent _focus={{ outline: "none" }} shadow="lg">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmação!</PopoverHeader>
                  <PopoverBody>Deseja excluir esta imagem?</PopoverBody>
                  <PopoverFooter d="flex" justifyContent="flex-end">
                    <Button
                      colorScheme="green"
                      leftIcon={<AiOutlineCheck />}
                      size="sm"
                    >
                      Sim
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </Box>
          </Grid>
        </Box>
      </Grid>

      <Modal
        isOpen={showPdf}
        onClose={() => setShowPdf(false)}
        scrollBehavior="inside"
        size="5xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent h="89vh">
          <ModalHeader>Visualizar PDF</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} h="100%">
            <Box roundedBottom="md" overflow="hidden" h="100%">
              <embed
                src="http://www.africau.edu/images/default/sample.pdf"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
