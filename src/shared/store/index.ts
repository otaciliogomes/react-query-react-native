import { createStore } from 'redux'

const INITIAL_STATE = {
    activeLesson: {},
    activeRoom: {},
    modules: [
        {
            id:1,
            title: "React Native",
            lessons: [
                {id: 1, title: "Organizando"},
                {id: 2, title: "Primeiros passos"}
            ]
        },
        {
            id:2,
            title: "Node JS",
            lessos: [
                {id: 3, title: "Organizando"},
                {id: 4, title: "Primeiros passos"}
            ]
        },
    ]
}

interface ActivProps {
    type: string
    lesson: string
    module: string
}

function reducer(state = INITIAL_STATE, action:ActivProps) {
    if(action.type === "SET_LESSON_ACTIVE") {
        return {
            ...state,
            actionLesson: action.lesson,
            actionModule: action.module
        }
    }
    return {
        ...state
    }

    
}

const store = createStore(reducer)

export default store;