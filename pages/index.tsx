import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "@layouts/MainLayout";
import { About, Features, Hero } from "@components/templates/home";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>
					Genomic Breast Cancer | Study the genomics of breast cancer.
				</title>
				<meta
					name="description"
					content="Genomic Breast Cancer | Study the genomics of breast cancer. Explore diverse genomic datasets to identify potential biomarkers and treatment targets. Regularly updated."
				/>
			</Head>

			<MainLayout>
				<Hero />
				<Features />
				<About />
			</MainLayout>
		</Box>
	);
};

export default Home;
