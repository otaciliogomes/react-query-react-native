import {View, Text, TouchableOpacity, Button} from 'react-native'

import {connect} from 'react-redux'

const toggleLess = (module, lesson) => {
    return {
        type: 'SET_LESSON_ACTIVE',
        module,
        lesson
    }
}

interface Props {
    modules: [{
        id: string,
        title: string,
        lessons:[{
            id:string,
            title: string
        }]
    }]
    dispatch: any
}

const SideBar = ({modules, dispatch}: Props) => {
    return (
        <View>
            {
                modules.map(module => 
                    <View key={module.id}>
                        <Text>{module.title}</Text>
                        {
                            module.lessons.map(lesson => 
                                <View key={lesson.id}>
                                    <Text>{lesson.title}</Text>
                                   <TouchableOpacity 
                                    onPress={() => dispatch(toggleLess(module, lesson))}
                                   >
                                       <Text>Add</Text>
                                   </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </View>
    )
}

export default connect(state => ({modules: state.modules}))(SideBar)