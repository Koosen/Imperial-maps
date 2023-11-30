import { useEffect, useState } from 'react';
import { RootTagContext } from 'react-native';
import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
    searchBarView: {
        display: 'inline-flex',
    },
    textEntry: {
        height: 25,
        width: 240,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 2.5,
    },
    searchPressableView: {
        display: 'flex',
        flexDirection: 'row',
    },
    searchPressable: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        height: 25,
        width: 110,
        marginHorizontal: 10,
    },
  });

function LocationSearchBar(){
    const [currentLocation, setCurrentLocation] = useState()
    const [destination, setDestination] = useState()


    return(
        <View style={styles.searchBarView}>
            <TextInput style={styles.textEntry} defaultValue='Current Location'/>
            <TextInput style={styles.textEntry} defaultValue='Destination'/>

            <View style={styles.searchPressableView}>
                <Pressable style={styles.searchPressable} onPress={()=>setDestination('home')}>
                    <Text>
                        Press me
                    </Text>
                </Pressable>

                <Pressable style={styles.searchPressable} onPress={()=>setDestination('home')}>
                    <Text>
                      Press me
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LocationSearchBar