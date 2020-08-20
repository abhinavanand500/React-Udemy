const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'SIGN_IN') {
        return { ...state, isSignedIn: true, userId: action.payLoad }
    }
    if (action.type === 'SIGN_OUT') {
        return { ...state, isSignedIn: false, userId: null }
    }
    return { ...state, isSignedIn: null };

}