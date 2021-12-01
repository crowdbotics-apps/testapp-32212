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
      <View style={styles.View_0_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f1e/6406/9e3b9b45885074b41d089c8d902f7cf1"
          }}
          style={styles.ImageBackground_0_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7599/a9fb/a6117bc95c8d88f09664fd7eda1dc58d"
          }}
          style={styles.ImageBackground_0_4}
        />
        <View style={styles.View_0_9}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0c/d1e3/2f3b969a482abf9fa3b74f8e915f3818"
            }}
            style={styles.ImageBackground_0_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0c/d1e3/2f3b969a482abf9fa3b74f8e915f3818"
            }}
            style={styles.ImageBackground_0_7}
          />
          <View style={styles.View_0_8} />
        </View>
      </View>
      <View style={styles.View_0_10}>
        <Text style={styles.Text_0_10}>Facio</Text>
      </View>
      <View style={styles.View_0_11}>
        <Text style={styles.Text_0_11}>
          FACIO is a facial recognition app which detects person from your
          social network,  media files or internet.
        </Text>
      </View>
      <View style={styles.View_0_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f85/e56f/34cb6a43fbd005d8fc9ba3fd22e8cbf3"
          }}
          style={styles.ImageBackground_0_13}
        />
        <View style={styles.View_0_14}>
          <Text style={styles.Text_0_14}>Get Started</Text>
        </View>
      </View>
      <View style={styles.View_0_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd7/f261/fc873b6fb60c0af675dea5fe764fb275"
          }}
          style={styles.ImageBackground_0_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad0c/cddc/861d23b6296f0a43e60d0631bc8e868b"
          }}
          style={styles.ImageBackground_0_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5bc/2d5a/6aadb21f2019a17e42d1bf4ccb80e25f"
          }}
          style={styles.ImageBackground_0_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b1/d959/22c0300eb17404b85120b6dc34a50d06"
          }}
          style={styles.ImageBackground_0_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd19/4c6c/6981db58e9c1960f40243141157b7167"
          }}
          style={styles.ImageBackground_0_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1002/eb31/8fc8e8bd656c5f756baa58b575f33306"
          }}
          style={styles.ImageBackground_0_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/028a/8434/6a4d1c915e6e155b3be62fb7ebe64357"
          }}
          style={styles.ImageBackground_0_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9969/1b56/25900190338a88e8489848d336a69005"
          }}
          style={styles.ImageBackground_0_23}
        />
        <View style={styles.View_0_24}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a30/83f2/b97b35f28f765f5bfcae9d2297b94114"
            }}
            style={styles.ImageBackground_0_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42e2/ac43/e3017aa9e7e3295b236561a621631e0a"
            }}
            style={styles.ImageBackground_0_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ae6/c00e/597bf4e0e6bed325b16ec734794fc8e3"
            }}
            style={styles.ImageBackground_0_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6a0/11cc/2a1eedcb93fa7e45cf9246bcb3e90c16"
            }}
            style={styles.ImageBackground_0_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c082/139b/5214d0eab96e9481e678965c5a0ceb13"
            }}
            style={styles.ImageBackground_0_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8385/d68b/b24cfc02336329f7e102fffaf595a0f1"
            }}
            style={styles.ImageBackground_0_45}
          />
        </View>
        <View style={styles.View_0_49}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2c/9082/e46c87b70003a8a824cae7fbf17902d6"
            }}
            style={styles.ImageBackground_0_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0d9/13ec/29b1167977875981b8b14f3e01474b2d"
            }}
            style={styles.ImageBackground_0_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a03d/0cbf/3a3c52b20f0f27eb175a1364c5f3af50"
            }}
            style={styles.ImageBackground_0_57}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8e/da6c/1520ab70dfcd47d556591bf5ef234d0d"
            }}
            style={styles.ImageBackground_0_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a265/d4a6/a10d62f63484133cc54be4372fd11bb8"
            }}
            style={styles.ImageBackground_0_65}
          />
        </View>
        <View style={styles.View_0_68}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f2/6122/ccfac6fcfd54953860f7855d6c1acbcc"
            }}
            style={styles.ImageBackground_0_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5672/3060/fb412f95296cead27652dcb9bf632799"
            }}
            style={styles.ImageBackground_0_72}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c12/891d/3ce66229b419110fdaf312e5d19917bc"
            }}
            style={styles.ImageBackground_0_76}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a5/b005/8ae7c4df4f956d58363f41494ab00d90"
            }}
            style={styles.ImageBackground_0_80}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c6d/f6d6/02588e3e2d813624cbc7e71982d212c7"
            }}
            style={styles.ImageBackground_0_84}
          />
        </View>
        <View style={styles.View_0_87}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1089/5be7/07958b14806a33844f4170d76ecfa38c"
            }}
            style={styles.ImageBackground_0_88}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/343d/3f91/f15bb002cee0f34ea9599b481891a1a6"
            }}
            style={styles.ImageBackground_0_91}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1089/5be7/07958b14806a33844f4170d76ecfa38c"
            }}
            style={styles.ImageBackground_0_95}
          />
        </View>
        <View style={styles.View_0_98}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c6d/f6d6/02588e3e2d813624cbc7e71982d212c7"
            }}
            style={styles.ImageBackground_0_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a248/2585/70965a8c5b616e7b91bcf2c55933b29d"
            }}
            style={styles.ImageBackground_0_102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c6d/f6d6/02588e3e2d813624cbc7e71982d212c7"
            }}
            style={styles.ImageBackground_0_106}
          />
        </View>
        <View style={styles.View_0_109}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08af/547b/7559ef4ae6316d5fd328bf427e839079"
            }}
            style={styles.ImageBackground_0_110}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bfa/6d68/e47807f67da77dbca1745be711b0e7ed"
            }}
            style={styles.ImageBackground_0_113}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c6d/f6d6/02588e3e2d813624cbc7e71982d212c7"
            }}
            style={styles.ImageBackground_0_117}
          />
        </View>
        <View style={styles.View_0_120}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c47/6d37/6f08be817fa7497b7f7fc3fbd0eb605c"
            }}
            style={styles.ImageBackground_0_121}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2868/5634/6de88ebd04649b1ff1e2614bacfbc615"
            }}
            style={styles.ImageBackground_0_124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1089/5be7/07958b14806a33844f4170d76ecfa38c"
            }}
            style={styles.ImageBackground_0_128}
          />
        </View>
        <View style={styles.View_0_131}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f169/3a19/c56b5f90ab2781188c9aad4f1963c077"
            }}
            style={styles.ImageBackground_0_132}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3e7/c909/1c8ee7bc01128114faa9735fa93dbe6a"
            }}
            style={styles.ImageBackground_0_135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3659/1488/1579eba44bdaa57d51c931452ccda805"
            }}
            style={styles.ImageBackground_0_139}
          />
        </View>
        <View style={styles.View_0_142}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a560/584a/c0ec3a78fc4b838bd319eb8117f10fb8"
            }}
            style={styles.ImageBackground_0_143}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f94/ddb5/52d2b7547060b30ec53a2349d3b54531"
            }}
            style={styles.ImageBackground_0_146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f2/6122/ccfac6fcfd54953860f7855d6c1acbcc"
            }}
            style={styles.ImageBackground_0_150}
          />
        </View>
        <View style={styles.View_0_153}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08af/547b/7559ef4ae6316d5fd328bf427e839079"
            }}
            style={styles.ImageBackground_0_154}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c48c/5b04/52b0dd5d16a38e3c352782213a55078b"
            }}
            style={styles.ImageBackground_0_157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2c/9082/e46c87b70003a8a824cae7fbf17902d6"
            }}
            style={styles.ImageBackground_0_161}
          />
        </View>
        <View style={styles.View_0_164}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08af/547b/7559ef4ae6316d5fd328bf427e839079"
            }}
            style={styles.ImageBackground_0_165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/371a/ee4a/03ccb7d5e4799911a1827bf5b621c187"
            }}
            style={styles.ImageBackground_0_168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c94/4b45/d47dda01ba2d67633f514599c8e3a947"
            }}
            style={styles.ImageBackground_0_172}
          />
        </View>
        <View style={styles.View_0_175}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c47/6d37/6f08be817fa7497b7f7fc3fbd0eb605c"
            }}
            style={styles.ImageBackground_0_176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7b/585a/042263d1cb68bfd7e384f50449a58e7a"
            }}
            style={styles.ImageBackground_0_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4fa/bf8f/ab1d6a78c866b9ca12ed5688b7dc413b"
            }}
            style={styles.ImageBackground_0_183}
          />
        </View>
      </View>
      <View style={styles.View_0_186}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0491/a2a1/ec3df7a72588f77264bb796695c110a3"
          }}
          style={styles.ImageBackground_0_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307d/d1ba/dff9d7053b027e78f3c8cf0a730a1eab"
          }}
          style={styles.ImageBackground_0_194}
        />
        <View style={styles.View_0_196}>
          <View style={styles.View_0_201}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_200}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77c2/4482/f2e3b628fbcd1def314078385801b8a3"
            }}
            style={styles.ImageBackground_0_202}
          />
        </View>
        <View style={styles.View_0_203}>
          <Text style={styles.Text_0_203}>9:41</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6b/2b7e/578072fc3d8fcaa768e6eb1262579e99"
        }}
        style={styles.ImageBackground_0_204}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  View_0_3: {
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
  ImageBackground_0_5: {
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
  ImageBackground_0_4: {
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
  View_0_9: {
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
  ImageBackground_0_6: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-37%"),
    top: hp("0%")
  },
  ImageBackground_0_7: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-37%"),
    top: hp("0%")
  },
  View_0_8: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("333%"),
    minHeight: hp("333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_10: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("203%"),
    justifyContent: "flex-end"
  },
  Text_0_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 104.05296325683594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.2088290452957153,
    textTransform: "uppercase"
  },
  View_0_11: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("228%"),
    justifyContent: "center"
  },
  Text_0_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37.01873016357422,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_12: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("290%")
  },
  ImageBackground_0_13: {
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
  View_0_14: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("8%"),
    justifyContent: "flex-end"
  },
  Text_0_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38.01954650878906,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1.022853970527649,
    textTransform: "uppercase"
  },
  View_0_15: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%")
  },
  ImageBackground_0_16: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  ImageBackground_0_17: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_0_18: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_19: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("91%")
  },
  ImageBackground_0_20: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%")
  },
  ImageBackground_0_21: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  ImageBackground_0_22: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%")
  },
  ImageBackground_0_23: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("42%")
  },
  View_0_24: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%")
  },
  ImageBackground_0_25: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_0_29: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_0_33: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("23%")
  },
  ImageBackground_0_37: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_0_41: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_0_45: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_49: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("49%")
  },
  ImageBackground_0_50: {
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
  ImageBackground_0_53: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_57: {
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
  ImageBackground_0_61: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  ImageBackground_0_65: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%")
  },
  View_0_68: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("49%")
  },
  ImageBackground_0_69: {
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
  ImageBackground_0_72: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_76: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("19%")
  },
  ImageBackground_0_80: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%")
  },
  ImageBackground_0_84: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%")
  },
  View_0_87: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  ImageBackground_0_88: {
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
  ImageBackground_0_91: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_95: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("48%")
  },
  View_0_98: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%")
  },
  ImageBackground_0_99: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_0_102: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_106: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_0_109: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("43%")
  },
  ImageBackground_0_110: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%")
  },
  ImageBackground_0_113: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_117: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_0_120: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%")
  },
  ImageBackground_0_121: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("56%")
  },
  ImageBackground_0_124: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_128: {
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
  View_0_131: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("64%")
  },
  ImageBackground_0_132: {
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
  ImageBackground_0_135: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_139: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%")
  },
  View_0_142: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%")
  },
  ImageBackground_0_143: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("12%")
  },
  ImageBackground_0_146: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_150: {
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
  View_0_153: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("14%")
  },
  ImageBackground_0_154: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_0_157: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_161: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%")
  },
  View_0_164: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("49%")
  },
  ImageBackground_0_165: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_0_168: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_172: {
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
  View_0_175: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("49%")
  },
  ImageBackground_0_176: {
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
  ImageBackground_0_179: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_183: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%")
  },
  View_0_186: {
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
  ImageBackground_0_187: {
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
  ImageBackground_0_194: {
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
  View_0_196: {
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
  View_0_201: {
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
  ImageBackground_0_199: {
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
  ImageBackground_0_200: {
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
  ImageBackground_0_202: {
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
  View_0_203: {
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
  Text_0_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  ImageBackground_0_204: {
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
