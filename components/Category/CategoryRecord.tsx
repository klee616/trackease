import { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const CategoryRecord = ({ category, deleteCategory, editCategory }) => {
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState(category);

    const onChangeCategory = (e) => {
        setEditData({...editData, name:e.target.value});
    }

    const saveChangedCategory = (e) =>{
        editCategory({id:editData.id, name:editData.name});
        setEditing(false);
    }
    return (<>
        <View className='flex flex-row items-center pl-2 pr-2 mt-1 mb-1'>
            {editing ? <>
                <TextInput
                    onChange={onChangeCategory}
                    value={editData.name}
                />
                <div className='ml-auto'>
                    <AntDesign name="save" size={24} color="black" onPress={saveChangedCategory} />
                    <AntDesign name="delete" size={24} color="black" onPress={()=>deleteCategory(editData.id)} />
                </div>
            </> : <><Text>{editData.name}</Text>
                <div className='ml-auto'>
                    <AntDesign name="edit" size={24} color="black" onPress={()=>setEditing(true)} />
                    <AntDesign name="delete" size={24} color="black" onPress={()=>deleteCategory(editData.id)} />
                </div>
            </>}


        </View>
    </>)
}

export default CategoryRecord;