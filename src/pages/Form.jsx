import React from 'react'
import './Form.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import {supabase} from './Supabase/supabase'



const timeOptions = [
  { value: '09:00', label: '09:00' },
  { value: '10:00', label: '10:00' },
  { value: '11:00', label: '11:00' },
  { value: '12:00', label: '12:00' },
  { value: '1:00', label: '1:00' },
  { value: '2:00', label: '2:00' },
  { value: '3:00', label: '3:00' },
  { value: '4:00', label: '4:00' },
  { value: '5:00', label: '5:00' },
  { value: '6:00', label: '6:00' }
];


const tankSizeOptions = [
  { value: '2kl', label: '2kl - 500 rupees' },
  { value: '5kl', label: '5kl - 1k rupees' },
  { value: '7kl', label: '7kl - 2k rupees' },
  { value: '10kl', label: '10kl - 5k rupees' },
  { value: '15kl', label: '15kl - 10k rupees' }
];


const Form = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    contact: '',
    address: '',
    zipcode:'',
    date: null,
    time: null,
    tankSize: null,
    terms:false,
    refnum: ''
  });

  const handleTankSizeChange = (tankSize) => {
    setFormData({ ...formData, tankSize})
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date })
  }

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time })
  }

  const handleClick = async (event) => {
    event.preventDefault()
    const { error } = await supabase.from('Orders').insert({
      name: formData.name,
      contact: formData.contact,
      address: formData.address,
      zipcode: formData.zipcode,
      waterType: formData.waterType,
      refnum: formData.refnum,
      terms: formData.terms
    })
    if (!error) {
      console.log("data inserted successfully")
    }
  }


  return (
    <div className='container'>
      <h1>Form</h1>
      <form>
        <input placeholder='Enter Full Name' type='text' name='name' id='name'
        onChange={(e) => setFormData({...formData, name: e.target.value })} />


        <input placeholder='Contact Number' type='text' name='contact' id='contact'
        onChange={(e) => setFormData({...formData, contact: e.target.value })} />


        <input placeholder='Address' type='text' name='address' id='address'
        onChange={(e) => setFormData({...formData, address: e.target.value })} />


        <input placeholder='Zip Code' type='text' name='zipcode' id='zipcode'
        onChange={(e) => setFormData({...formData, zipcode: e.target.value })} />


        <input type='text' id='city' name='city' value='Mangalore' readOnly/>
        <input type='text' name='state' id='state' value='Karnataka'readOnly/>


        <DatePicker selected={formData.date} onChange={handleDateChange} placeholderText="Date of Delivery" id='date' className='datepicker'/>


        <Select options={timeOptions} onChange={handleTimeChange} placeholder="Preferred Time" className='dropdown' id='time' value={formData.time}/>

        <label className='radio'>Potable Drinking Water<input type='radio' id='potable' name='waterType' value='potable' 
        checked={formData.waterType === 'potable'} onChange={(e) => setFormData({...formData, waterType: e.target.value })}/></label>
        <label className='radio2'>Non-Potable Construction Water<input type='radio' id='nonPotable' name='waterType' value='nonPotable' 
        checked={formData.waterType === 'nonPotable'} onChange={(e) => setFormData({...formData, waterType: e.target.value })} /></label>

        <Select options={tankSizeOptions} onChange={handleTankSizeChange} placeholder="Tank Size" className='dropdown' id='tanksize'/>

        <img src='./images/QR2.jpg'/>

        <input placeholder='Reference Number' type='text' id='refnum' name='refnum'
        onChange={(e) => setFormData({...formData, refnum: e.target.value })} />
        <label className='refnum'> Scan the above QR Code and Enter the Reference Number</label>

        <label className='terms'>I have read and agree to the <a>terms and conditions</a></label><input type='checkbox' id='terms' name='terms' 
        onChange={(e) => setFormData({...formData, terms: e.target.checked })} />

        <input type='submit' onClick={handleClick} />
      </form>
    </div>
  )
}

export default Form;
