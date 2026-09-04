import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PreferenceOption } from '@/data/mockData';

type PreferenceSelectorProps = {
  title: string;
  options: PreferenceOption[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function PreferenceSelector({
  title,
  options,
  selected,
  onToggle,
}: PreferenceSelectorProps) {
  return (
    <View style={styles.group}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionRow}>
        {options.map((option) => {
          const isSelected = selected.includes(option.id);

          return (
            <Pressable
              key={option.id}
              onPress={() => onToggle(option.id)}
              style={[styles.chip, isSelected && styles.chipSelected]}
            >
              <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 28,
  },
  title: {
    color: '#1E1E1F',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#F5F1EE',
    borderWidth: 1,
    borderColor: '#E8E4E0',
  },
  chipSelected: {
    backgroundColor: '#1E1E1F',
    borderColor: '#1E1E1F',
  },
  chipText: {
    color: '#2A2A2A',
    fontSize: 14,
    fontWeight: '600',
  },
  chipTextSelected: {
    color: '#fff',
  },
});
