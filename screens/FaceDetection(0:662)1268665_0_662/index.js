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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88bc/1bb8/eb2ec1b90d6b602afac4450107ec53a4"
        }}
        style={styles.ImageBackground_0_663}
      />
      <View style={styles.View_0_667}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f917/5213/068ace6c4f50147328078a8e4f1e16f1"
          }}
          style={styles.ImageBackground_0_664}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f917/5213/068ace6c4f50147328078a8e4f1e16f1"
          }}
          style={styles.ImageBackground_0_665}
        />
        <View style={styles.View_0_666} />
      </View>
      <View style={styles.View_0_668}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f85/e56f/34cb6a43fbd005d8fc9ba3fd22e8cbf3"
          }}
          style={styles.ImageBackground_0_669}
        />
        <View style={styles.View_0_670}>
          <Text style={styles.Text_0_670}>Recognize Face</Text>
        </View>
      </View>
      <View style={styles.View_0_671}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a2/ec6e/f87acd59e87cfb246c8aeec93703933c"
          }}
          style={styles.ImageBackground_0_672}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dafe/2497/72f1f83d17b28600a4b6dc9df3cc65c7"
          }}
          style={styles.ImageBackground_0_673}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11ff/d6ff/25fc8580bfd844cf01a25da2be44c3bf"
          }}
          style={styles.ImageBackground_0_674}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/2e4a/e17a4881aee8ad8bc5f044a91d757d58"
          }}
          style={styles.ImageBackground_0_675}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf4/5628/6657188f569fd98822f6839e6e4f8674"
          }}
          style={styles.ImageBackground_0_676}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e639/50c1/ed980b971b189f472608c0ef81c47b3b"
          }}
          style={styles.ImageBackground_0_677}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e08/f3e9/86f9de275fab7d14e1811f94835d601a"
          }}
          style={styles.ImageBackground_0_678}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f2/acfd/be5454459840e20f46824faac4e568c7"
          }}
          style={styles.ImageBackground_0_679}
        />
        <View style={styles.View_0_680}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431b/3265/f5d0b989b4bbfc9f16eb91e697368956"
            }}
            style={styles.ImageBackground_0_681}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a59/81d1/e1897d7084c44cb74f594b0a3b663cf3"
            }}
            style={styles.ImageBackground_0_685}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ea/7aaf/4097499f06ce60cd6393afe7a0f54540"
            }}
            style={styles.ImageBackground_0_689}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abad/3cd5/314a2f3c713ae7b6c139569a88b922ff"
            }}
            style={styles.ImageBackground_0_693}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bc5/619a/8fb4bf490ea12ce9d0bc762fc0f62d40"
            }}
            style={styles.ImageBackground_0_697}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a3/c3cc/92cf6cfa63bff5de985b9be674ca10fe"
            }}
            style={styles.ImageBackground_0_701}
          />
        </View>
        <View style={styles.View_0_705}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7b3/d9e7/dbfe5eacbff106a34ab9b5f262c809c3"
            }}
            style={styles.ImageBackground_0_706}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87bf/a1bc/230db8cc4df1555e0860d78e9d8bab74"
            }}
            style={styles.ImageBackground_0_709}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961a/4218/1de8dc8502efe8b963e7091987d03737"
            }}
            style={styles.ImageBackground_0_713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6572/3ffe/7bb83590258e9224a0dbb9625d62e841"
            }}
            style={styles.ImageBackground_0_717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d4e/da6c/aebd9cf1dac6df8c42c9cf2749224d18"
            }}
            style={styles.ImageBackground_0_721}
          />
        </View>
        <View style={styles.View_0_724}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a344/2f53/5d7779ec994053b6f8313b336725204f"
            }}
            style={styles.ImageBackground_0_725}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a01c/6cb3/4d7a9f44d8d8445601f1f47dc1b956d8"
            }}
            style={styles.ImageBackground_0_728}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3332/2590/03157c8f75e5698a10314e0a0fd9ec22"
            }}
            style={styles.ImageBackground_0_732}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c6/c9af/71739157508ddaa080bba522465dfdc8"
            }}
            style={styles.ImageBackground_0_736}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f919/1317/792f1d8521dc7ca8bbeb4af5f1d49650"
            }}
            style={styles.ImageBackground_0_740}
          />
        </View>
        <View style={styles.View_0_743}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_744}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/555e/6458cc4a8504805dd669c81587e0eb3e"
            }}
            style={styles.ImageBackground_0_747}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_751}
          />
        </View>
        <View style={styles.View_0_754}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf0/ca56/1f0887588329e1a945f669ff92648298"
            }}
            style={styles.ImageBackground_0_755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc41/a010/a88f19268e2a5365fa1d029dadca758f"
            }}
            style={styles.ImageBackground_0_758}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/772a/351a/6b31fb2c264e5cc9310728deae233d92"
            }}
            style={styles.ImageBackground_0_762}
          />
        </View>
        <View style={styles.View_0_765}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654f/727e/a30f04bb3193bec07022dfa2bb8cbae5"
            }}
            style={styles.ImageBackground_0_766}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23c7/1ccd/cfdd26cffa316dd1912517148b892a2c"
            }}
            style={styles.ImageBackground_0_769}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf0/ca56/1f0887588329e1a945f669ff92648298"
            }}
            style={styles.ImageBackground_0_773}
          />
        </View>
        <View style={styles.View_0_776}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/177a/8f89/fa4ffbc7d452bf3379e23b7ef4384dfe"
            }}
            style={styles.ImageBackground_0_777}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282f/53c7/f4a8807264f391e71909746a0e66eb9e"
            }}
            style={styles.ImageBackground_0_780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_784}
          />
        </View>
        <View style={styles.View_0_787}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b2/254b/b184862f18bc78918329dc8014d36733"
            }}
            style={styles.ImageBackground_0_788}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ae/39f5/53e008793cc05c54d36efc4d17472070"
            }}
            style={styles.ImageBackground_0_791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7832/3a0f/ee4e543bcc3e8da59776f64b9e292ab1"
            }}
            style={styles.ImageBackground_0_795}
          />
        </View>
        <View style={styles.View_0_798}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5167/2856/15be2ffccdf9f380a1b352871f78e31e"
            }}
            style={styles.ImageBackground_0_799}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ff2/128c/601acf51df269265f962b6026aea28fc"
            }}
            style={styles.ImageBackground_0_802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2b9/7555/66f23cdaccf7681463f94a2d05b64338"
            }}
            style={styles.ImageBackground_0_806}
          />
        </View>
        <View style={styles.View_0_809}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a457/63b9/5a86539549eff5f1ae82edcbdcc7f179"
            }}
            style={styles.ImageBackground_0_810}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1537/0ab8/b8ebd469321529cdd1174eed95f92510"
            }}
            style={styles.ImageBackground_0_813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8795/fd58/e06238b2d338e7a1d83af0c98ca1cc42"
            }}
            style={styles.ImageBackground_0_817}
          />
        </View>
        <View style={styles.View_0_820}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a457/63b9/5a86539549eff5f1ae82edcbdcc7f179"
            }}
            style={styles.ImageBackground_0_821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4324/e63a/83137de4b2d9aad1301b1877ccb7d70f"
            }}
            style={styles.ImageBackground_0_824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af6e/d614/c369a5f48a413607546dfba89cf5767f"
            }}
            style={styles.ImageBackground_0_828}
          />
        </View>
        <View style={styles.View_0_831}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5167/2856/15be2ffccdf9f380a1b352871f78e31e"
            }}
            style={styles.ImageBackground_0_832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/424a/426d/36b58670bb2c97e04118b0ce26fe2363"
            }}
            style={styles.ImageBackground_0_835}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db1/8547/f380cb7ef7edfdba7e5f9d41f2da6057"
            }}
            style={styles.ImageBackground_0_839}
          />
        </View>
      </View>
      <View style={styles.View_0_842}>
        <View style={styles.View_0_844}>
          <Text style={styles.Text_0_844}>Back</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0453/e0e5/7ddc763a563618200986af5532bef6bc"
          }}
          style={styles.ImageBackground_0_845}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bead/d617/031784d7bb4b310999e352751287d4f9"
          }}
          style={styles.ImageBackground_0_848}
        />
      </View>
      <View style={styles.View_0_849}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0491/a2a1/ec3df7a72588f77264bb796695c110a3"
          }}
          style={styles.ImageBackground_0_850}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcca/5f22/80a4e6315884fca9ecf2d574490a5b7f"
          }}
          style={styles.ImageBackground_0_857}
        />
        <View style={styles.View_0_859}>
          <Text style={styles.Text_0_859}>9:41</Text>
        </View>
        <View style={styles.View_0_860}>
          <View style={styles.View_0_865}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_863}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_864}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77c2/4482/f2e3b628fbcd1def314078385801b8a3"
            }}
            style={styles.ImageBackground_0_866}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e4/18f3/f3554ebfdb988212ee70bd4f918753da"
        }}
        style={styles.ImageBackground_0_867}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_663: {
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
  View_0_667: {
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
  ImageBackground_0_664: {
    width: wp("146%"),
    minWidth: wp("146%"),
    height: hp("800%"),
    minHeight: hp("800%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-27%"),
    top: hp("-256%")
  },
  ImageBackground_0_665: {
    width: wp("146%"),
    minWidth: wp("146%"),
    height: hp("800%"),
    minHeight: hp("800%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-27%"),
    top: hp("-256%")
  },
  View_0_666: {
    width: wp("146%"),
    minWidth: wp("146%"),
    height: hp("800%"),
    minHeight: hp("800%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-27%"),
    top: hp("-256%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_668: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("291%")
  },
  ImageBackground_0_669: {
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
  View_0_670: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "flex-end"
  },
  Text_0_670: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.022853970527649,
    textTransform: "uppercase"
  },
  View_0_671: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("149%"),
    minHeight: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("87%")
  },
  ImageBackground_0_672: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("141%"),
    minHeight: hp("141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  ImageBackground_0_673: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  ImageBackground_0_674: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_675: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("135%")
  },
  ImageBackground_0_676: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135%")
  },
  ImageBackground_0_677: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("146%"),
    minHeight: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("3%")
  },
  ImageBackground_0_678: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("62%")
  },
  ImageBackground_0_679: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("62%")
  },
  View_0_680: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("28%")
  },
  ImageBackground_0_681: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  ImageBackground_0_685: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  ImageBackground_0_689: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("33%")
  },
  ImageBackground_0_693: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_0_697: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_0_701: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_705: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("73%")
  },
  ImageBackground_0_706: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  ImageBackground_0_709: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_713: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  ImageBackground_0_717: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  ImageBackground_0_721: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("51%")
  },
  View_0_724: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("73%")
  },
  ImageBackground_0_725: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_728: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_732: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("28%")
  },
  ImageBackground_0_736: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28%")
  },
  ImageBackground_0_740: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("51%")
  },
  View_0_743: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("3%")
  },
  ImageBackground_0_744: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_747: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_751: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("71%")
  },
  View_0_754: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("3%")
  },
  ImageBackground_0_755: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  ImageBackground_0_758: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_762: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  View_0_765: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("64%")
  },
  ImageBackground_0_766: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  ImageBackground_0_769: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_773: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_0_776: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("64%")
  },
  ImageBackground_0_777: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("83%")
  },
  ImageBackground_0_780: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_784: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_787: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("95%")
  },
  ImageBackground_0_788: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_791: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_795: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("1%")
  },
  View_0_798: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("20%")
  },
  ImageBackground_0_799: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("18%")
  },
  ImageBackground_0_802: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_806: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_0_809: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("20%")
  },
  ImageBackground_0_810: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_0_813: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_817: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%")
  },
  View_0_820: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("72%")
  },
  ImageBackground_0_821: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_0_824: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_828: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_0_831: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("72%")
  },
  ImageBackground_0_832: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_835: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_839: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28%")
  },
  View_0_842: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%")
  },
  View_0_844: {
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
  Text_0_844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_845: {
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
  ImageBackground_0_848: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%")
  },
  View_0_849: {
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
  ImageBackground_0_850: {
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
  ImageBackground_0_857: {
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
  View_0_859: {
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
  Text_0_859: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_860: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  View_0_865: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_863: {
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
  ImageBackground_0_864: {
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
  ImageBackground_0_866: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_867: {
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
