const logger = store => next => action => {
    console.log('dispatch action', action)
    const result = next(action)
    console.log('next state', store.getState())
    return result
}

export default logger