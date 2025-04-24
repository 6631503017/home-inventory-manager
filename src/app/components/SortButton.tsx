import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export const SortButton = ({ onSort }) => {
  const [sortBy, setSortBy] = useState('name');

  const handleSort = (type) => {
    setSortBy(type);
    onSort(type);
  };

  return (
    <View className="flex-row space-x-2">
      <TouchableOpacity
        className={`p-2 rounded-lg ${
          sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-200'
        }`}
        onPress={() => handleSort('name')}
      >
        <Text className={sortBy === 'name' ? 'text-white' : 'text-gray-600'}>
          เรียงตามชื่อ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`p-2 rounded-lg ${
          sortBy === 'quantity' ? 'bg-blue-500' : 'bg-gray-200'
        }`}
        onPress={() => handleSort('quantity')}
      >
        <Text className={sortBy === 'quantity' ? 'text-white' : 'text-gray-600'}>
          เรียงตามจำนวน
        </Text>
      </TouchableOpacity>
    </View>
  );
}; 