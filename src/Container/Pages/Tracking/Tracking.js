import React from 'react';

function Tracking(props) {
    return (
        <div>
            <div>
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content d-md-flex justify-content-between align-items-center">
                                <div className="mb-3 mb-md-0">
                                    <h2>Order Tracking</h2>
                                    <p>Very us move be blessed multiply night</p>
                                </div>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="tracking.html">Order Tracking</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Home Banner Area =================*/}
                {/*================Tracking Box Area =================*/}
                <section className="tracking_box_area section_gap">
                    <div className="container">
                        <div className="tracking_box_inner">
                            <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given
                                to you on your receipt and in the confirmation email you should have received.</p>
                            <form className="row tracking_form" action="#" method="post" noValidate="novalidate">
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="order" name="order" placeholder="Order ID" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Billing Email Address" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <button type="submit" value="submit" className="btn submit_btn">Track Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Tracking;