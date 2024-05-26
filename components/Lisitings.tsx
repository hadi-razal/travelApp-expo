import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ListingType } from '@/types'
import colors from '@/constant/colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

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
                        <Ionicons name='bookmark-outline' color={colors.white} size={20} />
                    </View>
                    <Text style={styles.itemText} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                            <FontAwesome5 name="map-marker-alt" size={18} color={colors.primaryColor} />
                            <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                        <Text style={styles.priceText}>${item.price}</Text>
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

    }, itemText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 10
    }, locationText: {
        fontSize: 12,
        marginLeft: 4
    }, priceText: {
        fontSize: 12,
        fontWeight: "600",
        color: colors.primaryColor,
    }

})