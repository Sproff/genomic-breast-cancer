import { IconType } from "react-icons";

export interface IProps {
	children: React.ReactNode;
}

export interface FeaturesProps {
	icon: IconType;
	name: string;
	desc: string;
}
