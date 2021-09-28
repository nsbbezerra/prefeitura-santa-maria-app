import React, { useState } from "react";
import {
  Center,
  Text,
  Button,
  Divider,
  Input,
  AspectRatio,
  Grid,
  Box,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import {
  AiFillSave,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

export default function Videos() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  return (
    <>
      <Center rounded="md" bg="green.500" p={1} shadow="md">
        <Text color="white" fontWeight="bold" fontSize="lg">
          VIDEOS
        </Text>
      </Center>

      <Grid templateColumns="3fr 1fr" gap={5} mt={10}>
        <Box>
          <FormControl>
            <FormLabel>URL do Vídeo</FormLabel>
            <Input placeholder="URL do Vídeo" />
          </FormControl>

          <Button
            leftIcon={<AiFillSave />}
            colorScheme="blue"
            mt={5}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Salvar
          </Button>
        </Box>

        <AspectRatio maxW="100%" ratio={16 / 9} rounded="md" overflow="hidden">
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Grid>

      <Divider mt={5} mb={5} />

      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        <AspectRatio maxW="100%" ratio={16 / 9} rounded="md" overflow="hidden">
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="100%" ratio={16 / 9} rounded="md" overflow="hidden">
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="100%" ratio={16 / 9} rounded="md" overflow="hidden">
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="100%" ratio={16 / 9} rounded="md" overflow="hidden">
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Grid>

      <Flex align="center" justify="center" mt={10}>
        <Button
          size="sm"
          colorScheme="blue"
          leftIcon={<AiOutlineArrowLeft />}
          _hover={{ transform: "scale(1.05)" }}
          _active={{ transform: "scale(1)" }}
          isDisabled={page <= page}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </Button>
        <Input
          size="sm"
          value={page}
          w="50px"
          rounded="md"
          isReadOnly
          mr={2}
          ml={2}
        />
        <Text fontSize="sm">de</Text>
        <Input
          size="sm"
          value={pages}
          w="50px"
          rounded="md"
          isReadOnly
          ml={2}
          mr={2}
        />
        <Button
          size="sm"
          colorScheme="blue"
          rightIcon={<AiOutlineArrowRight />}
          _hover={{ transform: "scale(1.05)" }}
          _active={{ transform: "scale(1)" }}
          isDisabled={page >= pages}
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </Button>
      </Flex>
    </>
  );
}
