import { AxiosInstance } from "../config";

export const getAllBreastCancers = async () => {
	const { data } = await AxiosInstance.get("/breast-cancers");
	return data;
};

export const getSingleBreastCancer = async ({
	queryFilters,
}: {
	queryFilters?: string;
}) => {
	const { data } = await AxiosInstance.get(
		`/breast-cancers/search${queryFilters}`
	);
	return data;
};
