import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, } from 'recharts'

interface data{
    categoryData: {
    category_6: number,
    category_7: number,
    category_8: number,
    category_9: number,
    category_10: number
}
}
const BarChartComponenet: React.FC<data> = ({categoryData}: data) => {

    const data = [
            {
                name: "Custom",
                value: categoryData.category_6
            },
            {
                name: "Category1",
                value: categoryData.category_7
            },
            {
                name: "Category2",
                value: categoryData.category_8
            },
            {
                name: "Category3",
                value: categoryData.category_9
            },
            {
                name: "Category4",
                value: categoryData.category_10
            }
    ]
  return (
    <div className='w-full h-full mt-8'>
        <ResponsiveContainer width={"100%"} aspect={2}>
                <BarChart data={data} width={50} height={600} className='recharts-container' >
                  <XAxis dataKey="name" axisLine={true} tickLine={false} />
                  <YAxis axisLine={true} tickLine={false}  />
                  <Bar
                    dataKey={"value"}
                    barSize={30}
                    fill="#8884d8"
                    className="recharts-bar-rectangle"
                    radius={[10, 10, 10, 10]}
                  />
                </BarChart>
              </ResponsiveContainer>
    </div>
  )
}
export default BarChartComponenet;