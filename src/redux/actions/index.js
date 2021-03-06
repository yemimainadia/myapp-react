import API from "../../api";
import { GET_RECIPE, SET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DEL_RECIPE } from "../constants/action-types";

export function fetchRecipe() {
    return function (dispatch) {
        return API.get("recipe?max=6").then(({ data }) => {
            dispatch(showRecipe(data));
        });
    };
}

function showRecipe(data) {
    return {
        type: SET_RECIPE,
        payload: data,
    };
}

export function deleteRecipe(idRecipe) {
    API.delete(`recipe/${idRecipe}`).then(res => {
        console.log(res);
        console.log(res.data);
    });
    return fetchRecipe();
}

export function formSubmit(newTitle, recipeID) {
    return function (dispatch) {
        API.put(`recipe/${recipeID}`, {
            recipe_title: newTitle
        }).then(res => {
            console.log(res);
            console.log(res.data);
            return API.get("recipe?max=6").then(({ data }) => {
                dispatch(showRecipe(data));
            });
        });
    };
}

export function formSubscribe(emailUser) {
    API.post('customer', {
        username: emailUser
    }).then(res => {
        console.log(res);
        console.log(res.data);
    });
    return fetchRecipe();
}