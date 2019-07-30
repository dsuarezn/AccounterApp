import { PixelRatio } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const navIconSize = __DEV__ === false && Platform.OS === "android" ? PixelRatio.getPixelSizeForLayoutSize(40) : 40;
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = { 
  "trending-up":[30],
  "menu": [30],
  "work": [30],
  "work_outline":[30], 
  "date-range":[30],
  "account-circle":[30],
  "notifications-active":[30],
  "whatshot":[30],
  "calendar":[30],
  "work-outline":[30],
  "calendar_today":[30],
  "calendar-today":[30],
  "arrow-back":[30]
};


const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  Promise.all(
    Object.keys(icons).map(iconName =>
      // IconName--suffix--other-suffix is just the mapping name in iconsMap
      MaterialIcons.getImageSource(iconName.replace(replaceSuffixPattern, ""), icons[iconName][0], icons[iconName][1])
    )
  ).then(sources => {
    Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };