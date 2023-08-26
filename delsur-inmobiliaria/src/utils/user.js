import {store} from '../redux/store/store';
const functions = {
    checkUser: () => {
        return store.getState().user;
    }
}

export const {checkUser} = functions