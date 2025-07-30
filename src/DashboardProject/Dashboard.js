import React from 'react';
import './Dashboard.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const infoCards = [
  {
    title: "Rent Collected",
    value: "₹ 1,50,000",
    trend: "Increased by 12%",
    bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    title: "New Applications",
    value: "432",
    trend: "Decreased by 5%",
    bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  },
  {
    title: "Visitors Online",
    value: "7,921",
    trend: "Increased by 8%",
    bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  },
];

const barData = [
  { month: 'Jan', rent: 4000, applications: 2400, visits: 2400 },
  { month: 'Feb', rent: 3000, applications: 1398, visits: 2210 },
  { month: 'Mar', rent: 2000, applications: 9800, visits: 2290 },
  { month: 'Apr', rent: 2780, applications: 3908, visits: 2000 },
  { month: 'May', rent: 1890, applications: 4800, visits: 2181 },
  { month: 'Jun', rent: 2390, applications: 3800, visits: 2500 },
  { month: 'Jul', rent: 3490, applications: 4300, visits: 2100 },
];

const pieData = [
  { name: 'Search Engines', value: 30 },
  { name: 'Direct Click', value: 30 },
  { name: 'Referrals', value: 40 },
];

const areaData = [
  { date: 'Mar 1', value: 10000 },
  { date: 'Mar 2', value: 30000 },
  { date: 'Mar 3', value: 26000 },
  { date: 'Mar 4', value: 20000 },
  { date: 'Mar 5', value: 19000 },
  { date: 'Mar 6', value: 31000 },
  { date: 'Mar 7', value: 33000 },
  { date: 'Mar 8', value: 29000 },
  { date: 'Mar 9', value: 25000 },
  { date: 'Mar 10', value: 31000 },
  { date: 'Mar 11', value: 30000 },
  { date: 'Mar 12', value: 35000 },
  { date: 'Mar 13', value: 40000 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ff7979'];

const DashboardHome = () => {
  return (
    <div className="dashboard-container">
      <div className="info-cards">
        {infoCards.map((card, idx) => (
          <div className="info-card" style={{ background: card.bg }} key={idx}>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
            <p>{card.trend}</p>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <div className="area-chart">
          <h3>📊 Area Chart Example</h3>
          <AreaChart width={700} height={250} data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" dot={{ r: 5 }} />
          </AreaChart>
        </div>

        <div className="bar-chart">
          <h3>Monthly Rental Activity</h3>
          <BarChart width={500} height={250} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rent" fill="#8884d8" />
            <Bar dataKey="applications" fill="#82ca9d" />
            <Bar dataKey="visits" fill="#ffc658" />
          </BarChart>
        </div>

        <div className="pie-chart">
          <h3>User Sources</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <div className="pie-legend">
            {pieData.map((entry, i) => (
              <div key={i}>
                <span style={{ background: COLORS[i] }} className="dot" /> {entry.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
