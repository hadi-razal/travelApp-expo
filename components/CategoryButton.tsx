import { ScrollView, ScrollViewProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '@/constant/colors'


interface PropsType {
    onCategoryChanged: (category: string) => void
}


const CategoryButton = ({ onCategoryChanged }: PropsType) => {


    const scrollRef = useRef<ScrollView>(null)
    const itemRef = useRef<TouchableOpacity[] | null[]>([])
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const handleSelectCategory = (index: number) => {
        setActiveTabIndex(index)

        const selected = itemRef.current[index]

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
        })

        onCategoryChanged(destinationCategories[index].title)
    }

    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView ref={scrollRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                marginBottom: 10
            }}>
                {destinationCategories.map((item, index) => (
                    <TouchableOpacity ref={(el) => itemRef.current[index] = el} onPress={() => handleSelectCategory(index)} key={index} style={activeTabIndex === index ? styles.categoryBtnActive : styles.categoryBtn}>
                        <MaterialCommunityIcons color={activeTabIndex === index ? colors.white : colors.black} name={item.iconName as any} size={20} />
                        <Text style={activeTabIndex === index ? styles.categoryBtnTextActive : styles.categoryBtnText} >{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View >
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    contianer: {
        paddingHorizontal: 2
    }, title: {
        fontSize: 22,
        fontWeight: '700'
    }, categoryBtn: {
        flexDirection: 'row'
        , alignItems: "center",
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#333333",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginHorizontal: 2
    }, categoryBtnActive: {
        flexDirection: 'row'
        , alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#333333",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginHorizontal: 2,
        backgroundColor: colors.primaryColor
    },
    categoryBtnText: {
        marginLeft: 5,
        color: colors.black
    }, categoryBtnTextActive: {
        marginLeft: 5,
        color: colors.white
    }
})