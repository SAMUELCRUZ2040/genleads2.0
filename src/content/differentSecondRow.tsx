import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DifferentSecondRow = () => {
  // Datos para el gráfico de barras
  const barData = [
    { name: 'Ene', valor: 4000 },
    { name: 'Feb', valor: 3000 },
    { name: 'Mar', valor: 5000 },
    { name: 'Abr', valor: 4500 },
    { name: 'May', valor: 6000 },
    { name: 'Jun', valor: 5500 },
    { name: 'Jul', valor: 7000 },
  ];

  return (
    <div className="h-full w-full flex flex-col p-3">
      {/* Header compacto */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">Rendimiento mensual</h3>
        <p className="text-xs text-gray-600">Ingresos por mes</p>
      </div>
      
      {/* Gráfico compacto */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              height={20}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              width={30}
            />
            <Tooltip 
              position={{ x: 10, y: 10 }}
              offset={10}
              allowEscapeViewBox={{ x: true, y: true }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px',
                maxWidth: '120px'
              }}
              wrapperStyle={{ 
                zIndex: 1000,
                pointerEvents: 'none'
              }}
            />
            <Bar 
              dataKey="valor" 
              fill="#8B5CF6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Métrica destacada */}
      <div className="text-center mt-2">
        <div className="text-lg font-bold text-gray-900">$34.5K</div>
        <div className="text-xs text-green-600 font-medium">+12.5% vs mes anterior</div>
      </div>
    </div>
  );
};

export default DifferentSecondRow;