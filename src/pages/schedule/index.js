import React, { useState } from "react";
import {
  Grid,
  Text,
  Center,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Icon,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import {
  AiFillSave,
  AiOutlineCalendar,
  AiOutlineInsertRowBelow,
} from "react-icons/ai";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";

registerLocale("pt_br", pt_br);

export default function Schedule() {
  const [initDate, setInitDate] = useState(new Date());
  const [modalInsert, setModalInsert] = useState(false);

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input value={value} onClick={onClick} w="100%" />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );

  return (
    <>
      <Center rounded="md" bg="green.500" p={1} shadow="md">
        <Text color="white" fontWeight="bold" fontSize="lg">
          AGENDA
        </Text>
      </Center>

      <Grid mt={10} templateColumns="280px 1fr" gap={6}>
        <Box
          rounded="md"
          borderWidth="2px"
          borderColor="blue.500"
          p={4}
          h="min-content"
        >
          <DatePicker
            selected={initDate}
            onChange={(date) => setInitDate(date)}
            customInput={<CustomInputPicker />}
            locale="pt_br"
            dateFormat="dd/MM/yyyy"
            calendarClassName="calendar"
            showPopperArrow={false}
          />
          <Button
            leftIcon={<AiFillSave />}
            colorScheme="blue"
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            isFullWidth
            mt={5}
          >
            Salvar Data
          </Button>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>Filtrar por Data</FormLabel>
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

          <Divider mt={5} mb={5} />
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={5}
            justifyContent="center"
          >
            <Box
              borderWidth="1px"
              rounded="md"
              overflow="hidden"
              h="min-content"
            >
              <Flex justify="center" align="center" bg="blue.500" p={2}>
                <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
                <Heading fontSize="lg" ml={3} color="white">
                  13 de Setembro
                </Heading>
              </Flex>
              <Stack p={2}>
                <Flex bg={"blackAlpha.100"} rounded="md" align="center" p={1}>
                  <Text fontWeight="bold" ml={1}>
                    12:00
                  </Text>
                  <Box ml={3}>
                    <Text noOfLines={4} fontSize="sm">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </Text>
                  </Box>
                </Flex>

                <Button
                  leftIcon={<AiOutlineInsertRowBelow />}
                  colorScheme="blue"
                  variant="outline"
                  onClick={() => setModalInsert(true)}
                  _hover={{ transform: "scale(1.02)" }}
                  _active={{ transform: "scale(1)" }}
                >
                  Inserir Evento
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Grid>

      <Modal
        isOpen={modalInsert}
        onClose={() => setModalInsert(false)}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inserir Evento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Horário</FormLabel>
              <DatePicker
                selected={initDate}
                onChange={(date) => setInitDate(date)}
                customInput={<CustomInputPicker />}
                locale="pt_br"
                dateFormat="dd/MM/yyyy"
                calendarClassName="calendar"
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Horário"
                dateFormat="h:mm aa"
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Informações do Evento</FormLabel>
              <Textarea rows={10} />
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
    </>
  );
}
