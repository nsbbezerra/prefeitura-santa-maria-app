import React, { useState, useEffect } from "react";
import {
  HStack,
  Icon,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineSave } from "react-icons/ai";
import { GiDesk } from "react-icons/gi";
import { IoNewspaper, IoCalendarSharp } from "react-icons/io5";
import { IoIosImages } from "react-icons/io";
import { RiMailSendFill, RiPagesFill, RiFileList3Fill } from "react-icons/ri";
import { ImOffice } from "react-icons/im";
import { useHistory } from "react-router-dom";

export default function MenuApp() {
  const toast = useToast();
  const { push } = useHistory();
  const [route, setRoute] = useState("");

  function goTo(rt) {
    push(rt);
  }

  async function findRoute() {
    const route = await localStorage.getItem("route");
    if (route) {
      setRoute(route);
    } else {
      setRoute("");
    }
  }

  function showToast(message, status, title) {
    toast({
      title: title,
      description: message,
      status: status,
      position: "bottom-right",
      duration: 8000,
      isClosable: true,
    });
  }

  async function saveRoute() {
    await localStorage.setItem("route", route);
    showToast(
      "Rota salva com sucesso, para que as configurações tenham efeito reinicie o sistema",
      "success",
      "Sucesso"
    );
  }

  useEffect(() => {
    findRoute();
  }, []);

  return (
    <>
      <Flex
        h="100%"
        align="center"
        shadow="lg"
        bg="blue.500"
        pr={3}
        pl={3}
        justify="space-between"
      >
        <HStack spacing={3}>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={AiFillHome} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                INÍCIO
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/desks")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={GiDesk} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                GABINETES
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/news")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={IoNewspaper} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                NOTÍCIAS
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/informatives")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={IoIosImages} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                INFORMATIVOS
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/bids")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={RiPagesFill} fontSize="3xl" />
              <Text
                mt={2}
                fontSize="x-small"
                textAlign="center"
                w="90px"
                wordBreak="break-word"
              >
                LICITAÇÕES
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/publications")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={RiMailSendFill} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                PUBLICAÇÕES
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/schedule")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={IoCalendarSharp} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                AGENDA
              </Text>
            </Flex>
          </Button>
          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/secretary")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={ImOffice} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                SECRETARIAS
              </Text>
            </Flex>
          </Button>

          <Button
            h="65px"
            colorScheme="gray"
            variant="solid"
            w="90px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/secretary")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={RiFileList3Fill} fontSize="3xl" />
              <Text mt={2} fontSize="x-small">
                PORTARIAS
              </Text>
            </Flex>
          </Button>
        </HStack>

        <Flex justify="center" direction="column" h="100%" w="24%">
          <FormControl>
            <FormLabel fontSize="sm" mb={0} color="white">
              Conexão com o Servidor:
            </FormLabel>
            <Grid templateColumns="3fr 1fr" gap={3}>
              <Input
                size="sm"
                rounded="md"
                bg="whiteAlpha.900"
                focusBorderColor="green.500"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                w="230px"
              />
              <Button
                colorScheme="green"
                size="sm"
                leftIcon={<AiOutlineSave />}
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                onClick={() => saveRoute()}
              >
                Salvar
              </Button>
            </Grid>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
}
