import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Tasks from "./components/Tasks";

const App = () => {

    return (
        <ChakraProvider>
            <NavBar />
            <Tasks />
        </ChakraProvider>
    )
}

export default App;