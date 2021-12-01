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
      <View style={styles.View_0_295}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f1e/6406/9e3b9b45885074b41d089c8d902f7cf1"
          }}
          style={styles.ImageBackground_0_297}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7599/a9fb/a6117bc95c8d88f09664fd7eda1dc58d"
          }}
          style={styles.ImageBackground_0_296}
        />
        <View style={styles.View_0_301}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0c/d1e3/2f3b969a482abf9fa3b74f8e915f3818"
            }}
            style={styles.ImageBackground_0_298}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0c/d1e3/2f3b969a482abf9fa3b74f8e915f3818"
            }}
            style={styles.ImageBackground_0_299}
          />
          <View style={styles.View_0_300} />
        </View>
      </View>
      <View style={styles.View_0_302}>
        <Text style={styles.Text_0_302}>
          Don’t have an account? Signup here
        </Text>
      </View>
      <View style={styles.View_0_303}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f85/e56f/34cb6a43fbd005d8fc9ba3fd22e8cbf3"
          }}
          style={styles.ImageBackground_0_304}
        />
        <View style={styles.View_0_305}>
          <Text style={styles.Text_0_305}>Login</Text>
        </View>
        <View style={styles.View_0_306}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb25/0542/adb22abf9fd17b94afbe523fa59338f8"
            }}
            style={styles.ImageBackground_0_307}
          />
          <View style={styles.View_0_308}>
            <Text style={styles.Text_0_308}>sarbjit399@dribbble.com</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1140/cdcb/1a900e3c53a62f5ddddbf00b78560aef"
            }}
            style={styles.ImageBackground_0_311}
          />
        </View>
        <View style={styles.View_0_313}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb25/0542/adb22abf9fd17b94afbe523fa59338f8"
            }}
            style={styles.ImageBackground_0_314}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec52/aa8b/8d34815aecd0e3a2475046c4fce7f3d8"
            }}
            style={styles.ImageBackground_0_315}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f5b/22d1/5751ffd6c216e2f72e2191564a441988"
            }}
            style={styles.ImageBackground_0_326}
          />
        </View>
        <View style={styles.View_0_329}>
          <Text style={styles.Text_0_329}>Keep me logged in.</Text>
        </View>
        <View style={styles.View_0_330}>
          <Text style={styles.Text_0_330}>Forgot password? Recover here</Text>
        </View>
        <View style={styles.View_0_331}>
          <Text style={styles.Text_0_331}>Facio</Text>
        </View>
      </View>
      <View style={styles.View_0_332}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0491/a2a1/ec3df7a72588f77264bb796695c110a3"
          }}
          style={styles.ImageBackground_0_333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307d/d1ba/dff9d7053b027e78f3c8cf0a730a1eab"
          }}
          style={styles.ImageBackground_0_340}
        />
        <View style={styles.View_0_342}>
          <View style={styles.View_0_347}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_346}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77c2/4482/f2e3b628fbcd1def314078385801b8a3"
            }}
            style={styles.ImageBackground_0_348}
          />
        </View>
        <View style={styles.View_0_349}>
          <Text style={styles.Text_0_349}>9:41</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6b/2b7e/578072fc3d8fcaa768e6eb1262579e99"
        }}
        style={styles.ImageBackground_0_350}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/e0c3/6176aaba0f8afde26552a2917610d348"
        }}
        style={styles.ImageBackground_0_353}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  View_0_295: {
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
  ImageBackground_0_297: {
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
  ImageBackground_0_296: {
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
  View_0_301: {
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
  ImageBackground_0_298: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-39%"),
    top: hp("1%")
  },
  ImageBackground_0_299: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-39%"),
    top: hp("1%")
  },
  View_0_300: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-39%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_302: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("298%"),
    justifyContent: "center"
  },
  Text_0_302: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_303: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("160%"),
    minHeight: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("74%")
  },
  ImageBackground_0_304: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118%")
  },
  View_0_305: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("125%"),
    justifyContent: "flex-start"
  },
  Text_0_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.022853970527649,
    textTransform: "uppercase"
  },
  View_0_306: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  ImageBackground_0_307: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_308: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.03567123413086,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_311: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_0_313: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68%")
  },
  ImageBackground_0_314: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_315: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("10%")
  },
  ImageBackground_0_326: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  View_0_329: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("102%"),
    justifyContent: "flex-end"
  },
  Text_0_329: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 38.029747009277344,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_330: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("152%"),
    justifyContent: "flex-end"
  },
  Text_0_330: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 38.029747009277344,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_331: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_0_331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 104.05296325683594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.2088290452957153,
    textTransform: "uppercase"
  },
  View_0_332: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  ImageBackground_0_333: {
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
  ImageBackground_0_340: {
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
  View_0_342: {
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
  View_0_347: {
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
  ImageBackground_0_345: {
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
  ImageBackground_0_346: {
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
  ImageBackground_0_348: {
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
  View_0_349: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  ImageBackground_0_350: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("326%")
  },
  ImageBackground_0_353: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("175%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
