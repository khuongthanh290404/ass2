import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary mt-5">
        <table className="table container">
          <tr>
            <td className="tdfooter bg-secondary text-white">
              <div>
                {/* <img src="/img/logo dinh tung.png" className="logo" alt="" height="48px"> */}
                <b>ASM-PH46171</b>
                <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
              </div>
            </td>
            <td className="tdfooter bg-secondary text-white">
              <div>
                <b className="mb-4">Sơ đồ</b>
                <p className="mb-4 mt-4">Trang chủ</p>
                <p className="mb-4">Sản phẩm</p>
                <p className="mb-4">Giỏ hàng</p>
              </div>
            </td>
            <td className="tdfooter bg-secondary text-white">
              <div>
                <b className="mb-4">CSKH</b>
                <p className="mb-4 mt-4">Các hình thức thanh toán</p>
                <p className="mb-4">Phản hồi thường gặp</p>
                <p className="mb-4">Chính sách bảo mật</p>
              </div>
            </td>
            <td className="tdfooter bg-secondary text-white">
              <div>
                <b className="mb-4">Địa chỉ liên lạc</b>
                <p className="mb-4 mt-4">tungdvph46171@fpt.edu.vn</p>
                <p className="mb-4">0123.456.789</p>
                <p className="mb-4">Nam Từ Liêm, Hà Nội</p>
              </div>
            </td>
          </tr>
        </table>
        <p className="text-center text-white mt-2">
          Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
