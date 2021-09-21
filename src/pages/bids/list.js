import React, { useState } from "react";
import {
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Stack,
  Flex,
  Box,
  Button,
  Divider,
  Icon,
  Heading,
  Text,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaFolder,
  FaFilePdf,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";

registerLocale("pt_br", pt_br);

export default function ListBids() {
  const [initDate, setInitDate] = useState(new Date());
  const [modalPdf, setModalPdf] = useState(false);

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input value={value} onClick={onClick} w="100%" />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );

  return (
    <>
      <Grid templateColumns="3fr 1fr" gap={5} mt={10}>
        <FormControl>
          <FormLabel>Buscar por Título</FormLabel>
          <Input placeholder="Digite para buscar" />
        </FormControl>
        <FormControl>
          <FormLabel>Buscar por Data de Publicação</FormLabel>
          <DatePicker
            selected={initDate}
            onChange={(date) => setInitDate(date)}
            customInput={<CustomInputPicker />}
            locale="pt_br"
            dateFormat="dd/MM/yyyy"
          />
        </FormControl>
      </Grid>

      <Divider mt={5} mb={5} />

      <Stack spacing={5}>
        <Box borderWidth="1px" rounded="md" p={3}>
          <Flex align="center">
            <Icon as={FaFolder} color="green.500" fontSize="3xl" />
            <Box ml={5}>
              <Heading fontSize="lg">Título da Licitação</Heading>
              <Text fontSize="xs">21 de Setembro de 2021</Text>
            </Box>
          </Flex>
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
                  <Icon as={FaFilePdf} /> Arquivo.pdf
                </Td>
                <Td>
                  <Button
                    size="xs"
                    leftIcon={<FaSearch />}
                    colorScheme="blue"
                    isFullWidth
                    onClick={() => setModalPdf(true)}
                    _hover={{ transform: "scale(1.05)" }}
                    _active={{ transform: "scale(1)" }}
                  >
                    Visualizar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Button
            mt={3}
            colorScheme="red"
            leftIcon={<FaTrash />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Excluir Publicação
          </Button>
        </Box>
      </Stack>

      <Modal
        isOpen={modalPdf}
        onClose={() => setModalPdf(false)}
        size="6xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent overflow="hidden" h="84vh">
          <ModalHeader>Visualizar Documento</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <embed
              src="http://www.africau.edu/images/default/sample.pdf"
              width="100%"
              height="100%"
              type="application/pdf"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
