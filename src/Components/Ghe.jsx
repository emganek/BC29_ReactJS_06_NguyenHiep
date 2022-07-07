import React, { Component } from 'react';
import {connect} from "react-redux";
import { selectChairAction } from '../Store/Action/BaiTapBookingTicketAction';

class Ghe extends Component {
    renderGhe = () => {
        return this.props.danhSachGhe.map((ele, index) => {
            let typeChair = "ghe";

            //Begin-----Determine type of chair------------
            if (ele.daDat){
                typeChair = "gheDuocChon";
            }
            else if ((this.props.selectedChairs.findIndex(chair => ele.soGhe === chair.soGhe)) !== -1){
                typeChair = "gheDangChon"
            }
            //End-----Determine type of chair------------

            if (this.props.thuTuHang === 0) {
                return (
                    <p key={index} className='text-warning columnNumber'>
                        {ele.soGhe}
                    </p>
                )
            }
            return (
                <button onClick ={()=>this.props.selectChair(ele)} key={index} className={typeChair}>
                    {ele.soGhe}
                </button>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderGhe()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ...state.bookingTicketReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        selectChair: (chair) =>{
            dispatch(selectChairAction(chair));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ghe)