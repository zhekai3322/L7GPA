import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';

const Add = ({ navigation }) => {
    const [moduleCode, setModuleCode] = useState('');
    const [grade, setGrade] = useState('A');

    const saveModule = () => {
        if (!moduleCode.trim()) {
            Alert.alert('Error', 'Please enter a valid module code.');
            return;
        }

        const newId = Math.max(
            ...datasource.flatMap((section) => section.data.map((module) => module.id)),
            0
        ) + 1;

        datasource[0].data.push({ id: newId, moduleCode, grade });

        Alert.alert('Success', 'Module added successfully!');
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Module</Text>
            <TextInput
                style={styles.input}
                placeholder="Module Code"
                value={moduleCode}
                onChangeText={setModuleCode}
            />
            <RNPickerSelect
                style={styles.input}
                onValueChange={(value) => setGrade(value)}
                items={[
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                    { label: 'D', value: 'D' },
                    { label: 'F', value: 'F' },
                ]}
                value={grade}
            />
            <Button title="Save Module" onPress={saveModule} color="orange"/>
            <Button title="Back" onPress={() => navigation.navigate('Home')} color="purple"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: 'bold',
        backgroundColor: 'rgb(159,213,234)',
    },
});

export default Add;
