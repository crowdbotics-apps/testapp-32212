import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/492f/b684/3d9477f8ac5492225f23e2579814462b"
        }}
        style={styles.ImageBackground_0_356}
      />
      <View style={styles.View_0_357}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f85/e56f/34cb6a43fbd005d8fc9ba3fd22e8cbf3"
          }}
          style={styles.ImageBackground_0_358}
        />
        <View style={styles.View_0_359}>
          <Text style={styles.Text_0_359}>Verify Email</Text>
        </View>
        <View style={styles.View_0_360}>
          <Text style={styles.Text_0_360}>
            Questions? Email us at contact@facio.com
          </Text>
        </View>
        <View style={styles.View_0_361}>
          <Text style={styles.Text_0_361}>
            Hi Saby! Please use the link below to verify  your email and start
            using FACIO.
          </Text>
        </View>
        <View style={styles.View_0_362}>
          <Text style={styles.Text_0_362}>Facio</Text>
        </View>
        <View style={styles.View_0_363}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2622/6cd1/d414e6037c8f1878130e005e6f977394"
            }}
            style={styles.ImageBackground_0_364}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/949a/4c89/b35fbbf1264ef454297e4c8f40893b1f"
            }}
            style={styles.ImageBackground_0_365}
          />
          <View style={styles.View_0_366}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a004/e194/0556b6ae7cf5b766fdb489547273f7cd"
              }}
              style={styles.ImageBackground_0_369}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9758/d08f/31c6f6be9d5256030b2f5ae8fa8a73dc"
            }}
            style={styles.ImageBackground_0_370}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4e8/8d90/e7f92c6d9fd492e446e0736608c35cea"
            }}
            style={styles.ImageBackground_0_371}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6624/8d47/13556a25db4e4f875319c372b79feec4"
            }}
            style={styles.ImageBackground_0_372}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b00/873c/bc24557373e9597126f92aae382eb676"
            }}
            style={styles.ImageBackground_0_373}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba07/3b25/601c5c900b50cccefcd741514bdd33fa"
            }}
            style={styles.ImageBackground_0_374}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8349/0221/baa35cd3c72748f07e166dc7735fcc30"
            }}
            style={styles.ImageBackground_0_375}
          />
        </View>
      </View>
      <View style={styles.View_0_376}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c5/c815/40eecd58aa737f5bfda345c01593e900"
          }}
          style={styles.ImageBackground_0_377}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1c/cd75/b1708d55a875b160c1d97e02af309d7b"
          }}
          style={styles.ImageBackground_0_384}
        />
        <View style={styles.View_0_386}>
          <Text style={styles.Text_0_386}>9:41</Text>
        </View>
        <View style={styles.View_0_387}>
          <View style={styles.View_0_392}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_391}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8778/7931/e105f7ff1edbc7ff434855ae0a6a565c"
            }}
            style={styles.ImageBackground_0_393}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6b/2b7e/578072fc3d8fcaa768e6eb1262579e99"
        }}
        style={styles.ImageBackground_0_394}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_357: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("183%"),
    minHeight: hp("183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("70%")
  },
  ImageBackground_0_358: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("139%")
  },
  View_0_359: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("148%"),
    justifyContent: "flex-end"
  },
  Text_0_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.022853970527649,
    textTransform: "uppercase"
  },
  View_0_360: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("173%"),
    justifyContent: "center"
  },
  Text_0_360: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_361: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("109%"),
    justifyContent: "center"
  },
  Text_0_361: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_362: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("82%"),
    justifyContent: "flex-end"
  },
  Text_0_362: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 120.06108093261719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.394802451133728,
    textTransform: "uppercase"
  },
  View_0_363: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  ImageBackground_0_364: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_0_365: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("12%")
  },
  View_0_366: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%")
  },
  ImageBackground_0_369: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_370: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("10%")
  },
  ImageBackground_0_371: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%")
  },
  ImageBackground_0_372: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("15%")
  },
  ImageBackground_0_373: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("30%")
  },
  ImageBackground_0_374: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%")
  },
  ImageBackground_0_375: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("6%")
  },
  View_0_376: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%")
  },
  ImageBackground_0_377: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  ImageBackground_0_384: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%")
  },
  View_0_386: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_0_386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_387: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  View_0_392: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_390: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_391: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_393: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_394: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("326%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
