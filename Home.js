import React from 'react';
import { StatusBar, Button, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { datasource } from './Data.js';
import styles from './styles';


const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                navigation.navigate('Edit', {
                    index: index,
                    type: section.title,
                    key: item.key,
                });
            }}
        >
            <Text style={styles.textStyle}>
                {item.moduleCode} - {item.grade}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <StatusBar />
            <Button
                title="Add Module"
                onPress={() => navigation.navigate('Add')}
                color="darkgreen"
            />
            <Button
                title="Calculate GPA"
                onPress={() => navigation.navigate('Summary')}
                color="darkblue"
            />
            <SectionList
                sections={datasource}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.opacityStyle}
                        onPress={() =>
                            navigation.navigate('Edit', { id: item.id, moduleCode: item.moduleCode, grade: item.grade })
                        }
                    >
                        <Text style={styles.textStyle}>
                            {item.moduleCode} - {item.grade}
                        </Text>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.headerText}>{title}</Text>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Home;
