import { DELETE_CHAIR, SELECT_CHAIR } from "../Type/BaiTapBookingTicketType";

const DEFAULT_STATE = {
    selectedChairs: []
}

export const bookingTicketReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case (SELECT_CHAIR): {
            let tempSelectedChairs = [...state.selectedChairs];

            const indexOfSelectedChairs = tempSelectedChairs.findIndex(ele => ele.soGhe === action.payLoad.soGhe);
            if (indexOfSelectedChairs === -1) {
                tempSelectedChairs.push(action.payLoad);
            }
            else {
                tempSelectedChairs.splice(indexOfSelectedChairs, 1);
            }
            state.selectedChairs = tempSelectedChairs;
            return { ...state };
        }
            break;

        case (DELETE_CHAIR): {
            let tempSelectedChairs = [...state.selectedChairs];

            const indexOfSelectedChairs = tempSelectedChairs.findIndex(ele => ele.soGhe === action.payLoad.soGhe);
            tempSelectedChairs.splice(indexOfSelectedChairs, 1);
            state.selectedChairs = tempSelectedChairs;
            return { ...state };
        }
            break;

        default:
            return { ...state }
            break;
    }
}