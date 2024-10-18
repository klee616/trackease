import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { categoryInitial } from '@/data/index'
import { useState, useEffect } from 'react';
import CategoryList from '@/components/Category/CategoryList';

export default function HomeScreen() {
  const [categories, setCategories] = useState(categoryInitial);

  const onChangeCategories = (categoryList)=>{
    setCategories(categoryList)
    console.log(categories)
  }
  return (

    <View className="w-100 h-100 ">
      <h1>My Expensive</h1>

      <View className='flex flex-row  justify-center items-center  space-x-2'>
        <View className='grow basis-1/3 min-w-300'>
            <h2>Expensive Edit</h2>
        </View>
        <View className='grow basis-1/3 min-w-300'>
            <h2>List Expensive</h2>
        </View>
        <View className='grow basis-1/3 min-w-300'>
          <CategoryList categories={categories} setCategories={onChangeCategories} />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});