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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7113/4256/506af2bf5d0fb381eaab07c7d8e7befb"
        }}
        style={styles.ImageBackground_0_1213}
      />
      <View style={styles.View_0_1214}>
        <View style={styles.View_0_1216}>
          <Text style={styles.Text_0_1216}>Back</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d679/9dbc/631ee826887aee53482842b4767a36db"
          }}
          style={styles.ImageBackground_0_1217}
        />
        <View style={styles.View_0_1222}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a58/2d20/d8c699829bf32c133c0177b3ad970214"
            }}
            style={styles.ImageBackground_0_1220}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6c/4d1e/e7f24fdefca0c7375c6c73bf79c58ebd"
            }}
            style={styles.ImageBackground_0_1221}
          />
        </View>
      </View>
      <View style={styles.View_0_1223}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c5/c815/40eecd58aa737f5bfda345c01593e900"
          }}
          style={styles.ImageBackground_0_1224}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1c/cd75/b1708d55a875b160c1d97e02af309d7b"
          }}
          style={styles.ImageBackground_0_1231}
        />
        <View style={styles.View_0_1233}>
          <Text style={styles.Text_0_1233}>9:41</Text>
        </View>
        <View style={styles.View_0_1234}>
          <View style={styles.View_0_1239}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3e/3a3f/757485a7d528fab5d97bf209aa4a29df"
              }}
              style={styles.ImageBackground_0_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a490/3515/11d3d28ef790b8caa56cd379a515ac91"
              }}
              style={styles.ImageBackground_0_1238}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8778/7931/e105f7ff1edbc7ff434855ae0a6a565c"
            }}
            style={styles.ImageBackground_0_1240}
          />
        </View>
      </View>
      <View style={styles.View_0_1241}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afaf/3cba/5b6aa90247952a9ace42060152b9cbeb"
          }}
          style={styles.ImageBackground_0_1242}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ae/daa1/34ca6a59f939ea9bdae38dfc29b72ccd"
          }}
          style={styles.ImageBackground_0_1243}
        />
        <View style={styles.View_0_1252}>
          <View style={styles.View_0_1250}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb73/152e/627726b1571c1474d67c72e66ebd3751"
              }}
              style={styles.ImageBackground_0_1246}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eb7/cbf1/a7902df33092de168cd55ec9409ea575"
              }}
              style={styles.ImageBackground_0_1249}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f59d/0a9a/32edd75d2220084382fa78d472b1caa4"
            }}
            style={styles.ImageBackground_0_1251}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db5d/d869/baa6ef14af66578a0e560b57b3585b1e"
            }}
            style={styles.ImageBackground_0_1253}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1da/fc91/5758b287ccb3bb87423c5917ef7ded21"
          }}
          style={styles.ImageBackground_0_1256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc6a/2d27/b6c7d541fa43d19fc0bbf5f1e435c1eb"
          }}
          style={styles.ImageBackground_0_1259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4621/ef90/ce1d8276bcc38d383f666d50ff2ff722"
          }}
          style={styles.ImageBackground_0_1268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3c7/08a0/7b5a4bd8220da388948fb624f8344172"
          }}
          style={styles.ImageBackground_0_1275}
        />
      </View>
      <View style={styles.View_0_1278}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/56f6/dd0f4d0688e1db1e3f5258bd4b9a782e"
          }}
          style={styles.ImageBackground_0_1279}
        />
        <View style={styles.View_0_1280}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b42/cd9c/7cfd064805cd70b6962a51f6dcaa6b6a"
            }}
            style={styles.ImageBackground_0_1282}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5c/3ff7/4ec902e21c8a49890c5b19651fe30c42"
            }}
            style={styles.ImageBackground_0_1281}
          />
          <View style={styles.View_0_1286}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5a/7d6b/2ee4264e1bc4afbcdda7b16209533063"
              }}
              style={styles.ImageBackground_0_1283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5a/7d6b/2ee4264e1bc4afbcdda7b16209533063"
              }}
              style={styles.ImageBackground_0_1284}
            />
            <View style={styles.View_0_1285} />
          </View>
        </View>
        <View style={styles.View_0_1287}>
          <Text style={styles.Text_0_1287}>Mark Kirchmier</Text>
        </View>
        <View style={styles.View_0_1288}>
          <Text style={styles.Text_0_1288}>bookmarked 1 days ago</Text>
        </View>
      </View>
      <View style={styles.View_0_1289}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/56f6/dd0f4d0688e1db1e3f5258bd4b9a782e"
          }}
          style={styles.ImageBackground_0_1290}
        />
        <View style={styles.View_0_1291}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b42/cd9c/7cfd064805cd70b6962a51f6dcaa6b6a"
            }}
            style={styles.ImageBackground_0_1293}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5c/3ff7/4ec902e21c8a49890c5b19651fe30c42"
            }}
            style={styles.ImageBackground_0_1292}
          />
          <View style={styles.View_0_1297}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7ff/398c/330df0a5ea338f6638a0d075fcde1206"
              }}
              style={styles.ImageBackground_0_1294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7ff/398c/330df0a5ea338f6638a0d075fcde1206"
              }}
              style={styles.ImageBackground_0_1295}
            />
            <View style={styles.View_0_1296} />
          </View>
        </View>
        <View style={styles.View_0_1298}>
          <Text style={styles.Text_0_1298}>Randy Newell</Text>
        </View>
        <View style={styles.View_0_1299}>
          <Text style={styles.Text_0_1299}>bookmarked 2 days ago</Text>
        </View>
      </View>
      <View style={styles.View_0_1300}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/56f6/dd0f4d0688e1db1e3f5258bd4b9a782e"
          }}
          style={styles.ImageBackground_0_1301}
        />
        <View style={styles.View_0_1302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b42/cd9c/7cfd064805cd70b6962a51f6dcaa6b6a"
            }}
            style={styles.ImageBackground_0_1304}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5c/3ff7/4ec902e21c8a49890c5b19651fe30c42"
            }}
            style={styles.ImageBackground_0_1303}
          />
          <View style={styles.View_0_1308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d791/59c9/b39885fffc61275bc3d909af75527dd5"
              }}
              style={styles.ImageBackground_0_1305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d791/59c9/b39885fffc61275bc3d909af75527dd5"
              }}
              style={styles.ImageBackground_0_1306}
            />
            <View style={styles.View_0_1307} />
          </View>
        </View>
        <View style={styles.View_0_1309}>
          <Text style={styles.Text_0_1309}>Debra Miller</Text>
        </View>
        <View style={styles.View_0_1310}>
          <Text style={styles.Text_0_1310}>bookmarked 2 days ago</Text>
        </View>
      </View>
      <View style={styles.View_0_1311}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/56f6/dd0f4d0688e1db1e3f5258bd4b9a782e"
          }}
          style={styles.ImageBackground_0_1312}
        />
        <View style={styles.View_0_1313}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b42/cd9c/7cfd064805cd70b6962a51f6dcaa6b6a"
            }}
            style={styles.ImageBackground_0_1315}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5c/3ff7/4ec902e21c8a49890c5b19651fe30c42"
            }}
            style={styles.ImageBackground_0_1314}
          />
          <View style={styles.View_0_1319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aab1/9a97/141fc3ff049bf3fc0a2786f7ecbf2e1a"
              }}
              style={styles.ImageBackground_0_1316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aab1/9a97/141fc3ff049bf3fc0a2786f7ecbf2e1a"
              }}
              style={styles.ImageBackground_0_1317}
            />
            <View style={styles.View_0_1318} />
          </View>
        </View>
        <View style={styles.View_0_1320}>
          <Text style={styles.Text_0_1320}>Adam</Text>
        </View>
        <View style={styles.View_0_1321}>
          <Text style={styles.Text_0_1321}>bookmarked 3 days ago</Text>
        </View>
      </View>
      <View style={styles.View_0_1322}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/56f6/dd0f4d0688e1db1e3f5258bd4b9a782e"
          }}
          style={styles.ImageBackground_0_1323}
        />
        <View style={styles.View_0_1324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b42/cd9c/7cfd064805cd70b6962a51f6dcaa6b6a"
            }}
            style={styles.ImageBackground_0_1326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5c/3ff7/4ec902e21c8a49890c5b19651fe30c42"
            }}
            style={styles.ImageBackground_0_1325}
          />
          <View style={styles.View_0_1330}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d64/1e40/5308746a6758cead79efbd12a45ce82e"
              }}
              style={styles.ImageBackground_0_1327}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d64/1e40/5308746a6758cead79efbd12a45ce82e"
              }}
              style={styles.ImageBackground_0_1328}
            />
            <View style={styles.View_0_1329} />
          </View>
        </View>
        <View style={styles.View_0_1331}>
          <Text style={styles.Text_0_1331}>Leilani</Text>
        </View>
        <View style={styles.View_0_1332}>
          <Text style={styles.Text_0_1332}>bookmarked 10 days ago</Text>
        </View>
      </View>
      <View style={styles.View_0_1333}>
        <Text style={styles.Text_0_1333}>My bookmarks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e4/18f3/f3554ebfdb988212ee70bd4f918753da"
        }}
        style={styles.ImageBackground_0_1334}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("333%") },
  ImageBackground_0_1213: {
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
  View_0_1214: {
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
  View_0_1216: {
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
  Text_0_1216: {
    color: "rgba(40, 216, 161, 1)",
    fontSize: 40.02036666870117,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1217: {
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
  View_0_1222: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%")
  },
  ImageBackground_0_1220: {
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
  ImageBackground_0_1221: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1223: {
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
  ImageBackground_0_1224: {
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
  ImageBackground_0_1231: {
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
  View_0_1233: {
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
  Text_0_1233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.8999999761581421,
    textTransform: "none"
  },
  View_0_1234: {
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
  View_0_1239: {
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
  ImageBackground_0_1237: {
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
  ImageBackground_0_1238: {
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
  ImageBackground_0_1240: {
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
  View_0_1241: {
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
  ImageBackground_0_1242: {
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
  ImageBackground_0_1243: {
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
  View_0_1252: {
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
  View_0_1250: {
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
  ImageBackground_0_1246: {
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
  ImageBackground_0_1249: {
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
  ImageBackground_0_1251: {
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
  ImageBackground_0_1253: {
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
  ImageBackground_0_1256: {
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
  ImageBackground_0_1259: {
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
  ImageBackground_0_1268: {
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
  ImageBackground_0_1275: {
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
  View_0_1278: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("56%")
  },
  ImageBackground_0_1279: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1280: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%")
  },
  ImageBackground_0_1282: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1281: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  View_0_1286: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1283: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%")
  },
  ImageBackground_0_1284: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%")
  },
  View_0_1285: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1287: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_1287: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 48.02443313598633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1288: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_0_1288: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 32.01629638671875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1289: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("98%")
  },
  ImageBackground_0_1290: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1291: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%")
  },
  ImageBackground_0_1293: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1292: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  View_0_1297: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1294: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%")
  },
  ImageBackground_0_1295: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%")
  },
  View_0_1296: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1298: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_1298: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 48.02443313598633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1299: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_0_1299: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 32.01629638671875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1300: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("141%")
  },
  ImageBackground_0_1301: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1302: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%")
  },
  ImageBackground_0_1304: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1303: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  View_0_1308: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1305: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("-4%")
  },
  ImageBackground_0_1306: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("-4%")
  },
  View_0_1307: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("-4%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1309: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_1309: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 48.02443313598633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1310: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_0_1310: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 32.01629638671875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1311: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("183%")
  },
  ImageBackground_0_1312: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1313: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%")
  },
  ImageBackground_0_1315: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1314: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  View_0_1319: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1316: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("-3%")
  },
  ImageBackground_0_1317: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("-3%")
  },
  View_0_1318: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("-3%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1320: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_1320: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 48.02443313598633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1321: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_0_1321: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 32.01629638671875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1322: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("224%")
  },
  ImageBackground_0_1323: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1324: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%")
  },
  ImageBackground_0_1326: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1325: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  View_0_1330: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1327: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  ImageBackground_0_1328: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%")
  },
  View_0_1329: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_1331: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_0_1331: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 48.02443313598633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1332: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_0_1332: {
    color: "rgba(114, 125, 140, 1)",
    fontSize: 32.01629638671875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1333: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_0_1333: {
    color: "rgba(13, 13, 13, 1)",
    fontSize: 80.04074096679688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1334: {
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
