import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const HistoryItem = ({ item }) => {
  const getIcon = () => {
    if (item.type === 'add') return 'add-circle';
    if (item.type === 'update') return 'create';
    return 'remove-circle';
  };

  const getColor = () => {
    if (item.type === 'add') return 'text-green-500';
    if (item.type === 'update') return 'text-blue-500';
    return 'text-red-500';
  };

  return (
    <View className="bg-white p-4 rounded-xl mb-3">
      <View className="flex-row items-center">
        <Ionicons 
          name={getIcon()} 
          size={24} 
          className={getColor()} 
        />
        <View className="ml-3">
          <Text className="font-medium">{item.name}</Text>
          <Text className="text-gray-500">
            {item.type === 'add' ? 'เพิ่ม' : 
             item.type === 'update' ? 'อัพเดท' : 'ลบ'} 
            เมื่อ {new Date(item.date).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </View>
  );
}; 