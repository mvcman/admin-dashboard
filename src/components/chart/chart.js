import React from 'react';
import './chart.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const chart = ({ title, data, grid, dataKeyX, dataKeyY }) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={dataKeyX} stroke="#555" />
                    <YAxis dataKey={dataKeyY} stroke="#555" />
                    <Line type="monotone" dataKey="activeUser" stroke="#555" />
                    <Tooltip />
                    {grid && (
                        <CartesianGrid stroke="#efefef" strokeDasharray="5 5" />
                    )}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default chart;
