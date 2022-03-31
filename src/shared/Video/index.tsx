import {View, Text} from 'react-native'

import { connect } from 'react-redux'

interface Props {
    activeModule:  {
        title:string
    }
    activeLesson:{
        title:string
    }
}

const Video = ({activeModule, activeLesson}: Props) => {
    return (
        <View>
            <Text>Video {activeModule.title}</Text>
            <Text>Aula {activeLesson.title}</Text>
        </View>
    )
}

export default connect((state: any) => ({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson
}))(Video)