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
        style={styles.ImageBackground_0_451}
      />
      <View style={styles.View_0_455}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df8/df10/07f2fa7233a0a7326b4c2ae5e8e59d66"
          }}
          style={styles.ImageBackground_0_452}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df8/df10/07f2fa7233a0a7326b4c2ae5e8e59d66"
          }}
          style={styles.ImageBackground_0_453}
        />
        <View style={styles.View_0_454} />
      </View>
      <View style={styles.View_0_456}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/5812/ececcf5f7fd77e410a42e04dcc23b7b4"
          }}
          style={styles.ImageBackground_0_457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc3/4b66/f7b30a34a5d5e0c53fc9765498ca5a44"
          }}
          style={styles.ImageBackground_0_458}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b90/05a6/65a2a1b0d2ea0cb55a7a4989fcecc522"
          }}
          style={styles.ImageBackground_0_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3942/30bb/273bcef64fc288c31c787065a17eb688"
          }}
          style={styles.ImageBackground_0_460}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2693/3450/b35fd52ded7e2fabaf85703684ee1a67"
          }}
          style={styles.ImageBackground_0_461}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e0/c49c/9d5272766c8fc26e2dac3db6fcc2af25"
          }}
          style={styles.ImageBackground_0_462}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8973/687f/3590e9fefe25b5151255c176d27eb64e"
          }}
          style={styles.ImageBackground_0_463}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4359/e044/f8259c0850b88e61428bbac0b3fbcaf0"
          }}
          style={styles.ImageBackground_0_464}
        />
        <View style={styles.View_0_465}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431b/3265/f5d0b989b4bbfc9f16eb91e697368956"
            }}
            style={styles.ImageBackground_0_466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd2/30f3/85ea56af6a656e349ca3752b2de805f1"
            }}
            style={styles.ImageBackground_0_470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ea/7aaf/4097499f06ce60cd6393afe7a0f54540"
            }}
            style={styles.ImageBackground_0_474}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/653b/53f1/96402fc4cd911cc3cc3f2bbe3ed2b844"
            }}
            style={styles.ImageBackground_0_478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2440/28a7/a487c5d565e012ac6093aa863f30f84b"
            }}
            style={styles.ImageBackground_0_482}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2a/0a56/7c0eb3837b55362ff0834cb73995c104"
            }}
            style={styles.ImageBackground_0_486}
          />
        </View>
        <View style={styles.View_0_490}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7b3/d9e7/dbfe5eacbff106a34ab9b5f262c809c3"
            }}
            style={styles.ImageBackground_0_491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbef/7004/5c923def1e3556f3916e0bf180cecd59"
            }}
            style={styles.ImageBackground_0_494}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c1/090f/5b04169c68911fc157080994867b1420"
            }}
            style={styles.ImageBackground_0_498}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5d2/0e13/35727c363a657921c14a3584984f5978"
            }}
            style={styles.ImageBackground_0_502}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d4e/da6c/aebd9cf1dac6df8c42c9cf2749224d18"
            }}
            style={styles.ImageBackground_0_506}
          />
        </View>
        <View style={styles.View_0_509}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a344/2f53/5d7779ec994053b6f8313b336725204f"
            }}
            style={styles.ImageBackground_0_510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abfd/5400/c59504cc01a7c94fb1b1736dc92495a5"
            }}
            style={styles.ImageBackground_0_513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3332/2590/03157c8f75e5698a10314e0a0fd9ec22"
            }}
            style={styles.ImageBackground_0_517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0926/b4fc/ab20233c9c6c67d795c9ff5769b55d9a"
            }}
            style={styles.ImageBackground_0_521}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f919/1317/792f1d8521dc7ca8bbeb4af5f1d49650"
            }}
            style={styles.ImageBackground_0_525}
          />
        </View>
        <View style={styles.View_0_528}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26f/7956/3e9a1d3069b1667ae80fc7e3397ca110"
            }}
            style={styles.ImageBackground_0_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_536}
          />
        </View>
        <View style={styles.View_0_539}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf0/ca56/1f0887588329e1a945f669ff92648298"
            }}
            style={styles.ImageBackground_0_540}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2574/288c/ea7b2d676ab9ef8bca3ec247b646da2b"
            }}
            style={styles.ImageBackground_0_543}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/772a/351a/6b31fb2c264e5cc9310728deae233d92"
            }}
            style={styles.ImageBackground_0_547}
          />
        </View>
        <View style={styles.View_0_550}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdea/bb7e/553b308425fbe8451e0e25381ee75ce2"
            }}
            style={styles.ImageBackground_0_551}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98be/5b3f/207bdc8df25a55d1c2f8359c04cf1284"
            }}
            style={styles.ImageBackground_0_554}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf0/ca56/1f0887588329e1a945f669ff92648298"
            }}
            style={styles.ImageBackground_0_558}
          />
        </View>
        <View style={styles.View_0_561}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/177a/8f89/fa4ffbc7d452bf3379e23b7ef4384dfe"
            }}
            style={styles.ImageBackground_0_562}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c54/79e0/1bf156f6d1373f966d3d35e63b901b81"
            }}
            style={styles.ImageBackground_0_565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2914/568f/6af383bf364a4645b4b2354d782890e4"
            }}
            style={styles.ImageBackground_0_569}
          />
        </View>
        <View style={styles.View_0_572}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43a0/0421/2c0affdafab16232cecef097e3d4504b"
            }}
            style={styles.ImageBackground_0_573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac83/7b27/b431207d8e7b73e122623aa0b889fe2f"
            }}
            style={styles.ImageBackground_0_576}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654f/727e/a30f04bb3193bec07022dfa2bb8cbae5"
            }}
            style={styles.ImageBackground_0_580}
          />
        </View>
        <View style={styles.View_0_583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5167/2856/15be2ffccdf9f380a1b352871f78e31e"
            }}
            style={styles.ImageBackground_0_584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b2/ba22/1c5cd62c5fda13562fbaa753b2dd79da"
            }}
            style={styles.ImageBackground_0_587}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2b9/7555/66f23cdaccf7681463f94a2d05b64338"
            }}
            style={styles.ImageBackground_0_591}
          />
        </View>
        <View style={styles.View_0_594}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a457/63b9/5a86539549eff5f1ae82edcbdcc7f179"
            }}
            style={styles.ImageBackground_0_595}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41bc/c770/7cd0279319fff9a749a70ce538f4ae70"
            }}
            style={styles.ImageBackground_0_598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8795/fd58/e06238b2d338e7a1d83af0c98ca1cc42"
            }}
            style={styles.ImageBackground_0_602}
          />
        </View>
        <View style={styles.View_0_605}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a457/63b9/5a86539549eff5f1ae82edcbdcc7f179"
            }}
            style={styles.ImageBackground_0_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/221a/284c/c2fb898159f9a89ab00e96af11a9aedd"
            }}
            style={styles.ImageBackground_0_609}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af6e/d614/c369a5f48a413607546dfba89cf5767f"
            }}
            style={styles.ImageBackground_0_613}
          />
        </View>
        <View style={styles.View_0_616}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57f5/53d1/8ddb18a9563ef736acc4588bf9665aeb"
            }}
            style={styles.ImageBackground_0_617}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/196f/de39/381988dcd5a69ad7518c74b9ddd5810f"
            }}
            style={styles.ImageBackground_0_620}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db1/8547/f380cb7ef7edfdba7e5f9d41f2da6057"
            }}
            style={styles.ImageBackground_0_624}
          />
        </View>
      </View>
      <View style={styles.View_0_627}>
        <View style={styles.View_0_628}>
          <Text style={styles.Text_0_628}>
            You are too close. Move away from the camera so your face fits
            inside the circle{" "}
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b867/c127/1c6a099778813ddd4727a53cc2373a36"
          }}
          style={styles.ImageBackground_0_629}
        />
        <View style={styles.View_0_634}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b0a/e3b1/279a7f7e45057ef43cdef5f848bdb79e"
            }}
            style={styles.ImageBackground_0_632}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/581c/28c9/b238f60351522f7c7950e3a350f9ed27"
            }}
            style={styles.ImageBackground_0_633}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf1/8cc5/6f72828632f7d780cc43693cbdf44244"
            }}
            style={styles.ImageBackground_0_635}
          />
        </View>
      </View>
      <View style={styles.View_0_636}>
        <View style={styles.View_0_638}>
          <Text style={styles.Text_0_638}>Back</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0453/e0e5/7ddc763a563618200986af5532bef6bc"
          }}
          style={styles.ImageBackground_0_639}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fb/919f/09af09aa51e7bac800afbff9897e59e0"
          }}
          style={styles.ImageBackground_0_642}
        />
      </View>
      <View style={styles.View_0_643}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0491/a2a1/ec3df7a72588f77264bb796695c110a3"
          }}
          style={styles.ImageBackground_0_644}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307d/d1ba/dff9d7053b027e78f3c8cf0a730a1eab"
          }}
          style={styles.ImageBackground_0_651}
        />
        <View style={styles.View_0_653}>
          <Text style={styles.Text_0_653}>9:41</Text>
        </View>
        <View style={styles.View_0_654}>
          <View style={styles.View_0_659}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_657}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_658}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77c2/4482/f2e3b628fbcd1def314078385801b8a3"
            }}
            style={styles.ImageBackground_0_660}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6b/2b7e/578072fc3d8fcaa768e6eb1262579e99"
        }}
        style={styles.ImageBackground_0_661}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_451: {
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
  View_0_455: {
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
  ImageBackground_0_452: {
    width: wp("189%"),
    minWidth: wp("189%"),
    height: hp("1031%"),
    minHeight: hp("1031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-50%"),
    top: hp("-372%")
  },
  ImageBackground_0_453: {
    width: wp("189%"),
    minWidth: wp("189%"),
    height: hp("1031%"),
    minHeight: hp("1031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-50%"),
    top: hp("-372%")
  },
  View_0_454: {
    width: wp("189%"),
    minWidth: wp("189%"),
    height: hp("1031%"),
    minHeight: hp("1031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-50%"),
    top: hp("-372%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_456: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("151%"),
    minHeight: hp("151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("86%")
  },
  ImageBackground_0_457: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  ImageBackground_0_458: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  ImageBackground_0_459: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_460: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("137%")
  },
  ImageBackground_0_461: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("137%")
  },
  ImageBackground_0_462: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%")
  },
  ImageBackground_0_463: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("63%")
  },
  ImageBackground_0_464: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("63%")
  },
  View_0_465: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("28%")
  },
  ImageBackground_0_466: {
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
  ImageBackground_0_470: {
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
  ImageBackground_0_474: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("34%")
  },
  ImageBackground_0_478: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_0_482: {
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
  ImageBackground_0_486: {
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
  View_0_490: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("73%")
  },
  ImageBackground_0_491: {
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
  ImageBackground_0_494: {
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
  ImageBackground_0_498: {
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
  ImageBackground_0_502: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  ImageBackground_0_506: {
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
  View_0_509: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("73%")
  },
  ImageBackground_0_510: {
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
  ImageBackground_0_513: {
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
  ImageBackground_0_517: {
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
  ImageBackground_0_521: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("29%")
  },
  ImageBackground_0_525: {
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
  View_0_528: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%")
  },
  ImageBackground_0_529: {
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
  ImageBackground_0_532: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_536: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("72%")
  },
  View_0_539: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%")
  },
  ImageBackground_0_540: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  ImageBackground_0_543: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_547: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%")
  },
  View_0_550: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%")
  },
  ImageBackground_0_551: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%")
  },
  ImageBackground_0_554: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_558: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  View_0_561: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("65%")
  },
  ImageBackground_0_562: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("84%")
  },
  ImageBackground_0_565: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_569: {
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
  View_0_572: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("97%")
  },
  ImageBackground_0_573: {
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
  ImageBackground_0_576: {
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
  ImageBackground_0_580: {
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
  View_0_583: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("21%")
  },
  ImageBackground_0_584: {
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
  ImageBackground_0_587: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_591: {
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
  View_0_594: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("21%")
  },
  ImageBackground_0_595: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  ImageBackground_0_598: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_602: {
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
  View_0_605: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("73%")
  },
  ImageBackground_0_606: {
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
  ImageBackground_0_609: {
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
  ImageBackground_0_613: {
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
  View_0_616: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("73%")
  },
  ImageBackground_0_617: {
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
  ImageBackground_0_620: {
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
  ImageBackground_0_624: {
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
  View_0_627: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("267%")
  },
  View_0_628: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    justifyContent: "flex-end"
  },
  Text_0_628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_629: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_0_634: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("4%")
  },
  ImageBackground_0_632: {
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
  ImageBackground_0_633: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_635: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_636: {
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
  View_0_638: {
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
  Text_0_638: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_639: {
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
  ImageBackground_0_642: {
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
  View_0_643: {
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
  ImageBackground_0_644: {
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
  ImageBackground_0_651: {
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
  View_0_653: {
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
  Text_0_653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_654: {
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
  View_0_659: {
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
  ImageBackground_0_657: {
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
  ImageBackground_0_658: {
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
  ImageBackground_0_660: {
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
  ImageBackground_0_661: {
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
