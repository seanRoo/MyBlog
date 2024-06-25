import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import LoginImg from '../assets/LogIn.png'
import DashboardNonEmpty from '../assets/Dashboard_NonEmptyCheckIn.jpg'
import DashboardEmpty from '../assets/Dashboard_MyCalendarTab.jpg'
import ViewDiscussion from '../assets/ViewDiscussionWithReplies.jpg'
import DiscussionList from '../assets/DiscussionList.png'
import MonthlyData from '../assets/MonthlyData.png'
import MyConsultants from '../assets/MyConsultants.png'
import MyRelief from '../assets/MyRelief.png'
import '../pages/HomePage.css'

const images = [
  LoginImg,
  DashboardEmpty,
  DashboardNonEmpty,
  ViewDiscussion,
  DiscussionList,
  MonthlyData,
  MyConsultants,
  MyRelief,
]

const responsiveSettings = [
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 100,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]

const Carousel = ({ height, width }) => {
  return (
    <div
      style={{
        height: 400,
        margin: 'auto',
        width: width,
      }}
    >
      <Slide
        indicators
        autoplay={false}
        slidesToScroll={5}
        slidesToShow={5}
        responsive={responsiveSettings}
      >
        {images.map((img) => (
          <div>
            <img
              style={{
                border: '1px solid black',
                borderRadius: 20,
                height: 350,
                width: 200,
              }}
              src={img}
            />
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Carousel
