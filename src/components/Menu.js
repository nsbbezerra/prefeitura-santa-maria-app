import React, { useState } from "react";
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
  Tag,
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineSave } from "react-icons/ai";
import { GiDesk, GiServerRack } from "react-icons/gi";
import { IoNewspaper, IoCalendarSharp } from "react-icons/io5";
import { IoIosImages } from "react-icons/io";
import { RiMailSendFill, RiPagesFill } from "react-icons/ri";
import { ImOffice } from "react-icons/im";
import { useHistory } from "react-router-dom";

export default function MenuApp() {
  const { push } = useHistory();
  const [route, setRoute] = useState("http://localhost:3333");

  function goTo(rt) {
    push(rt);
  }

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
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={AiFillHome} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                INÍCIO
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/desks")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={GiDesk} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                GABINETES
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={IoNewspaper} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                NOTÍCIAS
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/informatives")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={IoIosImages} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                INFORMATIVOS
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/bids")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={RiPagesFill} fontSize="3xl" />
              <Text
                mt={2}
                fontSize="xs"
                textAlign="center"
                w="90px"
                wordBreak="break-word"
              >
                LICITAÇÕES
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            onClick={() => goTo("/publications")}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={RiMailSendFill} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                PUBLICAÇÕES
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={IoCalendarSharp} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                AGENDA
              </Text>
            </Flex>
          </Button>
          <Button
            h="70px"
            colorScheme="gray"
            variant="solid"
            w="100px"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            <Flex justify="center" align="center" direction="column">
              <Icon as={ImOffice} fontSize="3xl" />
              <Text mt={2} fontSize="xs">
                SECRETARIAS
              </Text>
            </Flex>
          </Button>
        </HStack>

        <Flex justify="center" direction="column" h="100%" w="28%">
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
              />
              <Button
                colorScheme="green"
                size="sm"
                leftIcon={<AiOutlineSave />}
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
              >
                Salvar
              </Button>
            </Grid>
          </FormControl>
          <HStack mt={3}>
            <Icon as={GiServerRack} color="white" />
            <Text fontSize="sm" color="white">
              Status do Servidor:
            </Text>
            <Tag colorScheme="green" size="sm">
              ONLINE
            </Tag>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
