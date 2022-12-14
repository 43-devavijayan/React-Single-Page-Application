import React from 'react';

const initialState = {
    postLength: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UpdateLength":
            return {
                ...state, postLength: action.value
            }
    }
}

export const LengthUpdator = React.createContext()

export const Provider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const value = {
        postLength: state.postLength,
        setValue: (type, value) => { dispatch({ type: type, value }) }
    }

    return <LengthUpdator.Provider value={value}>
        {children}
    </LengthUpdator.Provider>

}
