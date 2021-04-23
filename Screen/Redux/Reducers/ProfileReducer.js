import { PROFILE_DATA, LOADING } from "../actions/types";

const initialState = {
  userdata: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case PROFILE_DATA:
      return { ...state, userdata: action.payload, loading: false };
    default:
      return state;
  }
}
