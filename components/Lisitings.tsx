import { FlatList, Image, ListRenderItem, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ListingType } from '@/types'
import colors from '@/constant/colors'
import { Ionicons } from '@expo/vector-icons'

interface PropsType {
    listings: any[]
}



const Lisitings = ({ listings }: PropsType) => {




    const renderItems: ListRenderItem<ListingType> = ({ item }) => {

        return (
            <TouchableOpacity >
                <View style={styles.item}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.bookmark}>
                        <Ionicons name='bookmark' color={colors.white} size={20} />
                    </View>
                </View >
            </TouchableOpacity>

        )

    }

    return (
        <View>
            <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default Lisitings

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220,

    }, image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 30
    }, bookmark: {
        position: "absolute",
        top: 185,
        right: 30,
        backgroundColor: colors.primaryColor,
        padding: 10,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.white,

    }

})