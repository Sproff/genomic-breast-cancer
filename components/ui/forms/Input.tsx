import {
	Box,
	Input as CInput,
	Textarea as CTextarea,
	InputGroup,
	Stack,
	Text,
	InputLeftAddon,
	InputLeftElement,
} from "@chakra-ui/react";
import { InputProps } from "@interfaces/template";

export const Input = ({
	placeholder,
	type = "text",
	leftAddon,
	leftElement,
	errorMessage,
	value,
	style,
	accept,
	onChange,
	multiple,
	color,
	placeholderColor,
	bg,
	border,
	// formHook,
	id,
	isTypePhone = false,
	isDisabled = false,
}: InputProps) => {
	return (
		<Stack spacing=".3rem" w="full" style={style} align="flex-start">
			<InputGroup>
				{leftAddon ? (
					<InputLeftAddon cursor="pointer">{leftAddon}</InputLeftAddon>
				) : null}
				{leftElement ? (
					<InputLeftElement cursor="pointer">{leftElement}</InputLeftElement>
				) : null}
				<CInput
					cursor={type === "file" ? "pointer" : "auto"}
					id={id}
					defaultValue={value}
					placeholder={placeholder}
					type={type}
					accept={accept}
					multiple={multiple}
					bg={bg || ""}
					color={color || "brand.gray200"}
					border={border || "none"}
					borderColor="brand.white600"
					borderRadius=".6rem"
					fontSize="1.6rem"
					fontWeight="400"
					py="2.3rem"
					isDisabled={isDisabled}
					_focus={{
						borderColor: "brand.gold100",
					}}
					_focusVisible={{
						boxShadow: "none",
					}}
					_placeholder={{
						color: placeholderColor || "brand.gray200",
					}}
					{...(type === "phone" || isTypePhone
						? {
								ml: "1rem",
								borderLeftRadius: "0.4rem !important",
						  }
						: null)}
					// {...{ ...formHook, onChange }}
					{...{ onChange }}
				/>
			</InputGroup>
			<ErrorMessage message={errorMessage} />
		</Stack>
	);
};

export const ErrorMessage = ({ message }: { message: string | undefined }) => (
	<Text
		color="brand.red100"
		fontSize="1.1rem"
		minH="1.1rem"
		textAlign="left"
		fontWeight="400"
	>
		{message}
	</Text>
);

export const CustomTextarea = ({
	placeholder,
	placeholderColor,
	color,
	errorMessage,
	// formHook,
	value,
	id,
	style,
	isDisabled = false,
}: InputProps) => {
	return (
		<Box w="100%" style={style}>
			<CTextarea
				id={id}
				w="100%"
				h="100%"
				rows={5}
				defaultValue={value}
				variant="grey"
				py="2rem"
				fontSize="1.6rem"
				fontWeight="400"
				placeholder={placeholder}
				color={color ?? "brand.gray200"}
				border="1px solid"
				borderColor="brand.white600"
				borderRadius=".6rem"
				resize="none"
				isDisabled={isDisabled}
				_focus={{
					borderColor: "brand.gold100",
				}}
				_focusVisible={{
					boxShadow: "none",
				}}
				_placeholder={{
					color: placeholderColor ?? "brand.gray200",
				}}
				// {...formHook}
			/>
			<Text
				color="brand.red100"
				fontSize="1.1rem"
				textAlign="left"
				fontWeight="400"
			>
				{errorMessage}
			</Text>
		</Box>
	);
};
