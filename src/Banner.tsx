import heroImg from './assets/banner-stack.png'  

function Banner() {
  return(
    <section className='py-16'>

      <div className='min-h-[400px] flex items-center justify-between'>

        {/* Left side */}

      <div className='w-1/2'>
        <h1 className='text-5xl font-bold text-slate-900 leading-tight'> Build Your Ideal 
        
         <br />

         <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600'> Devellopment Stack </span>

        </h1>

        <p className='mt-5 text-gray-500 leading-7 max-w-xl'>
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your <br />
          next project.
        </p>

        {/* Learn More Button  */}


        <div className='flex gap-4 mt-7'>
      
          <button className='bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-3 rounded-md'> Explore Technologies </button>
          <button className='border border-gray-200 px-7 py-3 rounded-md text-gray-600'> Learn More </button>

        </div>

      </div>

      {/* Right side  */}

      <div className='w-1/2 flex justify-center'>

        <img src={heroImg} alt="" className='w-[420px]' />

      </div>

     </div>

    </section>


  )
}


   export default Banner;