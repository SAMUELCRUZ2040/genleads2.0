import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const DifferentThreeRow = () => {
  // Datos para el gráfico circular
  const pieData = [
    { name: 'Orgánico', value: 45, color: '#8B5CF6' },
    { name: 'Directo', value: 30, color: '#06B6D4' },
    { name: 'Social', value: 15, color: '#10B981' },
    { name: 'Email', value: 10, color: '#F59E0B' },
  ];

  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="h-full w-full flex flex-col p-3">
      {/* Header compacto */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">Fuentes de tráfico</h3>
        <p className="text-xs text-gray-600">Distribución de canales</p>
      </div>
      
      {/* Gráfico circular con centro */}
      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={50}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Porcentaje']}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Centro del donut */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{total}%</div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
        </div>
      </div>

      {/* Leyenda compacta */}
      <div className="grid grid-cols-2 gap-1 mt-2">
        {pieData.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-xs text-gray-600 truncate">{item.name}</span>
            <span className="text-xs font-medium text-gray-900 ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifferentThreeRow;