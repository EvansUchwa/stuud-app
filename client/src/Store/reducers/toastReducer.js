import { toast } from 'react-toastify';
const defaultValue = null

export const toastReducer = (state = defaultValue, action) => {
    switch (action.type) {

        case 'SET_SUCCESS_TOAST': {
            return toast.success(action.payload);
        }

        case 'SET_ERROR_TOAST': {
            return toast.error(action.payload);
        }

        default:
            return state;
    }
}