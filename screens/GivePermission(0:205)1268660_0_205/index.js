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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36db/567f/cd7080571a50beb809f1f31479b196f1"
        }}
        style={styles.ImageBackground_0_206}
      />
      <View style={styles.View_0_207}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f85/e56f/34cb6a43fbd005d8fc9ba3fd22e8cbf3"
          }}
          style={styles.ImageBackground_0_208}
        />
        <View style={styles.View_0_209}>
          <Text style={styles.Text_0_209}>Allow</Text>
        </View>
      </View>
      <View style={styles.View_0_210}>
        <View style={styles.View_0_211}>
          <Text style={styles.Text_0_211}>
            I read the Privacy policy and i accept  the terms and conditions.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be93/da40/fa03ab73a77117fb37ad83a3f7c9e4cf"
          }}
          style={styles.ImageBackground_0_214}
        />
      </View>
      <View style={styles.View_0_215}>
        <View style={styles.View_0_216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b457/02bc/8838a86598ed8b8e83c0c93428041096"
            }}
            style={styles.ImageBackground_0_217}
          />
          <View style={styles.View_0_218}>
            <Text style={styles.Text_0_218}>Allow to access apps</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be93/da40/fa03ab73a77117fb37ad83a3f7c9e4cf"
            }}
            style={styles.ImageBackground_0_221}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fb/f1b4/3e1614e608b3f3e5059c1d5d0d3d2625"
            }}
            style={styles.ImageBackground_0_224}
          />
        </View>
        <View style={styles.View_0_231}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dde/f3a4/66e0e0b26e84365041fe2a6c9a57e9e2"
            }}
            style={styles.ImageBackground_0_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be93/da40/fa03ab73a77117fb37ad83a3f7c9e4cf"
            }}
            style={styles.ImageBackground_0_235}
          />
          <View style={styles.View_0_236}>
            <Text style={styles.Text_0_236}>
              Allow to access camera  and photos
            </Text>
          </View>
          <View style={styles.View_0_245}>
            <View style={styles.View_0_243}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f07c/5b90/4299c7736028ff8529a37348f11b0b16"
                }}
                style={styles.ImageBackground_0_239}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41de/404d/98c45468be23e10a54b213684de81ac7"
                }}
                style={styles.ImageBackground_0_242}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdb4/6599/9385de67454e819bd2b46cca0df4214b"
              }}
              style={styles.ImageBackground_0_244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db5d/d869/baa6ef14af66578a0e560b57b3585b1e"
              }}
              style={styles.ImageBackground_0_246}
            />
          </View>
        </View>
        <View style={styles.View_0_247}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/a35b/5b02f8d1ce62ec06ec7de3ca1ab9527d"
            }}
            style={styles.ImageBackground_0_248}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be93/da40/fa03ab73a77117fb37ad83a3f7c9e4cf"
            }}
            style={styles.ImageBackground_0_251}
          />
          <View style={styles.View_0_252}>
            <Text style={styles.Text_0_252}>
              Allow to access browser  search
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db5/fe0e/a22a1789d0d89572e74a61dab31786da"
            }}
            style={styles.ImageBackground_0_255}
          />
        </View>
        <View style={styles.View_0_256}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3823/edf8/2d949b4c9a4f1b7b6d3bdf21534123df"
            }}
            style={styles.ImageBackground_0_257}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e3c/cb89/e73588c82f317996a08498f2aecfcfbb"
            }}
            style={styles.ImageBackground_0_260}
          />
          <View style={styles.View_0_261}>
            <Text style={styles.Text_0_261}>Allow to access contacts</Text>
          </View>
          <View style={styles.View_0_268}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9757/3191/82ab158e3fe5310c91897dbb415d36e5"
              }}
              style={styles.ImageBackground_0_264}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4edf/6027/8c847cce1c9a8154b1182136e5ac5806"
              }}
              style={styles.ImageBackground_0_267}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_269}>
        <View style={styles.View_0_271}>
          <Text style={styles.Text_0_271}>Permissions</Text>
        </View>
        <View style={styles.View_0_272}>
          <Text style={styles.Text_0_272}>
            Please allow us permission to access the following for fast and wide
            facial detection.
          </Text>
        </View>
        <View style={styles.View_0_273}>
          <Text style={styles.Text_0_273}>Back</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d679/9dbc/631ee826887aee53482842b4767a36db"
          }}
          style={styles.ImageBackground_0_274}
        />
      </View>
      <View style={styles.View_0_275}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c5/c815/40eecd58aa737f5bfda345c01593e900"
          }}
          style={styles.ImageBackground_0_276}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1c/cd75/b1708d55a875b160c1d97e02af309d7b"
          }}
          style={styles.ImageBackground_0_283}
        />
        <View style={styles.View_0_285}>
          <Text style={styles.Text_0_285}>9:41</Text>
        </View>
        <View style={styles.View_0_286}>
          <View style={styles.View_0_291}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_290}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8778/7931/e105f7ff1edbc7ff434855ae0a6a565c"
            }}
            style={styles.ImageBackground_0_292}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e4/18f3/f3554ebfdb988212ee70bd4f918753da"
        }}
        style={styles.ImageBackground_0_293}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_206: {
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
  View_0_207: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("293%")
  },
  ImageBackground_0_208: {
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
  View_0_209: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("8%"),
    justifyContent: "flex-end"
  },
  Text_0_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.022853970527649,
    textTransform: "uppercase"
  },
  View_0_210: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("263%")
  },
  View_0_211: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_211: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 37.01873016357422,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_214: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_215: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("82%")
  },
  View_0_216: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_217: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_218: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_218: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_221: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("8%")
  },
  ImageBackground_0_224: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_0_231: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  ImageBackground_0_232: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_235: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("8%")
  },
  View_0_236: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_0_236: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_245: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%")
  },
  View_0_243: {
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
  ImageBackground_0_239: {
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
  ImageBackground_0_242: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_244: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_246: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_247: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  ImageBackground_0_248: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_251: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("7%")
  },
  View_0_252: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_0_252: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_255: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%")
  },
  View_0_256: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108%")
  },
  ImageBackground_0_257: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_260: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("7%")
  },
  View_0_261: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_261: {
    color: "rgba(165, 175, 189, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_268: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%")
  },
  ImageBackground_0_264: {
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
  ImageBackground_0_267: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_269: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%")
  },
  View_0_271: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_0_271: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 80.04074096679688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_272: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    justifyContent: "center"
  },
  Text_0_272: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_273: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_0_273: {
    color: "rgba(40, 216, 161, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_274: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_275: {
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
  ImageBackground_0_276: {
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
  ImageBackground_0_283: {
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
  View_0_285: {
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
  Text_0_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_286: {
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
  View_0_291: {
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
  ImageBackground_0_289: {
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
  ImageBackground_0_290: {
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
  ImageBackground_0_292: {
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
  ImageBackground_0_293: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("327%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
