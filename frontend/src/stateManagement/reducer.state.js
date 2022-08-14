import CONSTANTS from "../utils/constants";

export const initialState = {
    showCatagories: false,
    catagories: ["Eye Glasses", "Computer Glasses", "Contact Lenses", "Kids Glasses", "Sunglasses", "Power Sunglasses", "Color Contact Lens", "Reading Glasses", "Programer Lenses"]
};

const reducer = (state, action) => {
    console.log(action.type, " --- ", action.payload);

    switch (action.type) {
        case CONSTANTS.ACTION_TYPES.SHOW_CATAGORIES:
            return {
                ...state,
                showCatagories: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;