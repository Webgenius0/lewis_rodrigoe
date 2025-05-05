import { useForm } from 'react-hook-form';
import homeHero from '../../assets/homeHero.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
const { register,handleSubmit,formState:{errors} } =useForm()
  
const onSubmit =(data)=>{
    console.log(data);
}

console.log(errors)
  return (
    <section
      className="bg-cover bg-no-repeat bg-center h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="p-10 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
          <div className="form-header">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Welcome Back!
            </h2>
            <p>Please fill in your Email and Password to Sign In.</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                {...register('email_address', {
                  required: 'Email is required',
                })}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.email_address && (
                <p className="text-red-500"> {errors.email_address.message} </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                {...register('Password', {
                  required: 'Password is required',
                })}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.Password && (
                <p className="text-red-500"> {errors.Password.message} </p>
              )}
            </div>
            <Link
              to=""
              className="font-[Manrope] text-[14px] not-italic font-medium leading-[22.96px] capitalize bg-[linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)] bg-clip-text"
              style={{  }}
            >
              Forgot Password
            </Link>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                {...register('options')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
            </div> */}

            <button
              type="submit"
              className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px]"
            >
              Sign in
            </button>

            <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] not-italic font-semibold leading-[170%] mx-auto">
              Don’t have an Account?{' '}
              <Link
                to=""
                className="text-[#0A0A0A] font-[Urbanist] text-[16px] not-italic font-semibold leading-[170%] [text-decoration-line:underline] [text-decoration-style:solid] [text-decoration-skip-ink:none] [text-underline-offset:auto] [text-underline-position:from-font]"
              >
                Sign-Up here!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn

    
    
