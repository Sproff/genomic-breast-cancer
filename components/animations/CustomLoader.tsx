import { Center, Skeleton, SkeletonText, Text } from "@chakra-ui/react";

const CustomLoader = () => {
	return (
		<Center bg="brand.gold300" h="100vh">
			<Text>Loading...</Text>
		</Center>
	);
};

export { CustomLoader };

export const BoxCardLoader = ({
	rounded = "2.4rem",
	h = "300px",
	mt,
}: {
	rounded: string;
	h?: string | string[];
	mt?: string;
}) => {
	return <Skeleton w="100%" h={h} mt={mt} {...{ rounded }} />;
};

export const TextLoader = ({
	mt,
	noOfLines,
}: {
	mt?: string;
	noOfLines: number;
}) => {
	return (
		<SkeletonText
			startColor="#A0AEC0"
			endColor="#718096"
			w="100%"
			mt={mt}
			noOfLines={noOfLines}
			spacing="4"
			skeletonHeight="4"
			color="brand.gray200"
		/>
	);
};
