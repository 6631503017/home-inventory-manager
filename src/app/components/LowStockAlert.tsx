import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const LowStockAlert = ({ item }) => {
  const isLowStock = item.quantity <= 2;
  
  if (!isLowStock) return null;

  return (
    <View className="bg-red-50 p-3 rounded-lg mb-3">
      <View className="flex-row items-center">
        <Ionicons name="alert-circle" size={24} color="#EF4444" />
        <Text className="ml-2 text-red-600 font-medium">
          {item.name} เหลือน้อยแล้ว!
        </Text>
      </View>
      <Text className="text-red-500 mt-1">
        เหลือเพียง {item.quantity} ชิ้น
      </Text>
    </View>
  );
}; 