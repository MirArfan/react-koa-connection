import React from 'react'
import Hero from '../components/heroComponent/Hero'
import AboutSection from '../components/aboutComponent/AboutSection'
import ExperienceSection from '../components/experienceComponent/ExperienceSection'
import ProjectSection from '../components/projectsComponent/ProjectSection'
import ContactSection from '../components/contactComponent/ContactSection'
import FooterSection from '../components/footerComponent/FooterSection'
import NavBar from '../components/navComponent/NavBar'
import ApiCall from '../components/patchData/ApiCall'
import QuoteData from '../components/patchData/QuoteData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/ErrorComponent/errorPage'
import UserForm from '../components/User/UserForm'

const HomePage = () => {
  return (
    <div>

        <BrowserRouter>
        <NavBar/>

          <Routes>
              <Route path='/Portfolio/' index element={<><Hero/> < ApiCall/></> } />
              {/* <Route path='/Portfolio' index element={<QuoteData/>} /> */}
              <Route path='/Portfolio/about' element={<AboutSection/>} />
              <Route path='/Portfolio/experience' element={<ExperienceSection/>} />
              <Route path='/Portfolio/project' element={<ProjectSection/>} />
              <Route path='/Portfolio/contact' element={<ContactSection/>} />
              <Route path='/Portfolio/user' element={<UserForm/>} />
              <Route path='*' element={<ErrorPage/> } />
          </Routes>
          <FooterSection/>
        </BrowserRouter>
    </div>
  )
}

export default HomePage