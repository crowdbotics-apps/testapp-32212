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
        style={styles.ImageBackground_0_396}
      />
      <View style={styles.View_0_397}>
        <View style={styles.View_0_398}>
          <Text style={styles.Text_0_398}>
            Don’t have an account? Signup here
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f85/e56f/34cb6a43fbd005d8fc9ba3fd22e8cbf3"
          }}
          style={styles.ImageBackground_0_399}
        />
        <View style={styles.View_0_400}>
          <Text style={styles.Text_0_400}>Login</Text>
        </View>
        <View style={styles.View_0_401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f00a/b300/10311a26a1a4a1dd3b9423c9e095261a"
            }}
            style={styles.ImageBackground_0_404}
          />
          <View style={styles.View_0_406}>
            <Text style={styles.Text_0_406}>sarbjit399@dribbble.com</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5655/c88a/0b68d1e59c915df635cc77cc2ca071f1"
            }}
            style={styles.ImageBackground_0_407}
          />
        </View>
        <View style={styles.View_0_408}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab0/8854/5b8c2507b8197a761d0ddaca75da0a31"
            }}
            style={styles.ImageBackground_0_409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc8/5c48/dc632e4d866d52724ac4fc4d85976a6c"
            }}
            style={styles.ImageBackground_0_410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d8/c8e0/38bb39061df0f185c4f614bd8c2da363"
            }}
            style={styles.ImageBackground_0_421}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/e0c3/6176aaba0f8afde26552a2917610d348"
          }}
          style={styles.ImageBackground_0_426}
        />
        <View style={styles.View_0_428}>
          <Text style={styles.Text_0_428}>Remember me</Text>
        </View>
        <View style={styles.View_0_429}>
          <Text style={styles.Text_0_429}>Forgot password?</Text>
        </View>
        <View style={styles.View_0_430}>
          <Text style={styles.Text_0_430}>Facio</Text>
        </View>
      </View>
      <View style={styles.View_0_431}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c5/c815/40eecd58aa737f5bfda345c01593e900"
          }}
          style={styles.ImageBackground_0_432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1c/cd75/b1708d55a875b160c1d97e02af309d7b"
          }}
          style={styles.ImageBackground_0_439}
        />
        <View style={styles.View_0_441}>
          <Text style={styles.Text_0_441}>9:41</Text>
        </View>
        <View style={styles.View_0_442}>
          <View style={styles.View_0_447}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_445}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_446}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8778/7931/e105f7ff1edbc7ff434855ae0a6a565c"
            }}
            style={styles.ImageBackground_0_448}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6b/2b7e/578072fc3d8fcaa768e6eb1262579e99"
        }}
        style={styles.ImageBackground_0_449}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_396: {
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
  View_0_397: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("163%"),
    minHeight: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("76%")
  },
  View_0_398: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("153%"),
    justifyContent: "center"
  },
  Text_0_398: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_399: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("119%")
  },
  View_0_400: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("128%"),
    justifyContent: "flex-end"
  },
  Text_0_400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.022853970527649,
    textTransform: "uppercase"
  },
  View_0_401: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  ImageBackground_0_404: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_406: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_0_406: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 40.03715133666992,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_407: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_0_408: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%")
  },
  ImageBackground_0_409: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_0_410: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("4%")
  },
  ImageBackground_0_421: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_0_426: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%")
  },
  View_0_428: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("101%"),
    justifyContent: "flex-end"
  },
  Text_0_428: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 40.03098678588867,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_429: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("101%"),
    justifyContent: "flex-end"
  },
  Text_0_429: {
    color: "rgba(40, 216, 161, 1)",
    fontSize: 40.03098678588867,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_430: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_0_430: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 120.06108093261719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.394802451133728,
    textTransform: "uppercase"
  },
  View_0_431: {
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
  ImageBackground_0_432: {
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
  ImageBackground_0_439: {
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
  View_0_441: {
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
  Text_0_441: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_442: {
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
  View_0_447: {
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
  ImageBackground_0_445: {
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
  ImageBackground_0_446: {
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
  ImageBackground_0_448: {
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
  ImageBackground_0_449: {
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
