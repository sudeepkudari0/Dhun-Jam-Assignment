import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { allData } from '../types'
import BarChartComponent from './BarChart'
import "./All.css"
const Dashboard = () => {

    const [data, setData] = useState<allData>({
            data :{
                id: 4,
            name: "",
            location: "",
            charge_customers: true,
            business_type: "",
            display_amount: false,
            amount: {
                category_6: '',
                category_7: '',
                category_8: '',
                category_9: '',
                category_10: ''
            }
            }
    });
    const [category_6, setCategory_6] = useState<string>('')
    const [category_7, setCategory_7] = useState<string>('')
    const [category_8, setCategory_8] = useState<string>('')
    const [category_9, setCategory_9] = useState<string>('')
    const [category_10, setCategory_10] = useState<string>('')

    const info = async () => {
        try {
            const res = await axios.get<allData>(`https://stg.dhunjam.in/account/admin/4`);
            const responseData = res.data;
            setData(responseData);
            console.log(responseData);
            setCategory_6(responseData.data.amount.category_6)
            setCategory_7(responseData.data.amount.category_7)
            setCategory_8(responseData.data.amount.category_8)
            setCategory_9(responseData.data.amount.category_9)
            setCategory_10(responseData.data.amount.category_10)
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };
    useEffect(() => {
        info();
    }, []);
    useEffect(() => {
        console.log('Updated charge_customers value:', data.data.charge_customers);
      }, [data.data.charge_customers]);

    const handleRadioChange = (event: { target: { value: string } }) => {
        if (event.target.value === "true") {
            setData((prevData) => ({ ...prevData, data: { ...prevData.data, charge_customers: true }}));
        } else if(event.target.value === "false"){
            setData((prevData) => ({ ...prevData,data: { ...prevData.data, charge_customers: false  }}));
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(parseInt(category_6) < 99 ){
            alert("Custom song request amount cannot be less than 99");
            return
        } else if (parseInt(category_7) < 79 || parseInt(category_8) < 59 || parseInt(category_9) < 39 || parseInt(category_10) < 19){
            alert("Regular song request amount cannot be less than 99, 79, 59, 19 respectively");
            return
        }
        const updatedData = {
            ...data,
            amount: {
                category_6: category_6,
                category_7: category_7,
                category_8: category_8,
                category_9: category_9,
                category_10: category_10,
            }
        };
        setData(updatedData);
        console.log(updatedData);
        axios
            .put(`https://stg.dhunjam.in/account/admin/4`, updatedData)
            .then(() => {
                alert('Data updated successfully');
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className='flex flex-row w-full h-screen justify-center items-center '>
            <div className=''>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                    <div className='m-5 text-center'>
                        <h1 className='text-3xl font-extrabold'>{data.data.name}, {data.data.location} on Dhun Jam</h1>
                    </div>
                    <div className='grid grid-cols-2 items-center justify-center w-[600px] gap-6 text-base'>
                        <div className='w-[300px] justify-center items-center text-left text-base'>
                            <p>Do you want to charge your <br />customers for requesting songs?</p>
                        </div>
                        <div className='flex flex-row gap-4 w-[300px] justify-center items-center'>
                            <input type="radio" name="radio" value={"true"} onChange={handleRadioChange}
                                checked={data.data.charge_customers === true} 
                                className='text-red-600 border-red-600 ring-red-300 ring-offset-red-300'/>
                            <label>Yes</label>
                            <input type="radio" name="radio" value={"false"} onChange={handleRadioChange}
                                checked={data.data.charge_customers === false} />
                            <label>No</label>
                        </div>
                        <div className='w-[300px] justify-center items-center text-left'>
                            <p>Custom song request amount</p>
                        </div>
                        <div className='flex flex-col gap-5 w-[300px] justify-center items-center'>
                            <input className={`inputNumber border-[1px] w-full h-7 rounded-lg text-center 
                            ${!data.data.charge_customers ? 'bg-[#C2C2C2] cursor-not-allowed ' : 'bg-black text-white'
                                }`}
                            readOnly={!data.data.charge_customers}  
                            type="number" 
                            value={category_6}
                            onChange={(e) => setCategory_6(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>regular song request amounts, <br /> from high to low-</p>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <input type="number" className={`inputNumber border-[1px] h-7 rounded-lg w-[60px] text-center
                            ${!data.data.charge_customers ? 'bg-[#C2C2C2] cursor-not-allowed ' : 'bg-black text-white'}`} 
                            readOnly={!data.data.charge_customers}
                            value={category_7} onChange={(e) => setCategory_7(e.target.value)}/>
                            <input type="number" className={`inputNumber border-[1px] h-7 rounded-lg w-[60px] text-center
                            ${!data.data.charge_customers ? 'bg-[#C2C2C2] cursor-not-allowed ' : 'bg-black text-white'}`} 
                            readOnly={!data.data.charge_customers} 
                            value={category_8} onChange={(e) => setCategory_8(e.target.value)}/>
                            <input type="number" className={`inputNumber border-[1px] h-7 rounded-lg w-[60px] text-center
                            ${!data.data.charge_customers ? 'bg-[#C2C2C2] cursor-not-allowed ' : 'bg-black text-white'}`} 
                            readOnly={!data.data.charge_customers} 
                            value={category_9} onChange={(e) => setCategory_9(e.target.value)}/>
                            <input type="number" className={`inputNumber border-[1px] h-7 rounded-lg w-[60px] text-center
                            ${!data.data.charge_customers ? 'bg-[#C2C2C2] cursor-not-allowed ' : 'bg-black text-white'}`} 
                            readOnly={!data.data.charge_customers} 
                            value={category_10} onChange={(e) => setCategory_10(e.target.value)}/>
                        </div>
                    </div>
                    <div className='h-auto m-0 relative'>
                        { data.data.charge_customers && <BarChartComponent categoryData={{...data, category_6: Number(category_6), category_7: Number(category_7), category_8: Number(category_8), category_9: Number(category_9), category_10: Number(category_10)}}/>}
                    </div>
                    { data.data.charge_customers && <div className='relative bottom-[300px] right-5 w-[10px] items-left justify-start'>
                        <h1 className='text-3xl'>₹</h1>
                    </div>}
                    <div className='flex flex-col gap-5 w-[600px] justify-center items-center mt-5'>
                        
                        <input type="submit" value={"Save"} className={` cursor-pointer p-2 rounded-lg p-3 font-bold w-full 
                             ${!data.data.charge_customers ? 'bg-[#C2C2C2] cursor-not-allowed ' : 'bg-[#6741D9] text-white'}
                              `} />
                    </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Dashboard