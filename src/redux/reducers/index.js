import { GET_RECIPE, SET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DEL_RECIPE } from "../constants/action-types";

export default function (state = {}, action) {
    switch (action.type) {
        case SET_RECIPE:
            return { data: action.payload, isLoadingData: false };
            break;
        default:
            return state;
    }
}
