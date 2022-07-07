import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import LayoutGhe from "./LayoutGhe.jsx"
import SelectedChairTable from './SelectedChairTable';
import { connect } from 'react-redux';

class BaiTapBookingTicket extends Component {
  renderTotalPrice = () => {
    return this.props.selectedChairs.reduce((total, value) => {
      return total += value.gia;
    }, 0)
  }

  render() {
    return (
      <div style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./images/bgmovie.jpg')", backgroundSize: "cover", }}>
        <div style={{ position: "fixed", backgroundColor: "rgb(0,0,0,0.7)", width: "100%", height: "100%" }}>
          <div className="containter-fluid">
            <div className="row">
              {/* LAYOUT RẠP CHIẾU PHIM------------------------------ */}
              <div className="col-lg-8">
                <div>
                  <p className="text-center text-warning" style={{ fontSize: 25 }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</p>
                  <p className="text-center text-white" style={{ fontSize: 18 }}>Screen</p>
                  <div className="screen"></div>
                </div>
                <div>
                  <LayoutGhe />
                </div>
              </div>

              {/* DANH SÁCH GHẾ ĐANG CHỌN------------------- */}
              <div className="col-lg-4">
                <div className="text-center text-white" style={{ fontSize: 25, marginTop: 20 }}>
                  <p>DANH SÁCH GHẾ BẠN CHỌN</p>
                </div>
                <div>
                  <button className="gheDuocChon mb-2 ml-0"></button>
                  <span className="text-white ml-2" style={{ fontSize: 20 }}>Ghế đã đặt</span>
                  <br />
                  <button className="gheDangChon mb-2 ml-0"></button>
                  <span className="text-white ml-2" style={{ fontSize: 20 }}>Ghế đang chọn</span>
                  <br />
                  <button className="ghe mb-2 ml-0"></button>
                  <span className="text-white ml-2" style={{ fontSize: 20 }}>Ghế chưa đặt</span>
                  <br />
                </div>
                <div className='selectedChairTable'>
                  <table className="table mt-4" border={1}>
                    <thead className="text-white">
                      <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                      </tr>
                    </thead>
                    <tbody className="text-warning">
                      <SelectedChairTable />
                    </tbody>
                    <tfoot className='text-white' style ={{fontSize:15}}>
                      <tr>
                        <th></th>
                        <th>Tổng tiền</th>
                        <th>
                          {this.renderTotalPrice().toLocaleString()}
                        </th>
                      </tr>
                    </tfoot>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return { ...state.bookingTicketReducer }
})(BaiTapBookingTicket)