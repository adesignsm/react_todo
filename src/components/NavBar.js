import React from "react";
import { Flex, Box, Spacer, Text } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";

const NavBar = () => {

    return (
        <Flex maxWidth = "100%" flexWrap = "wrap">
            <Box w = "100%" h = "100px" bg = "blue">
                <Text marginLeft = "10px" fontSize = "6xl" color = "#fff"> ToDo.
                <AddIcon cursor = "pointer" marginTop = "30px" marginRight = "2vw" float = "right" w = {10} h = {10} color = "#fff"/>
                </Text>
                <Spacer />
            </Box>
        </Flex>
    )
}

export default NavBar;