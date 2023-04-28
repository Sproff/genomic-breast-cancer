import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { TableLoader } from "@components/templates/loader/TableLoader";
import { Input } from "@components/ui/forms/Input";
import {
	useGetAllBreastCancers,
	useGetSingleBreastCancer,
} from "@hooks/breastCancers/useBreastCancer";
import { useDebounce } from "@hooks/debounce/useDebounce";
import { BreastCancerDataProps } from "@interfaces/page";
import { IGenomicProps } from "@interfaces/tableDefinitions";
import { CustomTableLayout } from "@layouts/TableLayout";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";

const Hero = () => {
	const [inputSearch, setInputSearch] = useState("");
	const timedValue = useDebounce(inputSearch, 1000);
	const { data: breastCancerData, isLoading: breastCancerIsLoading } =
		useGetAllBreastCancers();

	const {
		data: singleBreastCancerData,
		isLoading: singleBreastCancerIsLoading,
	} = useGetSingleBreastCancer({
		q: `${timedValue}`,
	});

	const genomicColumn: ColumnDef<IGenomicProps>[] = [
		{
			accessorKey: "commonName",
			size: 10,

			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text textTransform="capitalize">
							{getValue() as unknown as string}
						</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "description",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text textTransform="capitalize">
							{getValue() as unknown as string}
						</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "geneId",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "orientation",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text textTransform="capitalize">
							{getValue() as unknown as string}
						</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "symbol",
			size: 10,

			cell: (info) => info.getValue(),
		},
		{
			accessorKey: "taxId",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "taxname",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "type",
			size: 1,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "action",
			size: 5,
			cell: ({ row }) => {
				return (
					<Link href={`/explore/${row?.original?.id}`}>
						<Center>
							<Icon
								cursor="pointer"
								color="brand.gray100"
								fontSize="2.1rem"
								as={AiFillEye}
								_hover={{ color: "brand.dark100" }}
							/>
						</Center>
					</Link>
				);
			},
		},
	];

	const tableData = useMemo(() => {
		return (
			breastCancerData && singleBreastCancerData
		)?.data?.breastCancers?.map((item: BreastCancerDataProps) => ({
			id: item._id,
			commonName: item.commonName,
			description: item.description,
			geneId: item.geneId,
			orientation: item.orientation,
			symbol: item.symbol,
			taxId: item.taxId,
			taxname: item.taxname,
			type: item.type,
		}));
	}, [breastCancerData, singleBreastCancerData]);

	return (
		<Box
			bgImage="linear-gradient(180deg, rgb(11 11 15)  10.88%,  rgba(11, 11, 15, 0.9)  44.5%, rgb(11 11 15)   100%), url('/assets/images/hero_bg.png')"
			bgRepeat="no-repeat"
			bgPos="top"
			bgSize="cover"
		>
			<Box
				maxW="1200px"
				mx="auto"
				px="2rem"
				pt={["10rem", "10rem", "15rem", "15rem"]}
				pb="2rem"
				h={["auto", "50vh", "50vh", "50vh", "50vh"]}
			>
				<Box
					mt={["-1rem", "-2rem", "-2rem"]}
					fontWeight="700"
					letterSpacing=".2rem"
				>
					<Text
						color="brand.white100"
						fontSize={["2rem", "2.5rem", "2.5rem", "3rem"]}
						py="2rem"
						textAlign="center"
					>
						Explore diverse genomic datasets to identify potential biomarkers
						and treatment targets
					</Text>
					<Input
						id="text"
						border="1px solid"
						onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
					/>
					<Text
						fontSize="1rem"
						color="brand.gray100"
						mx="auto"
						w={["100%", "100%", "90%", "70%"]}
						mt=".5rem"
					>
						Note: You can search based on either commonName, geneId,
						orientation, symbol, taxId, taxname, type
					</Text>
				</Box>
			</Box>
			<Box bg="brand.white300">
				<Box maxW="1200px" mx="auto" px="2rem" py="2rem">
					{breastCancerIsLoading || singleBreastCancerIsLoading ? (
						<TableLoader />
					) : (
						<Fragment>
							{breastCancerData?.data?.breastCancers?.length !== 0 ? (
								<CustomTableLayout
									{...{ columns: genomicColumn, data: tableData }}
								/>
							) : (
								<Center>
									<Text>No data available, Check back later!</Text>
								</Center>
							)}
						</Fragment>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export { Hero };
