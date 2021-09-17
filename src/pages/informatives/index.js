import React from "react";
import {
  Center,
  Text,
  Grid,
  Box,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { File, InputFile } from "../../styles/uploader";
import { IoIosImages } from "react-icons/io";
import { AiFillSave, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function Informatives() {
  return (
    <>
      <Center rounded="md" bg="green.500" p={1} shadow="md">
        <Text color="white" fontWeight="bold" fontSize="lg">
          INFORMATIVOS
        </Text>
      </Center>
      <Grid
        mt={10}
        templateColumns="repeat(auto-fit, minmax(280px, 280px))"
        gap={7}
        justifyContent="center"
      >
        <Box>
          <InputFile alt={280} lar={280} border={"#3d5794"}>
            <File type="file" />
            <IoIosImages style={{ fontSize: 50, marginBottom: 20 }} />
            <Text>Insira uma imagem 300x300 pixels, de até 500kb</Text>
          </InputFile>
          <Button
            leftIcon={<AiFillSave />}
            isFullWidth
            colorScheme="blue"
            mt={3}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Salvar Imagem
          </Button>
        </Box>
        <Box w="280px">
          <Image
            rounded="md"
            src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160098.jpg?size=338&ext=jpg"
            w="280px"
            h="280px"
            objectFit="cover"
          />
          <Popover>
            <PopoverTrigger>
              <Button
                leftIcon={<AiOutlineClose />}
                isFullWidth
                colorScheme="red"
                mt={3}
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
              >
                Excluir Imagem
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
    </>
  );
}
