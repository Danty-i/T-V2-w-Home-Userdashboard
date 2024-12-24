import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import RightSideBlock from "../../comp/RightSideBlock.js"; // Import RightSideBlock
import "./userdashboard.css";

const Reservations = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Add state for collapsing the sidebar

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle sidebar state
  };

  return (
    <div className={`user-dashboard ${isCollapsed ? "collapsed" : ""}`}>
      <>
        {/* Include the RightSideBlock component */}
        <RightSideBlock
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
        />

        <div className="user-dashboard__left-side-block">
          <header className="user-dashboard__header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 header-block">
                  <div className="header__right">
                    <a
                      href="#"
                      className="menu-icon bars"
                      onClick={toggleSidebar}
                    >
                      <div className="material-icons md-24 material-icons-outlined">
                        menu
                      </div>
                    </a>
                  </div>
                  <div className="header__left">
                    <a href="../login.html" id="logout-icon">
                      <span
                        className="material-icons material-icons-outlined"
                        title="logout"
                      >
                        exit_to_app
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="user-dashboard__main">
            <div className="table__table">
              <table className="table">
                <thead role="rowgroup">
                  <tr role="row" className="title-row">
                    <th>محطة الانطلاق</th>
                    <th>محطة الوجهة</th>
                    <th>تاريخ الرحلة</th>
                    <th>توقيت الرحلة</th>
                    <th>رقم الرحلة</th>
                    <th>رقم الباص</th>
                    <th>حالة الدفع</th>
                    <th />
                  </tr>
                </thead>
                <tbody id="reservations-table-body">
                  {/* سيتم إدراج البيانات هنا بواسطة JavaScript */}
                </tbody>
              </table>
            </div>
          </main>
        </div>

        {/* Confirmation Modal */}
        <div id="confirmationModal">
          <p>هل تريد إلغاء الحجز؟</p>
          <div className="modal-buttons">
            <button id="confirmBtn">تأكيد</button>
            <button id="cancelBtn">إلغاء</button>
          </div>
        </div>
        <div id="overlay" />
      </>
    </div>
  );
};

export default Reservations;
