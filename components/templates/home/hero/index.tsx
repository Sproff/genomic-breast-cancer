import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomButton } from "@components/ui/button/Button";
import Link from "next/link";

const Hero = () => {
	return (
		<Box
			bgImage="linear-gradient(180deg, rgb(11 11 15)  10.88%,  rgba(11, 11, 15, 0.9)  44.5%, rgb(11 11 15)   100%), url('/assets/images/hero_bg.png')"
			bgRepeat="no-repeat"
			bgPos="top"
			bgSize="cover"
		>
			<Flex
				flexDir="column"
				align="flex-start"
				justify="center"
				h={["100vh", "100vh", "60vh", "80vh", "100vh"]}
				maxW="1200px"
				mx="auto"
				pl="2rem"
			>
				<Box w="100%">
					<Box w={["100%", "80%", "100%", "80%", "55%"]}>
						<Text fontSize={["1.5rem"]} fontWeight="600" color="brand.gray100">
							GENOMIC DATA VISUALIZATION
						</Text>
						<Box
							mt={["-1rem", "-2rem", "-2rem"]}
							fontWeight="700"
							letterSpacing=".2rem"
						>
							<Text
								color="brand.white100"
								fontSize={["2.8rem", "4.6rem", "4.6rem"]}
								py="2rem"
							>
								Transform your raw data with our state-of-the-art tool
							</Text>

							<Text color="brand.gray100" fontSize={["2rem"]}>
								Create compelling visuals that will captivate your audience.
							</Text>
						</Box>
					</Box>

					<Flex
						justify="space-between"
						fontSize="1.5rem"
						fontWeight="500"
						mt="2rem"
						w={["70%", "35%", "39%", "29%", "25%"]}
					>
						<Box _hover={{ textDecoration: "none" }}>
							<Link href="/explore">
								<CustomButton
									{...{
										text: "Explore Genomic Data",
										bg: "brand.gray100",
										color: "brand.white100",
										border: "1px solid",
										borderColor: "brand.gray100",
										px: "3rem",
										bgHover: "transparent",
										colorHover: "brand.white100",
									}}
								/>
							</Link>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export { Hero };
