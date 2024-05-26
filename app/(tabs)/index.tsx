import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/constant/colors'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButton from '@/components/CategoryButton'
import Lisitings from '@/components/Lisitings'
import ListingData from '@/data/destination.json'

const Page = () => {


    const headerHeight = useHeaderHeight()
    const [category, setCategory] = useState("All")

    const onCategoryChanged = (category: string) => {
        console.log("Category : ", category)
        setCategory(category)
    }


    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: "",
                headerLeft: () => (
                    <TouchableOpacity>
                        <Image source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }} style={{ width: 45, height: 45, borderRadius: 10, marginLeft: 10 }} />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => { }} style={{ marginRight: 20, backgroundColor: colors.white, padding: 10, borderRadius: 10, shadowColor: "#171717", shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3 }}>
                        <Ionicons name='notifications' size={25} color={colors.black} />
                    </TouchableOpacity>
                )
            }} />

            <View style={[styles.container, { paddingTop: headerHeight }]}>
                <Text style={styles.headingText}>Explore The Beautiful World</Text>

                <View style={styles.searchSectionWrapper}>


                    <View style={styles.searchBar}>

                        <Ionicons name='search' size={18} style={{ marginRight: 5 }} color={colors.black} />
                        <TextInput placeholder='Search...' />

                    </View>


                    <TouchableOpacity onPress={() => { }} style={styles.filterBtn}>

                        <Ionicons name='options' size={28} color={colors.white} />

                    </TouchableOpacity>
                </View>


                <CategoryButton onCategoryChanged={onCategoryChanged} />

                <Lisitings listings={ListingData} />


            </View >

        </>


    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.bgColor,

    }, headingText: {
        fontSize: 28,
        fontWeight: '800',
        color: colors.black,
        paddingVertical: 10,
        textAlign: "center",
    }, searchSectionWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'

    }, searchBar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 10
    }, filterBtn: {
        backgroundColor: colors.primaryColor,
        padding: 12,
        borderRadius: 10,
        marginLeft: 20,
    }
})