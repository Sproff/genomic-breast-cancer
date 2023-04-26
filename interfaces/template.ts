import { CSSProperties } from "react";

export interface ButtonProps {
	text: string;
	bg: string;
	color: string;
	border?: string;
	borderRadius?: string;
	borderColor?: string;
	px: string | string[];
	py?: string;
	w?: string | string[];
	fontSize?: string;
	bgHover: string;
	colorHover?: string;
	isDisabled?: boolean;
	onClick?: () => void;
}

export interface FormValues {
	fullname: string;
	desc: string;
}

export interface InputProps {
	id: string;
	placeholder: string;
	type?: string;
	value?: string | number;
	leftAddon?: React.ReactChild;
	leftElement?: React.ReactElement;
	errorMessage: string | undefined | any;
	style?: CSSProperties;
	accept?: string;
	ref?: React.RefObject<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	multiple?: boolean;
	color?: string;
	placeholderColor?: string;
	bg?: string;
	border?: string;
	// formHook: UseFormRegisterReturn;
	isDisabled?: boolean;
	isTypePhone?: boolean;
}
