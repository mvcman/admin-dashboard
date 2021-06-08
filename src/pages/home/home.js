import React from 'react';
import './home.css';
import Feature from '../../components/feature/feature';
import Chart from '../../components/chart/chart';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgets/widgetsmall';
import WidgetLarge from '../../components/widgets/widgetLarge';

const home = () => {
    return (
        <div className="home">
            <Feature />
            <Chart
                data={userData}
                title="User Analytics"
                grid
                dataKeyX="name"
                dataKeyY="activeUser"
            />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    );
};

export default home;
