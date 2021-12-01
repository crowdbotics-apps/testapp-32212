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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80fa/05a4/f531371b4400a7d773b60851bebfe307"
        }}
        style={styles.ImageBackground_0_1100}
      />
      <View style={styles.View_0_1101}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c548/b593/659ba6c1f778dc47db47777b3dcebad7"
          }}
          style={styles.ImageBackground_0_1102}
        />
        <View style={styles.View_0_1103}>
          <Text style={styles.Text_0_1103}>Apps</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b9e/8b6a/995dac758db83c2a3ad7588e1f071104"
          }}
          style={styles.ImageBackground_0_1106}
        />
      </View>
      <View style={styles.View_0_1113}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d947/d2f5/f0bed14e32d439e6824098f1750d668c"
          }}
          style={styles.ImageBackground_0_1114}
        />
        <View style={styles.View_0_1115}>
          <Text style={styles.Text_0_1115}>Files</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/691f/a9cc/01e2fda5df384b3729b5da6b8738da85"
          }}
          style={styles.ImageBackground_0_1118}
        />
      </View>
      <View style={styles.View_0_1120}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d947/d2f5/f0bed14e32d439e6824098f1750d668c"
          }}
          style={styles.ImageBackground_0_1121}
        />
        <View style={styles.View_0_1122}>
          <Text style={styles.Text_0_1122}>Photos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/b6e4/39ec2d2c5b858cc64cc7f21718e77b7d"
          }}
          style={styles.ImageBackground_0_1131}
        />
      </View>
      <View style={styles.View_0_1133}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d947/d2f5/f0bed14e32d439e6824098f1750d668c"
          }}
          style={styles.ImageBackground_0_1134}
        />
        <View style={styles.View_0_1135}>
          <Text style={styles.Text_0_1135}>Notes</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b70/d04a/7921a16b9c452716f6b34a6f63088a78"
          }}
          style={styles.ImageBackground_0_1140}
        />
      </View>
      <View style={styles.View_0_1143}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d947/d2f5/f0bed14e32d439e6824098f1750d668c"
          }}
          style={styles.ImageBackground_0_1144}
        />
        <View style={styles.View_0_1145}>
          <Text style={styles.Text_0_1145}>Videos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c5d/2b8b/859196d74547d9f5b6c510aea9118beb"
          }}
          style={styles.ImageBackground_0_1148}
        />
      </View>
      <View style={styles.View_0_1150}>
        <Text style={styles.Text_0_1150}>Secure Apps</Text>
      </View>
      <View style={styles.View_0_1151}>
        <Text style={styles.Text_0_1151}>
          Select the applications which you want to secure and open using face
          recognition
        </Text>
      </View>
      <View style={styles.View_0_1152}>
        <View style={styles.View_0_1154}>
          <Text style={styles.Text_0_1154}>Back</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d679/9dbc/631ee826887aee53482842b4767a36db"
          }}
          style={styles.ImageBackground_0_1155}
        />
      </View>
      <View style={styles.View_0_1156}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c5/c815/40eecd58aa737f5bfda345c01593e900"
          }}
          style={styles.ImageBackground_0_1157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1c/cd75/b1708d55a875b160c1d97e02af309d7b"
          }}
          style={styles.ImageBackground_0_1164}
        />
        <View style={styles.View_0_1166}>
          <Text style={styles.Text_0_1166}>9:41</Text>
        </View>
        <View style={styles.View_0_1167}>
          <View style={styles.View_0_1172}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_1170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_1171}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8778/7931/e105f7ff1edbc7ff434855ae0a6a565c"
            }}
            style={styles.ImageBackground_0_1173}
          />
        </View>
      </View>
      <View style={styles.View_0_1174}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afaf/3cba/5b6aa90247952a9ace42060152b9cbeb"
          }}
          style={styles.ImageBackground_0_1175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ae/daa1/34ca6a59f939ea9bdae38dfc29b72ccd"
          }}
          style={styles.ImageBackground_0_1176}
        />
        <View style={styles.View_0_1185}>
          <View style={styles.View_0_1183}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b4e/d72e/1cc0312b9ca3ea6b2c9fe5202a558974"
              }}
              style={styles.ImageBackground_0_1179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eb7/cbf1/a7902df33092de168cd55ec9409ea575"
              }}
              style={styles.ImageBackground_0_1182}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f59d/0a9a/32edd75d2220084382fa78d472b1caa4"
            }}
            style={styles.ImageBackground_0_1184}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db5d/d869/baa6ef14af66578a0e560b57b3585b1e"
            }}
            style={styles.ImageBackground_0_1186}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad94/beb1/edefee92258d4b5cf06f3704a00e6b67"
          }}
          style={styles.ImageBackground_0_1189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc6a/2d27/b6c7d541fa43d19fc0bbf5f1e435c1eb"
          }}
          style={styles.ImageBackground_0_1192}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3761/5626/f2b8ad0a04e87bc17cc2a7ee7b26ce5c"
          }}
          style={styles.ImageBackground_0_1201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3c7/08a0/7b5a4bd8220da388948fb624f8344172"
          }}
          style={styles.ImageBackground_0_1208}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e4/18f3/f3554ebfdb988212ee70bd4f918753da"
        }}
        style={styles.ImageBackground_0_1211}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_1100: {
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
  View_0_1101: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("80%")
  },
  ImageBackground_0_1102: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1103: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_0_1103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1106: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("12%")
  },
  View_0_1113: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("199%")
  },
  ImageBackground_0_1114: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1115: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_0_1115: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1118: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%")
  },
  View_0_1120: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("80%")
  },
  ImageBackground_0_1121: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1122: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_0_1122: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1131: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%")
  },
  View_0_1133: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("140%")
  },
  ImageBackground_0_1134: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1135: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_0_1135: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1140: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("10%")
  },
  View_0_1143: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("140%")
  },
  ImageBackground_0_1144: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1145: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_0_1145: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1148: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("14%")
  },
  View_0_1150: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_0_1150: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 80.04074096679688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1151: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_0_1151: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1152: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%")
  },
  View_0_1154: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_0_1154: {
    color: "rgba(40, 216, 161, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1155: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1156: {
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
  ImageBackground_0_1157: {
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
  ImageBackground_0_1164: {
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
  View_0_1166: {
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
  Text_0_1166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_1167: {
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
  View_0_1172: {
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
  ImageBackground_0_1170: {
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
  ImageBackground_0_1171: {
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
  ImageBackground_0_1173: {
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
  View_0_1174: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("291%")
  },
  ImageBackground_0_1175: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_0_1176: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_0_1185: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("7%")
  },
  View_0_1183: {
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
  ImageBackground_0_1179: {
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
  ImageBackground_0_1182: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1184: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1186: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1189: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("19%")
  },
  ImageBackground_0_1192: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%")
  },
  ImageBackground_0_1201: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("18%")
  },
  ImageBackground_0_1208: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("18%")
  },
  ImageBackground_0_1211: {
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
