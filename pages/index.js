import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/landing.scss'
import Head from 'next/head'
// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './layouts/sections/event/banner'
import FeatureSection from './layouts/sections/event/feature'
import AboutSection from './layouts/sections/event/about'
import WorkSection from './layouts/sections/event/work'
import TestimonialSection from './layouts/sections/event/testimonial'
import BlogSection from './layouts/sections/event/blog'
import FooterSection from './layouts/sections/event/footer'

const Index = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#000000')
        document.body.style.setProperty('--secondary', '#270080')
        document.body.style.setProperty('--light', '#011275c9')
        document.body.style.setProperty('--dark', '#000000')
    })

    return (
        <div>
            <Head>
                <title>WebDelnica</title>
            </Head>

            <Header className="event nav-lg" />

            <BannerSection />

            <FeatureSection />

            <AboutSection />

            <WorkSection />

            <TestimonialSection />

            <BlogSection />

            <FooterSection />

        </div>
    )
}

export default Index;
