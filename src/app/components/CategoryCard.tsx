import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const categoryIcons = {
  cleaning: 'water-outline',
  food: 'fast-food-outline',
  bathroom: 'water-outline',
  electronics: 'hardware-chip-outline',
  clothes: 'shirt-outline',
  other: 'cube-outline'
};

export const categoryColors = {
  cleaning: 'bg-blue-100',
  food: 'bg-green-100',
  bathroom: 'bg-purple-100',
  electronics: 'bg-yellow-100',
  clothes: 'bg-pink-100',
  other: 'bg-gray-100'
};

export const CategoryCard = ({ category, count, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className={`${categoryColors[category]} p-4 rounded-xl mb-3`}
    >
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-bold capitalize">{category}</Text>
          <Text className="text-gray-600">{count} รายการ</Text>
        </View>
        <Ionicons 
          name={categoryIcons[category]} 
          size={32} 
          color="#3B82F6" 
        />
      </View>
    </TouchableOpacity>
  );
}; 