import apj from '../Assests/apj.jfif'
import bill from '../Assests/bill.jfif'
import einstein from '../Assests/einstein.jpg'
import elon from '../Assests/elon.jfif'
import mainAboutImg from "../Assests/Header.webp";
import HomeLayout from "../Layouts/HomeLayout";

function AboutPage() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills,creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img src={mainAboutImg} id="test1" alt="" />
          </div>
        </div>

        <div className="carousel w-1/2 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className='flex flex-col justify-center items-center gap-4 px-[15%]'>
            <img src={elon} className="w-40 h-40 rounded-full border-2 border-gray-200 " />
            <p className='text-xl'>
              {"Never. I don’t ever give up. I’d have to be dead or completely incapacitated. For my part, I will never give up, and I mean never."}
            </p>
            <h1 className='text-2xl font-semibold'>Elon Musk</h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className='flex flex-col justify-center items-center gap-4 px-[15%]'>
            <img src={apj} className="w-40 h-40 rounded-full border-2 border-gray-200 " />
            <p className='text-xl'>
              {"Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success."}
            </p>
            <h1 className='text-2xl font-semibold'>A.P.J Abdul Kalam</h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className='flex flex-col justify-center items-center gap-4 px-[15%]'>
            <img src={einstein} className="w-40 h-40 rounded-full border-2 border-gray-200 " />
            <p className='text-xl'>
              {"We cannot solve our problems with the same thinking we used when we created them."}
            </p>
            <h1 className='text-2xl font-semibold'>Albert Einstein</h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className='flex flex-col justify-center items-center gap-4 px-[15%]'>
            <img src={bill} className="w-40 h-40 rounded-full border-2 border-gray-200 " />
            <p className='text-xl'>
              {"Success is a lousy teacher. It seduces smart people into thinking they can’t lose."}
            </p>
            <h1 className='text-2xl font-semibold'>Bill Gates</h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutPage;
