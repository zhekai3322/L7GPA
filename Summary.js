import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { datasource } from './Data.js';

const calculateGPA = () => {
    const gradePoints = { A: 4, B: 3, C: 2, D: 1, F: 0 };
    let totalPoints = 0;
    let totalModules = 0;

    datasource.forEach((section) => {
        section.data.forEach((module) => {
            totalPoints += gradePoints[module.grade] || 0;
            totalModules += 1;
        });
    });

    return totalModules > 0 ? (totalPoints / totalModules).toFixed(2) : '0.00';
};

const Summary = ({ navigation }) => {
    const gpa = calculateGPA();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>GPA Summary</Text>
            <Text style={styles.gpaText}>GPA: {gpa}</Text>
            <Button title="Back" onPress={() => navigation.navigate('Home')} color="purple"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(50,205,50,0.4)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    gpaText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'red',
    },
});

export default Summary;
