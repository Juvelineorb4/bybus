import React, { useState, useRef } from "react";
import { FlatList, View, Animated } from "react-native";
import styles from "@/utils/styles/Strip.module.css";
import strip from "@/utils/constants/strip";
import StripItem from "@/components/StripItem";
import Paginator from "@/components/Paginator";

const Strip = () => {
  const global = require('@/utils/styles/global.js');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const stripsRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={[styles.container, global.bgWhite]}>
      <View style={{flex: 3}}>
        <Animated.FlatList
          data={strip}
          renderItem={({ item }) => <StripItem item={item} />}
          horizontal
          // showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig.current}
          scrollEventThrottle={32}
          ref={stripsRef}
        />
      </View>
      <Paginator data={strip} scrollX={scrollX} />
    </View>
  );
};

export default Strip;
