import React from 'react';
import Head from 'next/head';
import Project from '@/components/Project';
import { motion } from 'framer-motion'

type About = {
  name: string,
  title: string,
  about: string
};

type HomeProps = {
  about: About;
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Arup Basak</title>
      </Head>
      <div className=''>
        <div className="m-5 h-screen" id="div">
          <div className='absolute right-0 top-0'>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.3
              }
            }}
            className='mobile:text-7xl desktop:text-8xl py-5 font-bold cursor-default'>
            ARUP BASAK
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.3
              }
            }}
            className='mobile:text-2xl desktop:text-3xl'>
            Versatile Enthusiastic Programmer
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.3
              }
            }}
            className='py-10 desktop:w-4/5 text-justify'>
            As a B.Tech student, I have spent the last two years learning and working towards my goal of becoming an expert in Android development. I am dedicated to my studies and work hard to achieve my goals. In my free time, I enjoy learning about new technologies and exploring the latest tools and platforms for developing Android apps. I believe that with my skills and determination, I can succeed as a freelancer and make a positive impact in the field of Android development.
          </motion.div>
        </div>
      </div>
      {/* <div className='grid mobile: grid-cols-1 desktop:grid-cols-4 gap-3 mobile:w-4/5 desktop:w-3/5 m-auto'>

      </div> */}
    </div>
  );
};

// export const getStaticProps: GetStaticProps<{ about: About }> = async () => {
//   const res = await fetch(`http://localhost:3000/api/about`);
//   const about = await res.json();
//   return {
//     props: {
//       about
//     }
//   };
// };

export default Home;