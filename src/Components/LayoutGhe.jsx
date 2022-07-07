import React, { Component } from 'react';
import layout from "../Data/danhSachGhe.json";
import Ghe from './Ghe';

export default class LayoutGhe extends Component {
    renderTenHangGhe = () => {
        return layout.map((ele, index) => {
            return (
                <div key={index} className='text-warning rowNumber'>
                    {ele.hang}
                </div>
            )
        })
    }

    renderHangGhe = () => {
        return layout.map((ele, index) => {
            return (
                <Ghe key={index} thuTuHang ={index} danhSachGhe={ele.danhSachGhe} />
            )
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-1 text-center">
                            {this.renderTenHangGhe()}
                        </div>
                        <div className="col-lg-11 pl-5">
                            {this.renderHangGhe()}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
