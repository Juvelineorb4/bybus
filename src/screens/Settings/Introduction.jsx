import React, { useState, useRef } from "react";
import { FlatList, View, Animated, ScrollView } from "react-native";
import strip from "@/utils/constants/strip";
import StripItem from "@/components/StripItem";
import Paginator from "@/components/Paginator";
import styles from "@/utils/styles/Strip.module.css";

const Introduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const stripsRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Animated.FlatList
          data={strip}
          renderItem={({ item }) => <StripItem item={item} button={false} />}
          horizontal
          showsHorizontalScrollIndicator
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
      <Paginator data={strip} scrollX={scrollX} />

      </View>
    </ScrollView>
  );
};

export default Introduction;
