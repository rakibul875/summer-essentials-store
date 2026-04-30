import BrandSection from '@/components/HomePage/BrandSection';
import CareGuide from '@/components/HomePage/CareGuide';
import HeroPage from '@/components/HomePage/HeroPage';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroPage/>
      <CareGuide/>
      <BrandSection/>
    </div>
  );
};

export default HomePage;
