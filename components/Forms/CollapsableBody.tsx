import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

const CollapsableBody = (props) => {
  const { title, mainText } = props;
  return (
    <Collapse
      style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
    >
      <CollapseHeader>
        <View style={tw`w-full h-7`}>
          <Text style={tw`font-bold text-4`}>{title}</Text>
          <AntDesign
            name="caretdown"
            size={18}
            color="#5C25F9"
            style={tw`absolute right-0`}
          />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Text>{mainText}</Text>
      </CollapseBody>
    </Collapse>
  );
};

export default CollapsableBody;
