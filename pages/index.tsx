import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
	return (
		<Box>
			<Head>
				<title>
					{" "}
					Genomic Breast Cancer | Study the genomics of breast cancer.
				</title>
				<meta
					name="description"
					content="Genomic Breast Cancer | Study the genomics of breast cancer. Explore diverse genomic datasets to identify potential biomarkers and treatment targets. Regularly updated."
				/>
			</Head>
		</Box>
	);
};

export default Home;
