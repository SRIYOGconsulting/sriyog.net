import React, { useRef, useState } from 'react'
import Ribbon from '../Components/Ribbon';



const Internship = () => {
  const headshot = useRef(null);
  const cv = useRef(null)
  const [form,setForm] = useState(
    {firstname: "",
    lastname: "",
    country:"",
    phone:"",
    email:"",
    gender:"",
    headshot:"",
    cv:"",
    internshipPeriod:"",
    institution:"",
    subject: "",
    passedyear: "",
})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e)=>{
    e.preventDefault();
    if(!form.headshot || !form.cv){
        alert("all fields must be filled")
    }else{
    console.log('Internship Form Data Submitted:', form);
    alert('Your Internship form has been submitted successfully!');
    setForm({firstname: "",
    lastname: "",
    country:"",
    phone:"",
    email:"",
    gender:"",
    cv:"",
    headshot:"",
    internshipPeriod:"",
    institution:"",
    passedyear: "",
    subject:""
    })}
}
  return (
    <>
    {/* Full-width Ribbon Header */}
    <Ribbon name="Internship" />
    <div className='my-12'>
    <div className=' w-full max-w-7xl mx-auto flex flex-col px-5 py-15 '>
        <form onSubmit={handleSubmit} className='footer shadow rounded-lg p-5'>
            <div className='grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>First Name *</label>
                <input required name='firstname' value={form.firstname} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" pattern='[A-Za-z\s]+' onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>Last Name *</label>
                <input required name='lastname' value={form.lastname} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" pattern='[A-Za-z\s]+' onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>Country *</label>
                <input required name='country' value={form.country} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" pattern='[A-Za-z\s]+' onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>Phone *</label>
                <input required name='phone' value={form.phone} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" pattern='[0-9\W]+' onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>Email *</label>
                <input required name='email' value={form.email} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" inputMode='email' onChange={handleChange}/>
            </div>
            <div className="flex flex-col ">
                <label className="mb-1 font-medium pl-[2px]">Gender *</label>
                    <div className='relative h-[42px]'>
                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            required
                            className="absolute inset-0 appearance-none w-full px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                            >
                                <option value="">-- Select --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Rather Not to Say">Rather Not to Say</option>
                                <option value="Other">Other</option>
                        </select>
                        <span className='absolute right-5 pointer-events-none translate-y-1/2 top-0.5 cursor-pointer'>
                            <img src="/icons/dropdown.svg" className='w-[20px] h-[20px]' alt="" />
                        </span>
                    </div>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Upload CV/ Resume *</label>
                <div className='relative'>
                    <input 
                    type="file"
                    name="cv"
                    ref={cv} 
                    accept=".pdf"
                    onChange={(e)=>setForm({...form,cv:e.target.files[0]})} 
                    className="px-4 w-full h-[50px] pt-2 bg-white rounded-md focus:ring-2
                        file:border-none text-gray-700 file:mr-3 file:py-1 file:rounded-md file:shadow-md file:cursor-pointer file:bg-red-50
                      file:text-red-600 border border-gray-300 file:hover:bg-red-100  focus:ring-teal-700 focus:outline-none"/>                    {form.cv && (<button  onClick={()=>{setForm({...form,cv:""}),cv.current.value = "";}} className='absolute cursor-pointer -top-8 right-1  bg-gray-200 rounded-full px-2'>X</button>)}
                </div>                
                {form.cv && (
                    <div className='relative'>
                     <iframe src={URL.createObjectURL(form.cv)} className='h-[150px] w-fit'/>
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-1'>
                <label>Headshot *</label>
                <div className='relative inline-block'>
                <input type="file" name="headshot" ref={headshot} accept=".jpg,.jpeg,.png" onChange={(e)=>setForm({...form,headshot:e.target.files[0]})} 
                        className="px-4 w-full h-[50px] pt-2 bg-white rounded-md focus:ring-2
                                   file:border-none text-gray-700 file:mr-3 file:py-1 file:rounded-md file:shadow-md file:cursor-pointer file:bg-red-50
                                 file:text-red-600 border border-gray-300 file:hover:bg-red-100  focus:ring-teal-700 focus:outline-none"/>
                 {form.headshot && (<button  onClick={()=>{setForm({...form,headshot:""}),headshot.current.value = "";}} className='absolute cursor-pointer -top-8 right-1 bg-gray-200 rounded-full px-2'>X</button>)}
                </div>
                   {form.headshot && (
                    <div className='relative w-fit'>
                      <img
                        src={URL.createObjectURL(form.headshot)}
                        alt="Headshot Preview"
                        className="h-[150px] w-fit mt-2 rounded-md border"
                     />
                    </div>
                )}
            </div>
            <div className="flex flex-col ">
                <label className="mb-1 font-medium pl-[2px]">Internship Subject *</label>
                <div className='relative h-[42px]'>
                        <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="absolute inset-0 appearance-none w-full px-4  border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                            >
                                <option value="">-- Select --</option>
                                <option value="Male">Management</option>
                                <option value="Female">Social Works</option>
                                <option value="Rather Not to Say">IT</option>
                                <option value="Other">Other</option>
                        </select>
                        <span className='absolute right-5 pointer-events-none translate-y-1/2 top-0.5 cursor-pointer'>
                            <img src="/icons/dropdown.svg" className='w-[20px] h-[20px]' alt="" />
                        </span>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>Name of Institution *</label>
                <input required name='institution' value={form.institution} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" pattern='[A-Za-z/ ]+' onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='pl-[2px]'>Passed Year *</label>
                <input required name='passedyear' value={form.passedyear} type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none" pattern='[0-9\W]+' onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-1'>
                    <label>Internship Period * </label>
                    <div className='relative h-[42px]'>
                    <select
                        name="internshipPeriod"
                        value={form.internshipPeriod}
                        onChange={handleChange}
                        required
                        className="absolute inset-0 appearance-none w-full px-4  border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        >
                        <option value="">-- Select --</option>
                        <option value="2 months">2 months</option>
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                    </select>
                    <span className='absolute right-5 pointer-events-none translate-y-1/2 top-0.5 cursor-pointer'>
                        <img src="/icons/dropdown.svg" className='w-[20px] h-[20px]' alt="" />
                    </span>
                    </div>
            </div>
            </div>
            <div className='py-5 flex  justify-center mt-5 md:mr-10'>
                <button type='submit' className=' bg-black py-2 text-xl rounded-md px-10 text-white hover:bg-red-700 cursor-pointer'>Submit</button>
            </div>
        </form>
        
    </div>
    </div>
    </>
  )
}

export default Internship
