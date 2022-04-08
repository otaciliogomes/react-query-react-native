import React, { useRef } from 'react'
import { FlatList, Animated } from 'react-native'

import { Paginator } from '../../shared'
import * as S from './styles'

import {data} from './mock'

const Sign = () => {
  const scrollx = useRef(new Animated.Value(0)).current
  const slideRef = useRef(null)
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <S.ContainerPage>
      <S.Container>
        <FlatList
          data={data}
          renderItem={({ item }) => item?.isVisible ? item.component : <></>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item, index) => `item?.id+index`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </S.Container>
      <Paginator data={data} scrollX={scrollx} dotWidth={16} animated typeAnimated="1" />
    </S.ContainerPage>
  )
}


export default Sign