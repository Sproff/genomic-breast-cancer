import { Box, HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const TableLoader = () => {
	return (
		<Box bg="brand.white100">
			<HStack w="full" mb="2rem">
				{[1, 2, 3, 4, 5].map((idx) => (
					<Box w="20%}" key={idx}>
						<SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="7" />
					</Box>
				))}
			</HStack>
			<Stack>
				{[1, 2, 3, 4, 5, 6].map((idx) => (
					<Box w="full" key={idx}>
						<Skeleton height="7rem" />
					</Box>
				))}
			</Stack>
		</Box>
	);
};

export { TableLoader };
