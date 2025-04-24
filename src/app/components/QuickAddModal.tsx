import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { categoryColors } from './CategoryCard';

export const QuickAddModal = ({ visible, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('other');

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="bg-white w-5/6 rounded-xl p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">เพิ่มของใหม่</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <TextInput
            className="p-3 bg-gray-100 rounded-lg mb-4"
            placeholder="ชื่อสิ่งของ"
            value={name}
            onChangeText={setName}
          />

          <View className="flex-row flex-wrap gap-2 mb-4">
            {Object.keys(categoryColors).map((cat) => (
              <TouchableOpacity
                key={cat}
                className={`${categoryColors[cat]} p-2 rounded-lg ${
                  category === cat ? 'border-2 border-blue-500' : ''
                }`}
                onPress={() => setCategory(cat)}
              >
                <Text className="capitalize">{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            className="bg-blue-500 p-3 rounded-lg items-center"
            onPress={() => {
              onAdd({ name, category });
              setName('');
              setCategory('other');
              onClose();
            }}
          >
            <Text className="text-white font-medium">เพิ่ม</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}; 