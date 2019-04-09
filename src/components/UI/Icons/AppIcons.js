import { PixelRatio } from "react-native";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";

const navIconSize = __DEV__ === false && Platform.OS === "android" ? PixelRatio.getPixelSizeForLayoutSize(40) : 40;
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  "bars": [30],
  "search": [30],
  "chart-line": [30],
  "building": [30],
  "calendar-alt": [30],
  "bullhorn": [30],
  "plus-square" : [30],
  "plus": [30],
  "arrow-left" :[30],
  "pen":[30],
  "trash":[30]
};


const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  Promise.all(
    Object.keys(icons).map(iconName =>
      // IconName--suffix--other-suffix is just the mapping name in iconsMap
      FontAwesome5Icons.getImageSource(iconName.replace(replaceSuffixPattern, ""), icons[iconName][0], icons[iconName][1])
    )
  ).then(sources => {
    Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };