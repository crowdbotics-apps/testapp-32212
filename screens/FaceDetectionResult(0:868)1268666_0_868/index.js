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
        style={styles.ImageBackground_0_869}
      />
      <View style={styles.View_0_873}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/d50c/29af569d1243b1ee12a66ef683f672e7"
          }}
          style={styles.ImageBackground_0_870}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/d50c/29af569d1243b1ee12a66ef683f672e7"
          }}
          style={styles.ImageBackground_0_871}
        />
        <View style={styles.View_0_872} />
      </View>
      <View style={styles.View_0_874}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1737/5654/b5d680042f71d8fc48b32f3115c123fc"
          }}
          style={styles.ImageBackground_0_875}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dafe/2497/72f1f83d17b28600a4b6dc9df3cc65c7"
          }}
          style={styles.ImageBackground_0_876}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11ff/d6ff/25fc8580bfd844cf01a25da2be44c3bf"
          }}
          style={styles.ImageBackground_0_877}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/2e4a/e17a4881aee8ad8bc5f044a91d757d58"
          }}
          style={styles.ImageBackground_0_878}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf4/5628/6657188f569fd98822f6839e6e4f8674"
          }}
          style={styles.ImageBackground_0_879}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e639/50c1/ed980b971b189f472608c0ef81c47b3b"
          }}
          style={styles.ImageBackground_0_880}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e08/f3e9/86f9de275fab7d14e1811f94835d601a"
          }}
          style={styles.ImageBackground_0_881}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f2/acfd/be5454459840e20f46824faac4e568c7"
          }}
          style={styles.ImageBackground_0_882}
        />
        <View style={styles.View_0_883}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431b/3265/f5d0b989b4bbfc9f16eb91e697368956"
            }}
            style={styles.ImageBackground_0_884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/941b/4a2b/0c955bd1b9e3e6993732ce1fcef2e22a"
            }}
            style={styles.ImageBackground_0_888}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ea/7aaf/4097499f06ce60cd6393afe7a0f54540"
            }}
            style={styles.ImageBackground_0_892}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abad/3cd5/314a2f3c713ae7b6c139569a88b922ff"
            }}
            style={styles.ImageBackground_0_896}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bc5/619a/8fb4bf490ea12ce9d0bc762fc0f62d40"
            }}
            style={styles.ImageBackground_0_900}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a3/c3cc/92cf6cfa63bff5de985b9be674ca10fe"
            }}
            style={styles.ImageBackground_0_904}
          />
        </View>
        <View style={styles.View_0_908}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7b3/d9e7/dbfe5eacbff106a34ab9b5f262c809c3"
            }}
            style={styles.ImageBackground_0_909}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87bf/a1bc/230db8cc4df1555e0860d78e9d8bab74"
            }}
            style={styles.ImageBackground_0_912}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961a/4218/1de8dc8502efe8b963e7091987d03737"
            }}
            style={styles.ImageBackground_0_916}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6572/3ffe/7bb83590258e9224a0dbb9625d62e841"
            }}
            style={styles.ImageBackground_0_920}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d4e/da6c/aebd9cf1dac6df8c42c9cf2749224d18"
            }}
            style={styles.ImageBackground_0_924}
          />
        </View>
        <View style={styles.View_0_927}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a344/2f53/5d7779ec994053b6f8313b336725204f"
            }}
            style={styles.ImageBackground_0_928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a01c/6cb3/4d7a9f44d8d8445601f1f47dc1b956d8"
            }}
            style={styles.ImageBackground_0_931}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3332/2590/03157c8f75e5698a10314e0a0fd9ec22"
            }}
            style={styles.ImageBackground_0_935}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c6/c9af/71739157508ddaa080bba522465dfdc8"
            }}
            style={styles.ImageBackground_0_939}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f919/1317/792f1d8521dc7ca8bbeb4af5f1d49650"
            }}
            style={styles.ImageBackground_0_943}
          />
        </View>
        <View style={styles.View_0_946}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_947}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/555e/6458cc4a8504805dd669c81587e0eb3e"
            }}
            style={styles.ImageBackground_0_950}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_954}
          />
        </View>
        <View style={styles.View_0_957}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf0/ca56/1f0887588329e1a945f669ff92648298"
            }}
            style={styles.ImageBackground_0_958}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc41/a010/a88f19268e2a5365fa1d029dadca758f"
            }}
            style={styles.ImageBackground_0_961}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/772a/351a/6b31fb2c264e5cc9310728deae233d92"
            }}
            style={styles.ImageBackground_0_965}
          />
        </View>
        <View style={styles.View_0_968}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654f/727e/a30f04bb3193bec07022dfa2bb8cbae5"
            }}
            style={styles.ImageBackground_0_969}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c98/d7f8/ed87b97b3002ab836e9b2bd40698b679"
            }}
            style={styles.ImageBackground_0_972}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf0/ca56/1f0887588329e1a945f669ff92648298"
            }}
            style={styles.ImageBackground_0_976}
          />
        </View>
        <View style={styles.View_0_979}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/177a/8f89/fa4ffbc7d452bf3379e23b7ef4384dfe"
            }}
            style={styles.ImageBackground_0_980}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282f/53c7/f4a8807264f391e71909746a0e66eb9e"
            }}
            style={styles.ImageBackground_0_983}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_987}
          />
        </View>
        <View style={styles.View_0_990}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b2/254b/b184862f18bc78918329dc8014d36733"
            }}
            style={styles.ImageBackground_0_991}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b4c/019b/8ca8574f4b79ea0a7b39991abdb9eb5a"
            }}
            style={styles.ImageBackground_0_994}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7832/3a0f/ee4e543bcc3e8da59776f64b9e292ab1"
            }}
            style={styles.ImageBackground_0_998}
          />
        </View>
        <View style={styles.View_0_1001}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5167/2856/15be2ffccdf9f380a1b352871f78e31e"
            }}
            style={styles.ImageBackground_0_1002}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ff2/128c/601acf51df269265f962b6026aea28fc"
            }}
            style={styles.ImageBackground_0_1005}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2b9/7555/66f23cdaccf7681463f94a2d05b64338"
            }}
            style={styles.ImageBackground_0_1009}
          />
        </View>
        <View style={styles.View_0_1012}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a457/63b9/5a86539549eff5f1ae82edcbdcc7f179"
            }}
            style={styles.ImageBackground_0_1013}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1537/0ab8/b8ebd469321529cdd1174eed95f92510"
            }}
            style={styles.ImageBackground_0_1016}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8795/fd58/e06238b2d338e7a1d83af0c98ca1cc42"
            }}
            style={styles.ImageBackground_0_1020}
          />
        </View>
        <View style={styles.View_0_1023}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a457/63b9/5a86539549eff5f1ae82edcbdcc7f179"
            }}
            style={styles.ImageBackground_0_1024}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4324/e63a/83137de4b2d9aad1301b1877ccb7d70f"
            }}
            style={styles.ImageBackground_0_1027}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af6e/d614/c369a5f48a413607546dfba89cf5767f"
            }}
            style={styles.ImageBackground_0_1031}
          />
        </View>
        <View style={styles.View_0_1034}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5167/2856/15be2ffccdf9f380a1b352871f78e31e"
            }}
            style={styles.ImageBackground_0_1035}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/424a/426d/36b58670bb2c97e04118b0ce26fe2363"
            }}
            style={styles.ImageBackground_0_1038}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db1/8547/f380cb7ef7edfdba7e5f9d41f2da6057"
            }}
            style={styles.ImageBackground_0_1042}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24bd/1337/97e432d2608bbd8fe1581141bd6e8abb"
        }}
        style={styles.ImageBackground_0_1045}
      />
      <View style={styles.View_0_1046}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aea5/82b9/8f15bd222e06cb95e6d36b5a63e714da"
          }}
          style={styles.ImageBackground_0_1047}
        />
        <View style={styles.View_0_1048}>
          <Text style={styles.Text_0_1048}>Erik Lucatero</Text>
        </View>
        <View style={styles.View_0_1049}>
          <Text style={styles.Text_0_1049}>
            He is in your facebook, twitter and  in your phone’s contact list.
          </Text>
        </View>
        <View style={styles.View_0_1050}>
          <View style={styles.View_0_1051}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5d1/21ff/b937b530dcec81c91253bd06b3794b0a"
              }}
              style={styles.ImageBackground_0_1053}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998a/726f/839cbaf3040428091de41ae84637f075"
              }}
              style={styles.ImageBackground_0_1052}
            />
            <View style={styles.View_0_1057}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956d/53a9/f16a1ff75d1962ef4594cba8e0d89439"
                }}
                style={styles.ImageBackground_0_1054}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956d/53a9/f16a1ff75d1962ef4594cba8e0d89439"
                }}
                style={styles.ImageBackground_0_1055}
              />
              <View style={styles.View_0_1056} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c27/43bb/ada0fee5c8a96a957302f4522113c50b"
          }}
          style={styles.ImageBackground_0_1058}
        />
        <View style={styles.View_0_1059}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc6/0d15/3e3a71b2dab23bd7b24d9a09b60955ac"
            }}
            style={styles.ImageBackground_0_1060}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc6/0d15/3e3a71b2dab23bd7b24d9a09b60955ac"
            }}
            style={styles.ImageBackground_0_1061}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a82/cfa2/807bccddf4d489053193c7b420030f12"
            }}
            style={styles.ImageBackground_0_1062}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e9b/fad8/0ebfe324acce9d66db33809529e0875a"
            }}
            style={styles.ImageBackground_0_1063}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc6/0d15/3e3a71b2dab23bd7b24d9a09b60955ac"
            }}
            style={styles.ImageBackground_0_1064}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b62/57c3/f5f2e12fe38d028d10fa38cb2fc734bb"
            }}
            style={styles.ImageBackground_0_1067}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea33/3379/a5e5b27ba5049cf801b04e8e086ef376"
          }}
          style={styles.ImageBackground_0_1072}
        />
      </View>
      <View style={styles.View_0_1073}>
        <View style={styles.View_0_1075}>
          <Text style={styles.Text_0_1075}>Back</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0453/e0e5/7ddc763a563618200986af5532bef6bc"
          }}
          style={styles.ImageBackground_0_1076}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fb/919f/09af09aa51e7bac800afbff9897e59e0"
          }}
          style={styles.ImageBackground_0_1079}
        />
      </View>
      <View style={styles.View_0_1080}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0491/a2a1/ec3df7a72588f77264bb796695c110a3"
          }}
          style={styles.ImageBackground_0_1081}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307d/d1ba/dff9d7053b027e78f3c8cf0a730a1eab"
          }}
          style={styles.ImageBackground_0_1088}
        />
        <View style={styles.View_0_1090}>
          <Text style={styles.Text_0_1090}>9:41</Text>
        </View>
        <View style={styles.View_0_1091}>
          <View style={styles.View_0_1096}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_1094}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_1095}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77c2/4482/f2e3b628fbcd1def314078385801b8a3"
            }}
            style={styles.ImageBackground_0_1097}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e4/18f3/f3554ebfdb988212ee70bd4f918753da"
        }}
        style={styles.ImageBackground_0_1098}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_869: {
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
  View_0_873: {
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
  ImageBackground_0_870: {
    width: wp("138%"),
    minWidth: wp("138%"),
    height: hp("265%"),
    minHeight: hp("265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("-40%")
  },
  ImageBackground_0_871: {
    width: wp("138%"),
    minWidth: wp("138%"),
    height: hp("265%"),
    minHeight: hp("265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("-40%")
  },
  View_0_872: {
    width: wp("138%"),
    minWidth: wp("138%"),
    height: hp("265%"),
    minHeight: hp("265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("-40%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_874: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("149%"),
    minHeight: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("32%")
  },
  ImageBackground_0_875: {
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
  ImageBackground_0_876: {
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
  ImageBackground_0_877: {
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
  ImageBackground_0_878: {
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
  ImageBackground_0_879: {
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
  ImageBackground_0_880: {
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
  ImageBackground_0_881: {
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
  ImageBackground_0_882: {
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
  View_0_883: {
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
  ImageBackground_0_884: {
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
  ImageBackground_0_888: {
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
  ImageBackground_0_892: {
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
  ImageBackground_0_896: {
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
  ImageBackground_0_900: {
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
  ImageBackground_0_904: {
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
  View_0_908: {
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
  ImageBackground_0_909: {
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
  ImageBackground_0_912: {
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
  ImageBackground_0_916: {
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
  ImageBackground_0_920: {
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
  ImageBackground_0_924: {
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
  View_0_927: {
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
  ImageBackground_0_928: {
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
  ImageBackground_0_931: {
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
  ImageBackground_0_935: {
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
  ImageBackground_0_939: {
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
  ImageBackground_0_943: {
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
  View_0_946: {
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
  ImageBackground_0_947: {
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
  ImageBackground_0_950: {
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
  ImageBackground_0_954: {
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
  View_0_957: {
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
  ImageBackground_0_958: {
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
  ImageBackground_0_961: {
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
  ImageBackground_0_965: {
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
  View_0_968: {
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
  ImageBackground_0_969: {
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
  ImageBackground_0_972: {
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
  ImageBackground_0_976: {
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
  View_0_979: {
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
  ImageBackground_0_980: {
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
  ImageBackground_0_983: {
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
  ImageBackground_0_987: {
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
  View_0_990: {
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
  ImageBackground_0_991: {
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
  ImageBackground_0_994: {
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
  ImageBackground_0_998: {
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
  View_0_1001: {
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
  ImageBackground_0_1002: {
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
  ImageBackground_0_1005: {
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
  ImageBackground_0_1009: {
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
  View_0_1012: {
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
  ImageBackground_0_1013: {
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
  ImageBackground_0_1016: {
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
  ImageBackground_0_1020: {
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
  View_0_1023: {
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
  ImageBackground_0_1024: {
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
  ImageBackground_0_1027: {
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
  ImageBackground_0_1031: {
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
  View_0_1034: {
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
  ImageBackground_0_1035: {
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
  ImageBackground_0_1038: {
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
  ImageBackground_0_1042: {
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
  ImageBackground_0_1045: {
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
  View_0_1046: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("165%"),
    minHeight: hp("165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%")
  },
  ImageBackground_0_1047: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("165%"),
    minHeight: hp("165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1048: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("71%"),
    justifyContent: "center"
  },
  Text_0_1048: {
    color: "rgba(14, 14, 14, 1)",
    fontSize: 59.03013610839844,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1049: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("85%"),
    justifyContent: "center"
  },
  Text_0_1049: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 43.022003173828125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1050: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%")
  },
  View_0_1051: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-172%")
  },
  ImageBackground_0_1053: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%")
  },
  ImageBackground_0_1052: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%")
  },
  View_0_1057: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%")
  },
  ImageBackground_0_1054: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("172%")
  },
  ImageBackground_0_1055: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("172%")
  },
  View_0_1056: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("172%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_1058: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("11%")
  },
  View_0_1059: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("114%")
  },
  ImageBackground_0_1060: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1061: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_0_1062: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%")
  },
  ImageBackground_0_1063: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%")
  },
  ImageBackground_0_1064: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%")
  },
  ImageBackground_0_1067: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("4%")
  },
  ImageBackground_0_1072: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%")
  },
  View_0_1073: {
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
  View_0_1075: {
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
  Text_0_1075: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1076: {
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
  ImageBackground_0_1079: {
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
  View_0_1080: {
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
  ImageBackground_0_1081: {
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
  ImageBackground_0_1088: {
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
  View_0_1090: {
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
  Text_0_1090: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_1091: {
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
  View_0_1096: {
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
  ImageBackground_0_1094: {
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
  ImageBackground_0_1095: {
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
  ImageBackground_0_1097: {
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
  ImageBackground_0_1098: {
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
