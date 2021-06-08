import React from 'react';
import './widget.css';

const WidgetLarge = () => {
    const Button = ({ type }) => {
        return <button className={'widgetLgBtn ' + type}>{type}</button>;
    };
    return (
        <div className="widgetLarge">
            <h3 className="widgetSmalltitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                            className="widgetSmallImg"
                        />
                        <span className="widgetLgName">Demo name</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                            className="widgetSmallImg"
                        />
                        <span className="widgetLgName">Demo name</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetSmallImg"
                        />
                        <span className="widgetLgName">Demo name</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                            className="widgetSmallImg"
                        />
                        <span className="widgetLgName">Demo name</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="declined" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLarge;
