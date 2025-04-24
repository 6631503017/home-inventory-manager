import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import mockItems from '../constants/mockData';

const categoryColors = {
  cleaning: 'bg-blue-100',
  food: 'bg-green-100',
  bathroom: 'bg-purple-100',
  electronics: 'bg-yellow-100',
  clothes: 'bg-pink-100',
  other: 'bg-gray-100'
};

const categoryIcons = {
  cleaning: 'water-outline',
  food: 'fast-food-outline',
  bathroom: 'water-outline',
  electronics: 'hardware-chip-outline',
  clothes: 'shirt-outline',
  other: 'cube-outline'
};

export default function InventoryScreen() {
  const [items, setItems] = useState(mockItems);
  const [isAdding, setIsAdding] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('name');

  const handleSort = (type) => {
    setSortBy(type);
    const sortedItems = [...items].sort((a, b) => {
      if (type === 'name') return a.name.localeCompare(b.name);
      return a.quantity - b.quantity;
    });
    setItems(sortedItems);
  };

  const addNewItem = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (newItemName.trim()) {
      const newItem = {
        id: Date.now().toString(),
        name: newItemName,
        quantity: 1,
        category: selectedCategory || 'other',
        needToBuy: false,
        lastUpdated: new Date(),
      };
      setItems([...items, newItem]);
      setNewItemName('');
      setIsAdding(false);
    }
  };

  const updateItem = (id: string, newQuantity: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Math.max(0, newQuantity),
          needToBuy: newQuantity <= 1,
          lastUpdated: new Date(),
        };
      }
      return item;
    }));
  };

  const deleteItem = (id: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert(
      "ยืนยันการลบ",
      "คุณแน่ใจหรือไม่ที่จะลบรายการนี้?",
      [
        { text: "ยกเลิก", style: "cancel" },
        { 
          text: "ลบ",
          style: "destructive",
          onPress: () => setItems(items.filter(item => item.id !== id))
        }
      ]
    );
  };

  const SwipeableItem = ({ item }) => {
    const renderRightActions = (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });

      return (
        <View className="w-20 bg-red-500 items-center justify-center">
          <Animated.View style={{ transform: [{ scale }] }}>
            <Ionicons name="trash" size={24} color="white" />
          </Animated.View>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={renderRightActions}
        onSwipeableOpen={() => deleteItem(item.id)}
      >
        <View className="bg-white p-4 rounded-xl mb-3">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-medium">{item.name}</Text>
              <Text className="text-sm text-gray-500 capitalize">
                {item.category}
              </Text>
            </View>
          </View>
          
          <View className="flex-row items-center mt-2">
            <TouchableOpacity 
              className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center"
              onPress={() => updateItem(item.id, item.quantity - 1)}
            >
              <Ionicons name="remove" size={20} color="#374151" />
            </TouchableOpacity>
            
            <View className="w-12 items-center">
              <Text className="text-lg">{item.quantity}</Text>
            </View>
            
            <TouchableOpacity 
              className="w-8 h-8 bg-blue-500 rounded-lg items-center justify-center"
              onPress={() => updateItem(item.id, item.quantity + 1)}
            >
              <Ionicons name="add" size={20} color="white" />
            </TouchableOpacity>
            
            <Text 
              className={`ml-3 text-sm ${
                item.needToBuy ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {item.needToBuy ? 'ต้องซื้อเพิ่ม' : 'มีเพียงพอ'}
            </Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-50">
        {/* Header */}
        <View className="bg-white p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-bold">รายการของในบ้าน</Text>
            <TouchableOpacity
              onPress={() => setIsAdding(true)}
              className="bg-blue-500 p-3 rounded-full"
            >
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Sort Buttons */}
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
        </View>

        {/* Categories */}
        <ScrollView className="flex-1 px-4">
          {Object.keys(categoryColors).map(category => {
            const count = items.filter(item => item.category === category).length;
            return (
              <TouchableOpacity
                key={category}
                className={`${categoryColors[category]} p-4 rounded-xl mb-3`}
                onPress={() => setSelectedCategory(
                  selectedCategory === category ? null : category
                )}
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
          })}

          {/* Items List */}
          <View className="mt-4">
            {items
              .filter(item => !selectedCategory || item.category === selectedCategory)
              .map(item => (
                <SwipeableItem key={item.id} item={item} />
              ))}
          </View>
        </ScrollView>

        {/* Add Item Modal */}
        {isAdding && (
          <View className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/50 justify-center items-center">
            <View className="bg-white w-5/6 rounded-xl p-4">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-xl font-bold">เพิ่มของใหม่</Text>
                <TouchableOpacity onPress={() => setIsAdding(false)}>
                  <Ionicons name="close" size={24} color="#6B7280" />
                </TouchableOpacity>
              </View>

              <TextInput
                className="p-3 bg-gray-100 rounded-lg mb-4"
                placeholder="ชื่อสิ่งของ"
                value={newItemName}
                onChangeText={setNewItemName}
              />

              <View className="flex-row flex-wrap gap-2 mb-4">
                {Object.keys(categoryColors).map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    className={`${categoryColors[cat]} p-2 rounded-lg ${
                      selectedCategory === cat ? 'border-2 border-blue-500' : ''
                    }`}
                    onPress={() => setSelectedCategory(cat)}
                  >
                    <Text className="capitalize">{cat}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                className="bg-blue-500 p-3 rounded-lg items-center"
                onPress={addNewItem}
              >
                <Text className="text-white font-medium">เพิ่ม</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}