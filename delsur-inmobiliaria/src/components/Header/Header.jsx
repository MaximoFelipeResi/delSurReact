import React from 'react'
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Container, Menu, MenuButton,MenuList, MenuItem, Button, Avatar } from "@chakra-ui/react";

import "../Header/header.css"

const Header = () => {
  
  return (
    <>
      <Container className="nav-bar" maxW="150rem" bg="white" color="#262626">
        <Flex alignItems="center" gap="2">
        <Link to={"/"}>
          <Avatar
            size="x2"
            src="../src/assets/images/logo.png"
          />
          </Link>
          <Spacer />
          <Box>

          <Menu>
              <Link to={"/"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Inicio
                </MenuButton>
              </Link>
            </Menu>

          <Menu>
              <Link to={"propiedades"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Propiedades
                </MenuButton>
              </Link>
            </Menu>

            <Menu>
              <Link to={"tasaciones"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Tasaciones
                </MenuButton>
              </Link>
            </Menu>

            <Menu>
              <Link to={"nosotros"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Nosotros
                </MenuButton>
              </Link>
            </Menu>

            <Menu>
              <Link to={"contacto"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Contacto
                </MenuButton>
              </Link>
            </Menu>
            
          </Box>
          <Spacer />
        </Flex>
      </Container>
    </>
  )
}

export default Header;