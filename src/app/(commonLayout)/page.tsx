import React from 'react';
import Decision from '@/components/landing-page/decision/Decision';
import HeroSection from '@/components/landing-page/hero-section/Hero-section';
import Inside from '@/components/landing-page/inside/inside';
import Partner from '@/components/landing-page/partner/Partner';
import ProblemSection from '@/components/landing-page/problem-section/Problem-section';
import Signal from '@/components/landing-page/signal/Signal';
import PointScroll from '@/components/landing-page/ponit-scroll/Scroll';

const page = () => {
    return (
        <div>
            <PointScroll />
            <HeroSection />
            <Partner />
            <ProblemSection />
            <Decision />
            <Signal />
            <Inside />
        </div>
    );
};

export default page;