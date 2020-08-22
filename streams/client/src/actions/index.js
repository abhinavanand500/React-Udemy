import streams from '../apis/streams';
import { formValues } from 'redux-form';
export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payLoad: userId,
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    };
};

export const createStream = formValues => async dispatch => {
    const response = streams.post('/streams', formValues);
    dispatch({ type: 'CREATE_STREAM', payload: response.data })
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: 'FETCH_STREAMS', payload: response.data })
}

export const fetchStream = (id) => dispatch => {
    const response = streams.get(`/streams/${id}`);
    dispatch({ type: 'FETCH_STREAM', payload: response.data })
}

export const editStream = (id, formValues) => dispatch => {
    const response = streams.put(`/streams/${id}`, formValues);
    dispatch({ type: 'EDIT_STREAM', payload: response.data })
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: 'DELETE_STREAM', payload: id })
}