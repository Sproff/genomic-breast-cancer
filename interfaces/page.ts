import { IconType } from "react-icons";

export interface IProps {
	children: React.ReactNode;
}

export interface FeaturesProps {
	icon: IconType;
	name: string;
	desc: string;
}

export interface BreastCancerDataProps {
	_id: string;
	commonName: string;
	description: string;
	geneId: string;
	orientation: string;
	symbol: string;
	taxId: string;
	taxname: string;
	type: string;
}
