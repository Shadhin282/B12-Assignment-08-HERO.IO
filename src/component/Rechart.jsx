import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Rechart = ({ ratings }) => {
    
    return (
       <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={ratings}
        layout="vertical" // 👈 This makes bars vertical
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" /> {/* number values go to X-axis */}
        <YAxis dataKey="name" type="category" /> {/* names go on Y-axis */}
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#9F62F2" barSize={20} radius={[4, 4, 4, 4]} />
      </BarChart>
    </ResponsiveContainer>
          
        
    );
};

export default Rechart;