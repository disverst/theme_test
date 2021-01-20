import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/landing.scss'
import Head from 'next/head'
// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './layouts/sections/event/banner'
import BookingSection from './layouts/sections/event/booking'
import AboutSection from './layouts/sections/event/about'
import SpeakerSection from './layouts/sections/event/speaker'
import SponserSection from './layouts/sections/event/sponsor'
import ScheduleSection from './layouts/sections/event/schedule'
import TestimonialSection from './layouts/sections/event/testimonial'
import GallerySection from './layouts/sections/event/gallery'
import CounterSection from './layouts/sections/event/counter'
import SubscribeSection from './layouts/sections/event/subscribe'
import PricingSection from './layouts/sections/event/pricing'
import BlogSection from './layouts/sections/event/blog'
import FooterSection from './layouts/sections/event/footer'

const Event = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#000000')
        document.body.style.setProperty('--secondary', '#270080')
        document.body.style.setProperty('--light', '#011275c9')
        document.body.style.setProperty('--dark', '#000000')
    })

    return (
        <div>
            <Head>
                <title>Events Layout </title>
            </Head>

            <Header className="event nav-lg" />

            <BannerSection />

            <BookingSection />

            <AboutSection />

            <SpeakerSection />

            <SponserSection />

            <ScheduleSection />

            <TestimonialSection />

            <GallerySection />

            <CounterSection />

            <SubscribeSection />

            <PricingSection />

            <BlogSection />

            <FooterSection />

        </div>
    )
}

export default Event;
