import React from 'react'
import { View } from 'react-native';

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#FC4353',
                top: -250,
                width: 1000,
                height: 850,
                transform: [
                    {rotate: '-70deg'}
                ]
            }}
        />
    )
}
