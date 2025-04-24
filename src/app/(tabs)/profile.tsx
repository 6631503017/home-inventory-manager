import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import mockItems from '../constants/mockData';
import { Ionicons } from '@expo/vector-icons';
import { HistoryItem } from '../components/HistoryItem';

export default function ProfileScreen() {
  const totalItems = mockItems.length;
  const needToBuyItems = mockItems.filter(i => i.needToBuy).length;
  const categories = [...new Set(mockItems.map(item => item.category))];

  const [history] = useState([
    {
      id: '1',
      type: 'add',
      name: 'น้ำยาล้างจาน',
      date: new Date(),
    },
    {
      id: '2',
      type: 'update',
      name: 'สบู่',
      date: new Date(),
    },
    // ... more history items
  ]);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Profile Header */}
      <View className="bg-white p-6">
        <View className="items-center">
          <View className="w-24 h-24 bg-blue-100 rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={48} color="#3B82F6" />
          </View>
          <Text className="text-2xl font-['Kanit-Bold'] text-gray-800">
            คลังของฉัน
          </Text>
        </View>
      </View>

      {/* Stats Overview */}
      <View className="mx-4 mt-4">
        <Text className="text-xl font-['Kanit-Bold'] text-gray-800 mb-3">
          ภาพรวม
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-1 bg-white p-4 rounded-xl mr-2">
            <View className="items-center">
              <Text className="text-3xl font-['Kanit-Bold'] text-blue-500">
                {totalItems}
              </Text>
              <Text className="font-['Kanit-Regular'] text-gray-600">
                รายการทั้งหมด
              </Text>
            </View>
          </View>
          <View className="flex-1 bg-white p-4 rounded-xl ml-2">
            <View className="items-center">
              <Text className="text-3xl font-['Kanit-Bold'] text-red-500">
                {needToBuyItems}
              </Text>
              <Text className="font-['Kanit-Regular'] text-gray-600">
                ต้องซื้อเพิ่ม
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Categories */}
      <View className="m-4">
        <Text className="text-xl font-['Kanit-Bold'] text-gray-800 mb-3">
          หมวดหมู่
        </Text>
        {categories.map(category => {
          const itemsInCategory = mockItems.filter(item => item.category === category);
          return (
            <View key={category} className="bg-white p-4 rounded-xl mb-3">
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg font-['Kanit-Medium'] text-gray-800 capitalize">
                    {category}
                  </Text>
                  <Text className="font-['Kanit-Regular'] text-gray-500">
                    {itemsInCategory.length} รายการ
                  </Text>
                </View>
                <Ionicons 
                  name={
                    category === 'cleaning' ? 'water' :
                    category === 'bathroom' ? 'water-outline' :
                    'cube-outline'
                  } 
                  size={24} 
                  color="#3B82F6" 
                />
              </View>
            </View>
          );
        })}
      </View>

      {/* History Section */}
      <View className="m-4">
        <Text className="text-xl font-bold text-gray-800 mb-3">
          ประวัติล่าสุด
        </Text>
        {history.map(item => (
          <HistoryItem key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}