import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {
    const { id } = route.params;
    let moduleToEdit;
    for (let section of datasource) {
        moduleToEdit = section.data.find(module => module.id === id);
        if (moduleToEdit) break;
    }

    const [moduleCode, setModuleCode] = useState(moduleToEdit?.moduleCode || '');
    const [grade, setGrade] = useState(moduleToEdit?.grade || 'A');

    const saveMod = () => {
        for (let section of datasource) {
            const moduleIndex = section.data.findIndex(module => module.id === id);
            if (moduleIndex !== -1) {
                section.data[moduleIndex] = { ...section.data[moduleIndex], moduleCode, grade };
                break;
            }
        }

        Alert.alert('Success', 'Module updated successfully!');
        navigation.navigate('Home');
    };

    const deleteMod = (navigation) => {
        for (let section of datasource) {
            const moduleIndex = section.data.findIndex(module => module.id === id);
            if (moduleIndex !== -1) {
                section.data.splice(moduleIndex, 1);
                break;
            }
        }

        Alert.alert('Success', 'Module deleted successfully!');
        navigation.navigate('Home');
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Edit Module</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder="Module Code"
                value={moduleCode}
                onChangeText={setModuleCode}
            />
            <RNPickerSelect
                value={grade}
                onValueChange={setGrade}
                items={[
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                    { label: 'D', value: 'D' },
                    { label: 'F', value: 'F' },
                ]}
                style={{
                    inputIOS: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 },
                    inputAndroid: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 },
                }}
            />
            <Button title="Save Changes" onPress={saveMod} />
            <Button title="Delete" onPress={deleteMod} color="red" />
            <Button title="Back" onPress={() => navigation.navigate('Home')} color="purple"/>
        </View>
    );
};


export default Edit;
