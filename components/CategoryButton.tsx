import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButton = () => {
    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal>
                {destinationCategories.map((item, index) => (
                    <TouchableOpacity>
                        <MaterialCommunityIcons name={item.iconName as any} size={20} />
                        <Text key={index}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '700'
    }
})