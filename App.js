import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";

export default function App() {
  const handleLinkPress = (link) => {
    Linking.openURL(link);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <View
              style={[
                styles.displayFlex,
                styles.flexRow,
                styles.paddingTop30,
                styles.itemsCenter,
              ]}>
              <View style={[styles.p15]}>
                <Image
                  source={require("./assets/Oval.png")}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View style={styles.textBox}>
                <Text style={[styles.textBold]}>The Octocat</Text>
                <Text
                  onPress={() => handleLinkPress("https://github.com/mehedi494")}
                  style={[styles.colorBlue]}>
                  @octocat
                </Text>
                <Text style={[styles.colorGray]}>Join 25 jan 2011</Text>
              </View>
            </View>
            {/* <StatusBar style="auto" /> */}
          </View>

          <View
            style={[
              styles.paddingHorizontal20,
              styles.paddingTop30,
              styles.displayFlex,
              styles.justifyContent,
            ]}>
            <Text style={[styles.colorGray, styles.lineHeight, styles.font18]}>
              Lorem ipsum, dolor sit amet{" "}
            </Text>
            <Text style={[styles.colorGray, styles.lineHeight, styles.font18]}>
              consectetur adipisicing elit Odio debitis
            </Text>

            <Text style={[styles.colorGray, styles.lineHeight, styles.font18]}>
              laborum praesentium voluptatibus commodi .
            </Text>
          </View>

          <View
            style={[
              styles.bacgroundCyan,

              {
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",

                height: 120,
                margin: 20,
              },
            ]}>
            <View style={[styles.displayFlex, styles.itemsCenter, { gap: 10 }]}>
              <Text style={{ color: "gray", fontWeight: "bold" }}>Repos</Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>8</Text>
            </View>
            <View style={[styles.displayFlex, styles.itemsCenter, { gap: 10 }]}>
              <Text style={{ color: "gray", fontWeight: "bold" }}>
                Followers
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>3843</Text>
            </View>
            <View style={[styles.displayFlex, styles.itemsCenter, { gap: 10 }]}>
              <Text style={{ color: "gray", fontWeight: "bold" }}>
                Following
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>19</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, display: "flex", gap: 10 }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <Image
                style={{ color: "gray" }}
                source={require("./assets/003-pin.png")}
              />
              <Text
                onPress={() =>
                  handleLinkPress("https://en.wikipedia.org/wiki/San_Francisco")
                }
                style={{ color: "#3A547E" }}>
                San Francisco
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <Image source={require("./assets/002-url.png")} />
              <Text
                style={{ color: "#3A547E" }}
                onPress={() =>
                  handleLinkPress(
                    "https://github.com/mehedi494/reactNative-assaignment-01"
                  )
                }>
                https://github.blog
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <Image
                style={{ color: "gray" }}
                source={require("./assets/004-twitter.png")}
              />
              <Text style={{ color: "gray" }}>not available</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <Image
                style={{ color: "gray" }}
                source={require("./assets/001-office-building.png")}
              />
              <Text
                onPress={() =>
                  handleLinkPress(
                    "https://github.com/mehedi494/reactNative-assaignment-01"
                  )
                }
                style={{ color: "#3A547E" }}>
                @github
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container_1: {
    paddingTop: 30,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageBox: {
    padding: 10,
  },
  textBox: {
    display: "flex",
    flex: 1,
    rowGap: 5,
  },

  textBold: {
    fontWeight: "bold",
  },
  colorBlue: {
    color: "#3A547E",
  },
  colorGray: {
    color: "gray",
  },
  displayFlex: {
    display: "flex",
  },
  flexRow: { flexDirection: "row" },
  flexCol: { flexDirection: "column" },
  gap10: {
    gap: 10,
  },
  rowGap5: {
    rowGap: 5,
  },
  p15: {
    padding: 15,
  },
  itemsCenter: {
    alignItems: "center",
  },
  justifyContent: { justifyContent: "center" },
  paddingTop30: {
    paddingTop: 30,
  },
  paddingHorizontal20: { paddingHorizontal: 20 },
  lineHeight: { lineHeight: 25 },

  font18: {
    fontSize: 18,
  },
  bacgroundCyan: { backgroundColor: "#F0F7F6" },
});
