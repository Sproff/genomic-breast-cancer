import { extendTheme } from "@chakra-ui/react";
import { customColors as colors } from "@styles/themes/foundation/colors";
import { customFonts as fonts } from "@styles/themes/foundation/fonts";
import { globalStyles as styles } from "@styles/themes/global";

const customTheme = extendTheme({
	colors,
	fonts,
	styles,
});

export { customTheme };
