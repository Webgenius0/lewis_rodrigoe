import React from 'react'
import { useForm } from 'react-hook-form';

const SignIn = () => {
const { register,handleSubmit,formState:{errors} } =useForm()
  
const onSubmit =(data)=>{
    console.log(data);
}

console.log(errors)
  return (
    <div className="p-10 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        React Hook Form
      </h2>
      <form
       onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className='flex flex-col gap-2'>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
           {...register("first_name" , {required:"First name is required"} )}
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {
            errors.first_name &&(
                <p  className='text-red-500'> {errors.first_name.message} </p>
            )
          }


        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
              {...register("options")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About You
          </label>
          <textarea
                    {...register("about_you")}
            placeholder="Tell us about yourself"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>

        
      </form>
    </div>
  );
}

export default SignIn

    
    
