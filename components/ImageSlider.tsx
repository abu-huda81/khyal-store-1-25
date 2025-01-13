import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native'
import React, { useRef, useState } from 'react'
import Pagination from '@/components/Pagination'

type Props = {
  imageList: string[]
}
const width = Dimensions.get('window').width

const ImageSlider = ({ imageList }: Props) => {
    const [paginationIndex, setPaginationIndex] = useState(0)
    const viewabilityConfigCallbackPairs = useRef([
        {
            viewabilityConfig: {
                itemVisiblePercentThreshold: 50,
            },

            onViewableItemsChanged: ({ viewableItems }:{ viewableItems: ViewToken |any}) => {
                if (viewableItems[0].index !== undefined && viewableItems[0].index !== null){
                    setPaginationIndex(viewableItems[0].index % imageList.length)
                }
            }
        }
    ]);
  return (
    <View>
      <FlatList
        data={imageList}
        renderItem={({ item, index }) => (
          <View
            style={{ width, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: '100%', height: 300, borderRadius: 15 }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination items={imageList} paginationIndex={paginationIndex} />
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({})
