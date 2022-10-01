import { Dimensions, PixelRatio } from "react-native";

const designScreenHeight = 812;
const designScreenWidth = 375;

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const width = (widthParameter) => {
  const elemWidth =
    typeof widthParameter === "number"
      ? widthParameter
      : parseFloat(widthParameter);

  return PixelRatio.roundToNearestPixel(
    screenWidth * (elemWidth / designScreenWidth)
  );
};

const height = (heightParameter) => {
  const elemHeight =
    typeof heightParameter === "number"
      ? heightParameter
      : parseFloat(heightParameter);

  return PixelRatio.roundToNearestPixel(
    screenHeight * (elemHeight / designScreenHeight)
  );
};

export { height as h, width as w };
