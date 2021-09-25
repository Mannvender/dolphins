import React from "react";
import { Box, Flex, Heading } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";

const Banner = (props) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="row"
      paddingTop={["76px"]}
      justifyContent="space-between"
    >
      <Flex flexBasis={["50%"]} flexDirection="column">
        <Heading fontSize={[7]} fontWeight={[700]} marginBottom={[3]}>
          Your own Dashing NFT
        </Heading>
        <Heading fontSize={[5]} fontWeight={[400]} color={colors.light1}>
          500 Diver Dolphins are having fun on the solana beach, splashing in
          the summer, surfing on the waves. Join them as they mint on Sunday or
          another fun day, we'll let you know
        </Heading>
      </Flex>
      <Flex flexBasis="40%" sx={{ position: "relative" }}>
        <Image
          layout="fill"
          src={`/dolphin_01.png`}
          alt={`rare dolphin`}
          quality="70"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
