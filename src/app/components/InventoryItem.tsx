import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface InventoryItemProps {
  name: string;
  quantity: number;
  needToBuy: boolean;
  onUpdate: (newQuantity: number) => void;
  onDelete: () => void;
}

const InventoryItem = ({ 
  name, 
  quantity, 
  needToBuy,
  onUpdate,
  onDelete 
}: InventoryItemProps) => {
  return (
    <View className="flex-row items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
      <View className="flex-1">
        <Text className="text-lg font-semibold">{name}</Text>
        <View className="flex-row items-center mt-1">
          <Text className={`text-sm ${needToBuy ? 'text-red-500' : 'text-green-500'}`}>
            {needToBuy ? 'ต้องซื้อเพิ่ม' : 'มีเพียงพอ'}
          </Text>
        </View>
      </View>
      
      <View className="flex-row items-center">
        <TouchableOpacity 
          className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
          onPress={() => onUpdate(quantity - 1)}
        >
          <Text className="text-lg">-</Text>
        </TouchableOpacity>
        
        <Text className="mx-4 text-lg">{quantity}</Text>
        
        <TouchableOpacity 
          className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center"
          onPress={() => onUpdate(quantity + 1)}
        >
          <Text className="text-lg text-white">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InventoryItem;