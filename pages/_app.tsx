import { ChakraProvider } from "@chakra-ui/react";
import { CustomLoader } from "@components/animations/CustomLoader";
import "@styles/globals.css";
import { customTheme } from "@styles/themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<title>Genomic data visualization</title>
				<meta
					name="description"
					content="Genomic data visualization | Creating visual representations of genomic data, such as DNA sequences, genetic mutations, and gene expression patterns. Explore diverse genomic datasets to identify potential biomarkers and treatment targets. Regularly updated."
				/>
				<meta name="robots" content="all" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			{loading ? <CustomLoader /> : <Component {...pageProps} />}
		</ChakraProvider>
	);
};

export default App;
