import { Box, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<Box bg="brand.white300" id="about">
			<Box maxW="1200px" mx="auto" py="8rem" px="2rem">
				<Text
					textAlign="center"
					fontSize="2.5rem"
					fontWeight="800"
					color="brand.gray100"
					letterSpacing=".05rem"
				>
					About
				</Text>

				<Box mt="5rem">
					<Text fontSize={["1.6rem", "1.6rem", "1.7rem"]}>
						Genomic data visualization is the process of creating visual
						representations of genomic data, such as DNA sequences, genetic
						mutations, and gene expression patterns. This approach allows
						researchers and clinicians to gain insights into complex genomic
						data sets quickly and easily, enabling them to identify patterns,
						relationships, and trends that may be difficult to discern from raw
						data alone.
						<br />
						<br />
						By transforming complex genomic data into compelling visual stories,
						data visualization tools can aid in the interpretation and
						communication of genomic information to a wide range of audiences,
						including clinicians, researchers, and patients. Moreover, effective
						genomic data visualization can facilitate the discovery of new
						biological insights and the development of novel treatments for
						genetic diseases.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export { About };
