import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteChairAction } from '../Store/Action/BaiTapBookingTicketAction';

class SelectedChairTable extends Component {
    renderSelectedChairTable = () => {
        return this.props.selectedChairs.map((ele, index) => {
            return (
                <tr key={index}>
                    <td>{ele.soGhe}</td>
                    <td>{ele.gia.toLocaleString()}</td>
                    <td>
                        <button onClick={()=>{this.props.deleteChair(ele)}} className='deleteBtn'>X</button>
                    </td>
                </tr>
            )
        })

    }
    render() {
        return (
            <>
                {this.renderSelectedChairTable()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.bookingTicketReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        deleteChair: chair =>{
            dispatch(deleteChairAction(chair))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedChairTable)