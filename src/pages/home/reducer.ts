import {Action} from "redux";

const initState = {}

export default function studentReducer(state = initState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}
