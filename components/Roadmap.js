import React from "react";
import { Box, Flex, Heading, Card, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { ROADMAP } from "messages";

const Roadmap = () => {
  const { colors } = useTheme();
  return (
    <Box marginTop={[5]} py={[5]}>
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["row"]}
        justifyContent="space-between"
      >
        <Flex flexBasis="40%" sx={{ position: "relative" }}>
          <Card
            width={[256, 340]}
            mx="auto"
            sx={{
              overflow: "hidden",
              borderRadius: "12px",
            }}
            ml={[0]}
          >
            <Box sx={{ position: "relative" }} height="300px">
              <Image
                src="/dolphin_04.png"
                //   width="300px"
                //   height="400px"
                layout="fill"
                quality={70}
              />
            </Box>
            <Box backgroundColor={colors.dark1} p={[4]}>
              <Heading fontSize={[5]} fontWeight={400} mb={[3]}>
                Panther Dolphin
              </Heading>
              <Flex alignItems="center">
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src="/avatar.jpg"
                    width="40px"
                    height="40px"
                    quality={70}
                  />
                </Box>
                <Heading fontSize={[3]} ml={[3]} fontWeight={400}>
                  Sweep Dawg
                </Heading>
              </Flex>
            </Box>
            <Box backgroundColor={colors.dark2} px={[4]} py={[4]}>
              <Heading fontSize={[4]} fontWeight={400} color={colors.light1}>
                Original
              </Heading>
              <Heading fontSize={[4]} fontWeight={400} mt={[2]}>
                Created September 2021
              </Heading>
            </Box>
          </Card>
        </Flex>
        <Flex flexBasis={["50%"]} flexDirection="column">
          <Heading fontSize={[6]} fontWeight={[700]} marginBottom={[3]}>
            Insanely low fees
          </Heading>
          <Heading fontSize={[5]} fontWeight={[400]} color={colors.light1}>
            With an average transaction fee of less than a dollar, and instant
            reveal, Dolphins are shifting the balance of power back to NFT
            enthusiasts.
          </Heading>
          <Flex mt={[5]}>
            {ROADMAP.map((step) => (
              <Flex flexDirection="column" p={[2]}>
                <Text fontSize={2}>{step.what}</Text>
                <Heading fontSize={[4]} mt={[3]}>
                  {step.when}%
                </Heading>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Roadmap;
