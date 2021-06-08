import React from 'react';
import './feature.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const Feature = () => {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,423</span>
                    <span className="featureMoneyRate">
                        +2.5 <ArrowUpward className="featureIcon" />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,423</span>
                    <span className="featureMoneyRate">
                        -3.4 <ArrowDownward className="featureIcon negative" />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,423</span>
                    <span className="featureMoneyRate">
                        +1.4 <ArrowUpward className="featureIcon" />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,423</span>
                    <span className="featureMoneyRate">
                        -11.4 <ArrowDownward className="featureIcon negative" />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
        </div>
    );
};

export default Feature;
