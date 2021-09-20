import React, { useState } from "react";
import {
  Input,
  Grid,
  Icon,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
  IconButton,
  Tooltip,
  Divider,
  Button,
} from "@chakra-ui/react";
import { File, InputFile } from "../../styles/uploader";
import { FaFilePdf, FaCalendarAlt } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";
import { AiOutlineClose, AiFillSave } from "react-icons/ai";

registerLocale("pt_br", pt_br);

export default function Bids() {
  const [initDate, setInitDate] = useState(new Date());

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
          <FormLabel>Título</FormLabel>
          <Input placeholder="Título" />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Publicação</FormLabel>
          <DatePicker
            selected={initDate}
            onChange={(date) => setInitDate(date)}
            customInput={<CustomInputPicker />}
            locale="pt_br"
            dateFormat="dd/MM/yyyy"
          />
        </FormControl>
      </Grid>
      <FormControl mt={5}>
        <FormLabel>Arquivos</FormLabel>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 250px))" gap={5}>
          <Flex
            borderWidth="1px"
            rounded="md"
            direction="column"
            justify="center"
            align="center"
          >
            <Text fontSize="xs" mt={1} noOfLines={1}>
              <Icon as={FaFilePdf} fontSize="xl" /> Arquivo.pdf
            </Text>
            <Tooltip label="Excluir Arquivo" hasArrow>
              <IconButton
                icon={<AiOutlineClose />}
                size="xs"
                rounded="full"
                colorScheme="red"
                mt={1}
                variant="ghost"
              />
            </Tooltip>
          </Flex>
          <InputFile alt={80} lar={250} border={"#3d5794"}>
            <File type="file" />
            <Icon as={FaFilePdf} fontSize="2xl" />
            <Text fontSize="sm" mt={1}>
              Insira o arquivo PDF
            </Text>
          </InputFile>
        </Grid>
      </FormControl>

      <Divider mt={5} mb={5} />

      <Button
        leftIcon={<AiFillSave />}
        size="lg"
        colorScheme="blue"
        _hover={{ transform: "scale(1.05)" }}
        _active={{ transform: "scale(1)" }}
      >
        Salvar
      </Button>
    </>
  );
}
