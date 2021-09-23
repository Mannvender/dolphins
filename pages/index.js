import React from "react";
import { Box, Flex } from "rebass";
import { useTheme } from "styled-components";

import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Quote from "components/Quote";
import Mint from "components/Mint";
import { MINT_DATE, DATE_OPTIONS } from "messages";

const Index = () => {
  const { colors } = useTheme();
  return (
    <>
      <Box position="relative">
        <Box backgroundColor={colors.primary}>
          <Flex
            maxWidth={["1024px"]}
            margin={["0 auto"]}
            flexDirection={["column"]}
          >
            <Header />
            <Banner />
          </Flex>
          <Quote />
          <Mint date={MINT_DATE} dateOptions={DATE_OPTIONS} />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Index;
