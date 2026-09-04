import React, { useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Category } from '@/data/mockData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width * 0.72, 290);
const CARD_GAP = 18;

type CategoryCarouselProps = {
  categories: Category[];
  onSelect: (category: Category) => void;
};

export function CategoryCarousel({ categories, onSelect }: CategoryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemWidth = useMemo(() => CARD_WIDTH, []);

  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={(item) => item.id}
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth + CARD_GAP}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        onScroll={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.round(offset / (itemWidth + CARD_GAP));
          setActiveIndex(index);
        }}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const isActive = index === activeIndex;

          return (
            <Pressable
              key={item.id}
              onPress={() => onSelect(item)}
              style={[
                styles.card,
                {
                  width: itemWidth,
                  opacity: isActive ? 1 : 0.72,
                  transform: [{ scale: isActive ? 1 : 0.9 }],
                },
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
              <View style={[StyleSheet.absoluteFill, styles.overlay, { backgroundColor: item.accent + '22' }]} />
              <View style={styles.textWrap}>
                <Text style={styles.label}>{item.subtitle}</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  listContent: {
    paddingHorizontal: (width - CARD_WIDTH) / 2,
    paddingVertical: 10,
  },
  card: {
    height: 360,
    borderRadius: 28,
    overflow: 'hidden',
    marginHorizontal: CARD_GAP / 2,
    backgroundColor: '#1B1B1D',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
  },
  textWrap: {
    position: 'absolute',
    left: 22,
    right: 22,
    bottom: 24,
  },
  label: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  name: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
});
