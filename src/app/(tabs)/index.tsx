import React, { useState } from 'react';
import { View, ScrollView, Text, RefreshControl, SafeAreaView } from 'react-native';
import mockItems from '../constants/mockData';
import { Ionicons } from '@expo/vector-icons';
import { LowStockAlert } from '../components/LowStockAlert';

export default function DashboardScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const itemsNeedToBuy = mockItems.filter(item => item.needToBuy);
  const totalItems = mockItems.length;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1 bg-gray-50"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#3B82F6"
          />
        }
      >
        {/* Header Stats */}
        <View className="bg-white p-6">
          <Text className="text-2xl font-['Kanit-Bold'] text-gray-800 mb-4">
            สรุปรายการ
          </Text>
          
          <View className="flex-row justify-between">
            <View className="items-center bg-blue-50 p-4 rounded-xl flex-1 mr-2">
              <Text className="text-blue-600 font-['Kanit-Regular'] mb-1">
                ทั้งหมด
              </Text>
              <Text className="text-2xl font-['Kanit-Bold'] text-blue-600">
                {totalItems}
              </Text>
            </View>
            
            <View className="items-center bg-red-50 p-4 rounded-xl flex-1 ml-2">
              <Text className="text-red-600 font-['Kanit-Regular'] mb-1">
                ต้องซื้อ
              </Text>
              <Text className="text-2xl font-['Kanit-Bold'] text-red-600">
                {itemsNeedToBuy.length}
              </Text>
            </View>
          </View>
        </View>

        {/* Low Stock Alerts */}
        <View className="m-4">
          <Text className="text-xl font-bold text-gray-800 mb-3">
            ของใกล้หมด
          </Text>
          {mockItems
            .filter(item => item.quantity <= 2)
            .map(item => (
              <LowStockAlert key={item.id} item={item} />
            ))}
        </View>

        {/* Shopping List */}
        <View className="m-4">
          <Text className="text-xl font-['Kanit-Bold'] text-gray-800 mb-4">
            สิ่งที่ต้องซื้อ
          </Text>
          
          {itemsNeedToBuy.length > 0 ? (
            itemsNeedToBuy.map(item => (
              <View 
                key={item.id} 
                className="bg-white p-4 rounded-xl mb-3 shadow-sm flex-row justify-between items-center"
              >
                <View>
                  <Text className="text-lg font-['Kanit-Medium'] text-gray-800">
                    {item.name}
                  </Text>
                  <Text className="text-sm font-['Kanit-Regular'] text-gray-500">
                    เหลือ: {item.quantity} ชิ้น
                  </Text>
                </View>
                <Ionicons name="cart-outline" size={24} color="#EF4444" />
              </View>
            ))
          ) : (
            <View className="bg-white p-6 rounded-xl items-center">
              <Ionicons name="checkmark-circle" size={48} color="#10B981" />
              <Text className="mt-2 font-['Kanit-Regular'] text-gray-600">
                ไม่มีของที่ต้องซื้อเพิ่ม
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}