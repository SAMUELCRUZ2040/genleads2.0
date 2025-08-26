import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DifferentFirstRow = () => {
  // Datos para el gráfico de líneas
  const lineData = [
    { name: 'Ene', usuarios: 2400, ventas: 1800, ingresos: 3200 },
    { name: 'Feb', usuarios: 1398, ventas: 2200, ingresos: 2800 },
    { name: 'Mar', usuarios: 9800, ventas: 3400, ingresos: 4100 },
    { name: 'Abr', usuarios: 3908, ventas: 2800, ingresos: 3800 },
    { name: 'May', usuarios: 4800, ventas: 3900, ingresos: 4500 },
    { name: 'Jun', usuarios: 3800, ventas: 4300, ingresos: 5200 },
    { name: 'Jul', usuarios: 4300, ventas: 4800, ingresos: 5800 },
  ];

  return (
    <div className="h-full w-full flex flex-col p-3">
      {/* Header compacto */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">Valor de ventas</h3>
        <p className="text-xs text-gray-600">Análisis de rendimiento</p>
      </div>
      
      {/* Gráfico compacto */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
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
              position={{ x: 100, y: 130 }}
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
            <Line 
              type="monotone" 
              dataKey="usuarios" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="ventas" 
              stroke="#06B6D4" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="ingresos" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda compacta */}
      <div className="flex justify-center gap-3 mt-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Usuarios</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Ventas</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Ingresos</span>
        </div>
      </div>
    </div>
  );
};

export default DifferentFirstRow;