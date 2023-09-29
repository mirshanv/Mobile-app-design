import * as React from "react";
import { StyleSheet, View, Text,ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.view}>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={[styles.frameWrapper, styles.groupParentLayout]}>
            <View style={[styles.frameWrapper, styles.groupParentLayout]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-33.png")}
              />
              
              <Text style={[styles.text, styles.amcTypo]}>78%</Text>
            </View>
          </View>
          <View style={styles.groupView}>
            <View style={styles.projectNameParent}>
              <Text style={[styles.projectName, styles.jun2023Typo1]}>
                Project Name
              </Text>
              <Text style={[styles.companyName, styles.amcTypo]}>
                Company Name
              </Text>
            </View>
            <View style={[styles.frameParent, styles.parentLayout1]}>
              <View style={[styles.ellipseParent, styles.ellipseFlexBox]}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/ellipse-4.png")}
                />
                <Text style={[styles.amc, styles.amcTypo]}>AMC</Text>
              </View>
              <View style={[styles.ellipseGroup, styles.ellipseFlexBox]}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/ellipse-41.png")}
                />
                <Text style={[styles.amc, styles.amcTypo]}>Not Completed</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent1}>
        <View style={styles.groupParent2}>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/group-40.png")}
          />
          <Text style={[styles.job, styles.jobTypo]}>Job</Text>
          <Text style={[styles.cost, styles.jobTypo]}>Cost</Text>
          <Text style={[styles.workers, styles.jobTypo]}>Workers</Text>
          <View style={styles.overviewParent}>
            <Text style={[styles.overview, styles.textTypo2]}>Overview</Text>
            <View style={styles.groupInner} />
          </View>
        </View>
        <View style={styles.groupParent3}>
          <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupParent4, styles.groupParentPosition]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
              <View
                style={[styles.jun2023Parent, styles.sep2023ParentPosition]}
              >
                <Text style={[styles.jun2023, styles.jun2023Typo]}>
                  20 Jun 2023
                </Text>
                <Text style={[styles.awarded, styles.jun2023Typo]}>
                  Awarded
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
            <View style={[styles.groupChild1, styles.groupChildPosition]} />
            <View style={[styles.groupParent5, styles.groupParentPosition]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-49.png")}
              />
              <View
                style={[styles.sep2023Parent, styles.sep2023ParentPosition]}
              >
                <Text style={[styles.jun2023, styles.jun2023Typo]}>
                  7 Sep 2023
                </Text>
                <Text style={[styles.awarded, styles.jun2023Typo]}>
                  Expected
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.rectangleParent1, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <View style={[styles.groupParent6, styles.groupLayout1]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-60.png")}
              />
              <View style={[styles.sep2023Group, styles.groupLayout1]}>
                <Text style={[styles.jun2023, styles.jun2023Typo]}>
                  6 Sep 2023
                </Text>
                <Text style={[styles.awarded, styles.jun2023Typo]}>
                  Started
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.rectangleParent2, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild5, styles.groupChildPosition]} />
            <View style={[styles.groupParent5, styles.groupParentPosition]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-50.png")}
              />
              <View
                style={[styles.sep2023Parent, styles.sep2023ParentPosition]}
              >
                <Text style={[styles.jun2023, styles.jun2023Typo]}>
                  7 Sep 2023
                </Text>
                <Text style={[styles.awarded, styles.jun2023Typo]}>
                  Completed
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.jobDetailsParent}>
          <Text style={[styles.jobDetails, styles.jun2023Typo]}>
            Job Details
          </Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View style={styles.groupParent8}>
          <View style={styles.rectangleParent3}>
            <View style={[styles.groupChild7, styles.groupChildPosition]} />
            <View style={[styles.foundationParent, styles.parentPosition]}>
              <Text style={styles.foundation}>Foundation</Text>
              <View style={styles.frameGroup}>
                <View style={styles.ellipseFlexBox}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-42.png")}
                  />
                  <Text style={[styles.estimated, styles.textTypo2]}>
                    Estimated
                  </Text>
                </View>
                <View style={styles.ellipseFlexBox}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-43.png")}
                  />
                  <Text style={[styles.estimated, styles.textTypo2]}>
                    Actual
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameContainerLayout]}>
              <View
                style={[styles.ellipseParent2, styles.frameContainerLayout]}
              >
                <Image
                  style={[styles.frameChild2, styles.frameChildPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-3.png")}
                />
                <Image
                  style={styles.frameChild3}
                  contentFit="cover"
                  source={require("../assets/ellipse-2.png")}
                />
                <Text style={[styles.text1, styles.textTypo1]}>20%</Text>
              </View>
            </View>
            <View style={[styles.parent, styles.groupLayout]}>
              <Text style={[styles.text2, styles.textTypo2]}>3,000.0</Text>
              <Text style={[styles.text3, styles.textTypo]}>1,280.0</Text>
            </View>
          </View>
          <View style={styles.rectangleParent4}>
            <View style={[styles.groupChild8, styles.groupChildPosition]} />
            <View style={[styles.strucuringParent, styles.parentPosition]}>
              <Text style={styles.strucuring}>Strucuring</Text>
              <View style={styles.frameParent1}>
                <View style={styles.ellipseFlexBox}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-44.png")}
                  />
                  <Text style={[styles.estimated1, styles.textTypo2]}>
                    Estimated
                  </Text>
                </View>
                <View style={styles.ellipseFlexBox}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-43.png")}
                  />
                  <Text style={[styles.estimated1, styles.textTypo2]}>
                    Actual
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameContainerLayout]}>
              <View
                style={[styles.ellipseParent2, styles.frameContainerLayout]}
              >
                <Image
                  style={[styles.frameChild2, styles.frameChildPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-3.png")}
                />
                <Image
                  style={[styles.frameChild7, styles.frameChildPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-21.png")}
                />
                <Text style={[styles.text4, styles.textTypo1]}>40%</Text>
              </View>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text5, styles.textTypo2]}>3,000.0</Text>
              <Text style={[styles.text6, styles.textTypo]}>1,280.0</Text>
            </View>
          </View>
          <View style={styles.rectangleParent4}>
            <View style={[styles.groupChild8, styles.groupChildPosition]} />
            <View style={[styles.paintingParent, styles.parentPosition]}>
              <Text style={styles.painting}>Painting</Text>
              <View style={styles.frameParent2}>
                <View style={styles.ellipseFlexBox}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-45.png")}
                  />
                  <Text style={[styles.estimated1, styles.textTypo2]}>
                    Estimated
                  </Text>
                </View>
                <View style={styles.ellipseFlexBox}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-43.png")}
                  />
                  <Text style={[styles.estimated1, styles.textTypo2]}>
                    Actual
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameContainerLayout]}>
              <View
                style={[styles.ellipseParent2, styles.frameContainerLayout]}
              >
                <Image
                  style={[styles.frameChild2, styles.frameChildPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-3.png")}
                />
                <Image
                  style={[styles.frameChild7, styles.frameChildPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Text style={[styles.text4, styles.textTypo1]}>40%</Text>
              </View>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text5, styles.textTypo2]}>3,000.0</Text>
              <Text style={[styles.text6, styles.textTypo]}>1,280.0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerParent}>
        <View style={[styles.header, styles.headerLayout]}>
          <View style={[styles.rectangleParent6, styles.headerLayout]}>
            <View style={[styles.groupChild10, styles.headerLayout]} />
            <View style={[styles.arrowChevronLeftParent, styles.parentLayout1]}>
              <Image
                style={[styles.arrowChevronLeft, styles.menuLayout]}
                contentFit="cover"
                source={require("../assets/arrow--chevron-left.png")}
              />
              <View style={[styles.projectDetailsParent, styles.parentLayout1]}>
                <Text style={[styles.projectDetails, styles.amcTypo]}>
                  Project Details
                </Text>
                <Image
                  style={[styles.menuMenuAlt01, styles.menuLayout]}
                  contentFit="cover"
                  source={require("../assets/menu--menu-alt-01.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.statusPosition}>
          <View style={[styles.statusBarOnLight, styles.statusPosition]}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <View style={styles.timeStyle}>
              <Text style={styles.text10}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 133,
    width: 345,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
  },
  groupParentLayout: {
    height: 107,
    position: "absolute",
  },
  amcTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  jun2023Typo1: {
    fontSize: FontSize.size_xl,
    top: 0,
  },
  parentLayout1: {
    height: 24,
    position: "absolute",
  },
  ellipseFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  jobTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 140,
    width: 165,
  },
  groupChildPosition: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParentPosition: {
    height: 114,
    left: 13,
    top: 13,
  },
  sep2023ParentPosition: {
    top: 63,
    height: 51,
    left: 0,
  },
  jun2023Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 180,
    height: 140,
    width: 165,
    position: "absolute",
  },
  groupLayout1: {
    width: 109,
    position: "absolute",
  },
  parentPosition: {
    left: 93,
    position: "absolute",
  },
  frameContainerLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  frameChildPosition: {
    left: 2,
    top: 2,
    position: "absolute",
  },
  textTypo1: {
    letterSpacing: -0.3,
    top: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout: {
    height: 42,
    width: 52,
    left: 279,
    position: "absolute",
  },
  textTypo: {
    left: 4,
    top: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  headerLayout: {
    height: 56,
    width: 375,
    left: 0,
    position: "absolute",
  },
  menuLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusPosition: {
    height: 44,
    right: "0%",
    left: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.02)",
    elevation: 44,
    shadowRadius: 44,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    height: 133,
    width: 345,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  frameChild: {
    top: -19,
    left: -19,
    width: 145,
    height: 145,
    position: "absolute",
  },
  text: {
    left: 29,
    fontSize: 24,
    letterSpacing: -0.5,
    textAlign: "center",
    color: Color.colorBlack,
    top: 36,
    position: "absolute",
  },
  frameWrapper: {
    width: 107,
    left: 0,
    top: 0,
  },
  projectName: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  companyName: {
    top: 30,
    color: "#989898",
    fontSize: FontSize.size_base,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  projectNameParent: {
    width: 139,
    height: 54,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    width: 12,
    height: 12,
  },
  amc: {
    marginLeft: 4,
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    textAlign: "center",
  },
  ellipseParent: {
    left: 148,
    top: 0,
    position: "absolute",
  },
  ellipseGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 64,
    width: 203,
    left: 0,
  },
  groupView: {
    left: 116,
    height: 88,
    width: 203,
    top: 9,
    position: "absolute",
  },
  groupParent: {
    width: 319,
    left: 13,
    top: 13,
    height: 107,
  },
  rectangleParent: {
    top: 122,
    left: 15,
  },
  groupItem: {
    height: 1,
    top: 27,
    left: 0,
    width: 345,
    position: "absolute",
  },
  job: {
    left: 130,
  },
  cost: {
    left: 195,
  },
  workers: {
    left: 267,
  },
  overview: {
    left: 14,
    color: Color.colorMediumslateblue_100,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    borderTopLeftRadius: Border.br_10xs,
    borderTopRightRadius: Border.br_10xs,
    backgroundColor: Color.colorMediumslateblue_100,
    height: 3,
    top: 21,
    width: 96,
    left: 0,
    position: "absolute",
  },
  overviewParent: {
    width: 96,
    top: 3,
    height: 24,
    left: 0,
    position: "absolute",
  },
  groupParent2: {
    height: 28,
    left: 0,
    top: 0,
    width: 345,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#e9553d",
    shadowColor: "rgba(233, 85, 61, 0.14)",
    height: 140,
    width: 165,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    elevation: 44,
    shadowRadius: 44,
  },
  groupIcon: {
    width: 51,
    height: 51,
    left: 0,
    top: 0,
    position: "absolute",
  },
  jun2023: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    top: 0,
  },
  awarded: {
    color: Color.colorWhite,
    top: 27,
    fontSize: FontSize.size_base,
  },
  jun2023Parent: {
    width: 120,
    position: "absolute",
  },
  groupParent4: {
    width: 120,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: "#f4b742",
    shadowColor: "rgba(244, 183, 66, 0.14)",
    height: 140,
    width: 165,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    elevation: 44,
    shadowRadius: 44,
  },
  sep2023Parent: {
    width: 107,
    position: "absolute",
  },
  groupParent5: {
    width: 107,
    position: "absolute",
  },
  rectangleContainer: {
    top: 155,
    left: 0,
    position: "absolute",
  },
  groupChild3: {
    backgroundColor: "#6a71fe",
    shadowColor: "rgba(106, 113, 254, 0.14)",
    height: 140,
    width: 165,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    elevation: 44,
    shadowRadius: 44,
  },
  sep2023Group: {
    top: 63,
    height: 51,
    left: 0,
  },
  groupParent6: {
    height: 114,
    left: 13,
    top: 13,
  },
  rectangleParent1: {
    top: 0,
  },
  groupChild5: {
    backgroundColor: "#26a4ff",
    shadowColor: "rgba(38, 164, 255, 0.14)",
    height: 140,
    width: 165,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    elevation: 44,
    shadowRadius: 44,
  },
  rectangleParent2: {
    top: 155,
  },
  groupParent3: {
    top: 48,
    height: 295,
    left: 0,
    width: 345,
    position: "absolute",
  },
  groupParent1: {
    top: 277,
    height: 343,
    width: 345,
    left: 15,
    position: "absolute",
  },
  jobDetails: {
    fontSize: FontSize.size_xl,
    top: 0,
    color: Color.colorBlack,
  },
  viewAll: {
    color: "#5e5e5e",
    left: 279,
    textAlign: "left",
    top: 3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  jobDetailsParent: {
    width: 342,
    height: 30,
  },
  groupChild7: {
    backgroundColor: "#6930f3",
    shadowColor: "rgba(105, 48, 243, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    borderRadius: Border.br_base,
    width: 345,
  },
  foundation: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  estimated: {
    color: Color.colorWhite,
    marginLeft: 4,
  },
  frameGroup: {
    top: 26,
    left: 0,
    position: "absolute",
  },
  foundationParent: {
    width: 117,
    height: 68,
    top: 10,
    left: 93,
  },
  frameChild2: {
    width: 66,
    height: 66,
  },
  frameChild3: {
    left: 7,
    width: 28,
    height: 20,
    top: 2,
    position: "absolute",
  },
  text1: {
    left: 19,
    color: Color.colorWhite,
  },
  ellipseParent2: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frameContainer: {
    top: 8,
    left: 10,
  },
  text2: {
    color: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text3: {
    color: Color.colorWhite,
  },
  parent: {
    top: 36,
  },
  rectangleParent3: {
    height: 88,
    width: 345,
  },
  groupChild8: {
    height: 88,
    backgroundColor: Color.colorWhite,
    width: 345,
  },
  strucuring: {
    height: 22,
    justifyContent: "center",
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    width: 107,
    left: 0,
    top: 0,
    position: "absolute",
  },
  estimated1: {
    marginLeft: 4,
    color: Color.colorGray,
  },
  frameParent1: {
    top: 27,
    left: 0,
    position: "absolute",
  },
  strucuringParent: {
    height: 69,
    top: 10,
    left: 93,
    width: 107,
  },
  frameChild7: {
    width: 33,
    height: 50,
  },
  text4: {
    left: 18,
    color: Color.colorBlack,
  },
  text5: {
    color: Color.colorGray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text6: {
    color: Color.colorGray,
  },
  group: {
    top: 37,
  },
  rectangleParent4: {
    marginTop: 13,
    height: 88,
    width: 345,
  },
  painting: {
    display: "flex",
    lineHeight: 20,
    textAlign: "left",
    alignItems: "center",
    height: 24,
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    width: 107,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParent2: {
    top: 28,
    left: 0,
    position: "absolute",
  },
  paintingParent: {
    height: 70,
    top: 9,
    width: 107,
  },
  groupParent8: {
    marginTop: 14,
  },
  frameView: {
    top: 642,
    alignItems: "flex-end",
    left: 15,
    position: "absolute",
  },
  groupChild10: {
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  arrowChevronLeft: {
    left: 0,
  },
  projectDetails: {
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuMenuAlt01: {
    left: 207,
  },
  projectDetailsParent: {
    left: 114,
    width: 231,
    top: 0,
  },
  arrowChevronLeftParent: {
    top: 16,
    width: 345,
    left: 15,
  },
  rectangleParent6: {
    top: 0,
  },
  header: {
    top: 44,
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text10: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    left: "0%",
    justifyContent: "center",
    display: "flex",
    letterSpacing: -0.3,
    alignItems: "flex-end",
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "27.27%",
    right: "80%",
    bottom: "25%",
    left: "5.6%",
    position: "absolute",
  },
  statusBarOnLight: {
    backgroundColor: Color.colorWhite,
  },
  headerParent: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  view: {
    backgroundColor: "rgba(247, 247, 247, 0.97)",
    flex: 1,
    height: 1037,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Frame;
