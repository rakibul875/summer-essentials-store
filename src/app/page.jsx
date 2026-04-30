import BrandSection from '@/components/HomePage/BrandSection';
import CareGuide from '@/components/HomePage/CareGuide';
import HeroPage from '@/components/HomePage/HeroPage';
import PopularProducts from '@/components/HomePage/PopularProducts';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroPage/>
      <PopularProducts/>
      <CareGuide/>
      <BrandSection/>
    </div>
  );
};

export default HomePage;
