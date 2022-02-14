import React from "react";
import { Flex, Box, Text, List, ListItem } from "@chakra-ui/layout";
import { CalendarIcon } from "@chakra-ui/icons";

const Tasks = () => {

    return (
        <Flex>
            <Box border = "1px solid #000" borderRadius = "10px" margin = "10px">
                <Text marginLeft = "2vw" fontSize = "5xl" marginRight = "10px"> 
                    <h1> Your Task's <CalendarIcon w = {8}/> : </h1>
                    <List spacing = {3}>
                        <ListItem> Hello</ListItem>
                    </List>
                </Text>
            </Box>
        </Flex>
    )
}

export default Tasks;