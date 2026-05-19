"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  Line,
} from 'recharts';
import { memberGrowthData, courseEnrollmentData, recruitmentFunnelData } from '@/lib/mock-data';

export function MemberGrowthChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={memberGrowthData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
            itemStyle={{ color: '#6366f1', fontWeight: 500 }}
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#6366f1"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorTotal)"
            activeDot={{ r: 6, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CourseEnrollmentsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={courseEnrollmentData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
          <XAxis 
            type="number"
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
          />
          <YAxis 
            dataKey="name" 
            type="category"
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }}
            width={120}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#10b981', fontWeight: 500 }}
          />
          <Bar dataKey="alunos" fill="#10b981" radius={[0, 4, 4, 0]} barSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RecruitmentFunnelChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={recruitmentFunnelData}
          margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }}
            dy={10} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(245, 158, 11, 0.05)' }}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#f59e0b', fontWeight: 500 }}
          />
          <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
          <Line type="monotone" dataKey="value" stroke="#ea580c" strokeWidth={3} dot={{ r: 4, fill: '#ea580c' }} activeDot={{ r: 6 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
