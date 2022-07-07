import { DELETE_CHAIR, SELECT_CHAIR } from "../Type/BaiTapBookingTicketType"

export const selectChairAction = (chair) => {
    return ({
        type: SELECT_CHAIR,
        payLoad: chair
    })
}

export const deleteChairAction = (chair) => {
    return ({
        type: DELETE_CHAIR,
        payLoad: chair
    })
}