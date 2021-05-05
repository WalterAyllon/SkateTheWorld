import firebase from 'firebase';

export const updateEmail = (email) => {
    return {type: 'UPDATE_EMAIL', payload: email }
}
export const updatePassword = (password) => {
    return {type: 'UPDATE_PASSWORD', payload: password }
}
export const updateUsername = (user) => {
    return {type: 'UPDATE_USERNAME', payload: user }
}
export const updateBio = (bio) => {
    return {type: 'UPDATE_BIO', payload: bio }
}

export const login = () => {
    return async (dispatch, getState) => {
        try{
            const { email, password} = getState().user
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({type: 'LOGIN', payload: response.user})
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => {
        try{
            const { email, password} = getState().user
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch({type: 'SIGNUP', payload: response.user})
        } catch (e) {
            alert(e)
        }
    }
}