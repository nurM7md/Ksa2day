import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import FirstSlider from '../components/FirstSlider'
import NewsSection from '../components/NewsSection'
import NewsSwitcher from '../components/NewsSwitcher'
import SecondSlider from '../components/SecondSlider'
import NewsFile from '../components/NewsFile'
import PageLayout from '../components/PageLayout'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <FirstSlider title={'أخبار الساعة'} link={'/news/أخبار الساعة'}/>
      <NewsSection />
      <NewsSwitcher/>
      <SecondSlider />
      <NewsFile />
      <PageLayout />
      <FirstSlider title={'من دورية'} link={'/news/دورية'}/>
      <Footer />
    </div>
  )
}

export default HomePage