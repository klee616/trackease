
import { categoryInitial } from '@/data/index'
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { nanoid } from 'nanoid';
import CategoryRecord from './CategoryRecord';
"use server"
export default function CategoryList({ categories, setCategories }) {
    const [initialCategory, setInitialCategory] = useState({
        id: nanoid(),
        name: ''
    })
    const [category, setCategory] = useState(initialCategory);

    const createNewCategory = () => {
        setCategories([...categories, category])
        setCategory(initialCategory);
    }

    const onChangeCategoryName = (e) => {
        setCategory({ ...category, name: e.target.value })
        console.log(category)

    }

    const editCategory = (editData) => {

        const newCategories = [];
        console.log(editData);
        categories.forEach((data) => {
            if (data.id === editData.id) {
                newCategories.push(editData)
            } else {
                newCategories.push(data)
            }
        });
        setCategories(newCategories)
    }

    const deleteCategory = (id) => {

        const newCategories = removeObjectWithId(categories, id)

        setCategories(newCategories)
        console.log(newCategories)
    }

    function removeObjectWithId(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        arr.splice(objWithIdIndex, 1);
        return arr;
    }

    return (<>
        <View className='m-2 p2'>
            <div className='flex flex-row items-center justify-between mb-4'>
                <h1 className='font-bold'>Category List</h1>
            </div>

            <div>
                <TextInput
                    onChange={onChangeCategoryName}
                    value={category.name}
                    placeholder='News Category'
                    className='border-solid border-2 border-indigo-600 '

                />

                <div className='inline-block'>
                    <Button
                        title="add Category"
                        color="#841584"
                        onPress={createNewCategory}

                    />
                </div>

            </div>
            {
                categories && categories.map((category, index) => {
                    return (<>
                        <CategoryRecord key={index} category={category} deleteCategory={deleteCategory} editCategory={editCategory} />
                    </>)
                })
            }
        </View>
    </>);
}



