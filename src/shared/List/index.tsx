import { View, FlatList } from 'react-native'

import { ItemLits } from '../ItemLits'

export const List = () => {
    const data = [
        { id: "1", tarefa: 'Comprar arroz' },
        { id: "2", tarefa: 'Comprar feijão' },
        { id: "3", tarefa: 'Comprar carne' },
        { id: "4", tarefa: 'Comprar alface' },
    ]
    return (
        <>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ItemLits {...item}/>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </>
    )
}

const Separator = () => {
    return (
        <View style={{flex: 1, height: 1, backgroundColor: "#DDD"}}></View>
    )
}