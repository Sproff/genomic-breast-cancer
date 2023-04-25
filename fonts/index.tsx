import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: "Circular Std";
        font-weight: 900;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/CircularStd-Black.otf") format("opentype")
      }

      @font-face {
        font-family: "Circular Std";
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/CircularStd-Bold.otf") format("opentype")
      }

      @font-face {
        font-family: "Circular Std";
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/CircularStd-Book.otf") format("opentype")
      }

      @font-face {
        font-family: "Circular Std";
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/CircularStd-Medium.otf") format("opentype")
      }

      @font-face {
        font-family: "Circular Std";
        font-weight: 300;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/CircularStd-Light.otf") format("opentype")
      }
      `}
	/>
);

export { Fonts };
