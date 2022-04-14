import React from 'react'
import { View, Animated, Dimensions } from 'react-native'


interface PaginatorProps {
  data: any
  scrollX: any
  animated?: boolean
  dotWidth?: number
  typeAnimated?: '1' | '2'
}

export const Paginator = ({
  data,
  scrollX,
  animated = false,
  dotWidth = 14,
  typeAnimated = '1'
}: PaginatorProps) => {
  const { width } = Dimensions.get('window')
  return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: dotWidth,
          backgroundColor: '#FFF',
          marginBottom: 30
        }}
      >
        {data.map((item: any, index: number) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]

          const animatedSize = scrollX.interpolate({
            inputRange,
            outputRange: [
              typeAnimated === '1' ? dotWidth - 5 : dotWidth,
              typeAnimated === '1' ? dotWidth : dotWidth * 3,
              typeAnimated === '1' ? dotWidth - 5 : dotWidth
            ],
            extrapolate: 'clamp'
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          })

          return (
            <View key={item?.id}>
              {item?.isVisible && (
                <Animated.View
                  
                  style={{
                    height:
                      animated && typeAnimated === '1' ? animatedSize : 14,
                    width: animated ? animatedSize : dotWidth,
                    opacity,
                    backgroundColor: '#1d428a',
                    borderRadius: 50,
                    marginHorizontal: 8,
                    margin: 10
                  }}
                />
              )}
            </View>
          )
        })}
      </View>
  )
}


