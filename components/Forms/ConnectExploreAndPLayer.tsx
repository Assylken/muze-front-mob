import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { onGestureEvent, timing, withSpring } from "react-native-redash";
import AudioPlayerScreen from "../../screens/AudioPlayerScreen";

const {
  Value,
  interpolateNode,
  useCode,
  block,
  set,
  cond,
  not,
  clockRunning,
  Clock,
} = Animated;

const { height } = Dimensions.get("window");
const TABBAR_HEIGHT = getBottomSpace() + 80;
const MINIMIZED_PLAYER_HEIGHT = 48;
const SNAP_TOP = 0;
const SNAP_BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT;

const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1,
};

const ConnectExploreAndPLayer = (props: any) => {
  const { currentSong, onAudioPress } = props;

  const { div } = styles;
  //const [up, setUp] = useState(false);
  const translationY = new Value(0);
  const velocityY = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const offset = new Value(SNAP_BOTTOM);
  const goUp: Animated.Value<0 | 1> = new Value(0);
  const goDown: Animated.Value<0 | 1> = new Value(0);

  const gestureHandler = onGestureEvent({
    translationY,
    state,
    velocityY,
  });

  const translateY = withSpring({
    state,
    offset,
    value: translationY,
    velocity: velocityY,
    snapPoints: [SNAP_TOP, SNAP_BOTTOM],
    config,
  });

  const opacity = interpolateNode(translateY, {
    inputRange: [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
    outputRange: [0, 1],
  });
  const clock = new Clock();
  useCode(
    () =>
      block([
        cond(goUp, [
          set(
            offset,
            timing({
              clock,
              from: offset,
              to: SNAP_TOP,
            })
          ),
          cond(not(clockRunning(clock)), [set(goUp, 0)]),
        ]),
        cond(goDown, [
          set(
            offset,
            timing({
              clock,
              from: offset,
              to: SNAP_BOTTOM,
            })
          ),
          cond(not(clockRunning(clock)), [set(goDown, 0)]),
        ]),
      ]),
    []
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        alignContent: "center",
        //zIndex: -1,
        position: "absolute",
      }}
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{ width: "100%", height: "100%", transform: [{ translateY }] }}
        >
          <AudioPlayerScreen
            onPress={() => {
              console.log("ASSYLKEN");
              goDown.setValue(1);
            }}
          />

          <Animated.View
            style={{
              opacity,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT,
            }}
          >
            <TouchableOpacity
              onPress={() => goUp.setValue(1)}
              style={tw`flex-1 pt-4 w-100%`}
            >
              <View
                style={[
                  tw`flex flex-row p-2 items-center border border-gray-300 rounded-lg`,
                  div,
                ]}
              >
                <Image
                  source={
                    currentSong.image_cid
                      ? {
                          uri: `https://chris-anatalio.infura-ipfs.io/ipfs/${currentSong.image_cid}`,
                        }
                      : require("../../assets/images/song_placeholder.png")
                  }
                  style={tw`w-12 h-12 rounded-2xl`}
                />
                <View>
                  <Text style={tw`text-lg`}>
                    {currentSong && currentSong.name}
                  </Text>
                  <Text style={tw`text-lg`}>{!currentSong && "Undefined"}</Text>
                </View>

                <View style={tw`flex flex-row w-auto items-center`}>
                  <TouchableOpacity onPress={onAudioPress} style={tw`p-2`}>
                    <FontAwesome name="play" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`p-2`}>
                    <AntDesign name="forward" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  div: {
    justifyContent: "space-between",
  },
});

export default ConnectExploreAndPLayer;
