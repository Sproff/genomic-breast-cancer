import {
	getAllBreastCancers,
	getSingleBreastCancer,
} from "@queries/breastCancer";
import { useQuery } from "@tanstack/react-query";
import { createQueryFilterStrings } from "@utils/helpers";

export const useGetAllBreastCancers = () => {
	return useQuery({
		queryKey: ["getAllBreastCancers"],
		queryFn: () => getAllBreastCancers(),
		retry: 2,
	});
};

export const useGetSingleBreastCancer = (filter?: Record<string, string>) => {
	const queryFilters = encodeURI(createQueryFilterStrings(filter));
	return useQuery({
		queryKey: ["getSingleBreatCancer", queryFilters],
		queryFn: () => getSingleBreastCancer({ queryFilters }),
		retry: 2,
		enabled: queryFilters !== "",
	});
};
