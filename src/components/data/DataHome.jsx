// header data


// service img
import service1 from '../../assets/images/service-1.jpg'
import service2 from '../../assets/images/service-2.jpg'
import service3 from '../../assets/images/service-3.jpg'
import service4 from '../../assets/images/service-4.jpg';

//   new properties image
import slider1 from '../../assets/images/slider/1.jpg'
import slider2 from '../../assets/images/slider/2.jpg'
import slider3 from '../../assets/images/slider/3.jpg'
import slider4 from '../../assets/images/slider/4.jpg'
import slider5 from '../../assets/images/slider/5.jpg'
import slider6 from '../../assets/images/slider/6.jpg'
import slider7 from '../../assets/images/slider/7.jpg'
import slider8 from '../../assets/images/slider/8.jpg'
import slider9 from '../../assets/images/slider/10.jpg'

// sale properties image

import newSlider1 from '../../assets/images/newSlider1.jpg'
import newSlider2 from '../../assets/images/newSlider2.jpg'
import newSlider3 from '../../assets/images/newSlider3.jpg'

// filter pages images
import img1 from '../../assets/images/recentSearch.jpg'
import img2 from '../../assets/images/recentSearch1.jpg'
import img3 from '../../assets/images/recentSearch2.jpg'
import img4 from '../../assets/images/recentSearch3.jpg'
import img5 from '../../assets/images/recentSearch4.jpg'


// description page icon

import {MdOutlineFastfood} from 'react-icons/md'
import { SiGoogleclassroom } from 'react-icons/si'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { GrWorkshop } from 'react-icons/gr'
import { SiUps } from 'react-icons/si'
import { FiServer } from 'react-icons/fi'
import { CgGames } from 'react-icons/cg'
import { GrYoga } from 'react-icons/gr'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {GiDiscussion} from 'react-icons/gi'
import {HiBuildingStorefront} from 'react-icons/hi2'
import {MdOutlineFoodBank} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {FaServer} from 'react-icons/fa'
import {RiBuilding2Fill} from 'react-icons/ri'
import {GiSparkPlug} from 'react-icons/gi'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'


export  const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const settings2 = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:false,
  // autoplaySpeed:200,
  cssEase : 'linear',
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// header Data 
export const headerDatas = [
  {
      id: 1,
      navDropDownLInk: ' Warehouse for rent in Chennai ',
      path: "/warhouse-rent-chennai"
  },
  {
      id: 2,
      navDropDownLInk: 'Warehouse for sale in Chennai ',
      path: "/warhouse-rent-chennai"
  },
  {
      id: 3,
      navDropDownLInk: 'Office for rent in IT park Chennai',
      path: "/warhouse-rent-chennai"
  },
  {
      id: 4,
      navDropDownLInk: ' 100 Seater office for rent in Chennai ',
      path: "/warhouse-rent-chennai"
  },
  {
      id: 5,
      navDropDownLInk: ' 200 Seater office for rent in Chennai ',
      path: "/warhouse-rent-chennai"
  },
  {
      id: 6,
      navDropDownLInk: ' Office for rent in Chennai ',
      path: "/warhouse-rent-chennai"
  },
  {
      id: 7,
      navDropDownLInk: ' Rental income property for sale in Chennai ',
      path: "/warhouse-rent-chennai"
  }
]

export const services = [
    {
      id: 1,
      serviceType: ' PROPERTY CONSULTING',
      imgSrc:service1,
      alt: 'service-img'
    },
    {
      id: 2,
      serviceType: ' INTERIOR DESIGN CONTRACTING',
      imgSrc: service2,
      alt: 'service-img'
    },
    {
      id: 3,
      serviceType: ' OFFICE MAINTENANCE & INDOOR LIVE PLANT RENTAL SERVICES',
      imgSrc: service3,
      alt: 'service-img'
    },
    {
      id: 4,
      serviceType: ' STATIONARY SERVICE',
      imgSrc: service4,
      alt: 'service-img'
    },
  ];




export const newProperties = [
    {
      id: 1,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider1,
    },
    {
      id: 2,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider2,
    },
    {
      id: 3,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider3,
    },
    {
      id: 4,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider4,
    },
    {
      id: 5,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider5,
    },
    {
      id: 6,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider6,
    },
    {
      id: 7,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider7,
    },
    {
      id: 8,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider8,
    },
    {
      id: 9,
      title: '1300 sqft 100 seat furshed office at ambattur',
      imgSrc: slider9,
    },
  ]

  export const saleProperties = [
    {
        id : 1,
        saleImg :newSlider1,
        title : '2000 sqft 25 seat 4 cabin Furnished',
        location : 'Chennai, Ambattur' ,
        price : 'INR 4000000',
        propertyType : 'Commercial',
        sqft : 11335
    },
    {
        id : 2,
        saleImg :newSlider2,
        location : 'Chennai, Thambaram ' ,
        title : '3000 sqft 40 seat 6 cabin Furnished',
        price : 'INR 6000000',
        propertyType : 'Co-working',
        sqft : 12337
    },
    {
        id : 3,
        saleImg :newSlider3,
        location : 'Chennai, Guindy' ,
        title : '5000 sqft 80 seat 8 cabin Furnished',
        price : 'INR 10000000',
        propertyType : 'Commercial',
        sqft : 15735
    },
    {
        id : 4,
        saleImg :newSlider1,
        location : 'Chennai, Guindy' ,
        title : '5000 sqft 80 seat 8 cabin Furnished',
        price : 'INR 10000000',
        propertyType : 'Commercial',
        sqft : 15735
    },
  ]

// filter data
export const cardDatas = [
  {
    id : 1,
    img : img1,
    title : '1800 Sqft 30 Seater Furnished Office',
    location : 'Perungudi, Chennai',
    price : 400000,
  },
  {
    id : 2,
    img : img2,
    title : '5000 sqft 80 seat 8 cabin Furnished',
    location : 'Guindy, Chennai',
    price : 458000,
  },
  {
    id : 3,
    img : img3,
    title : '3000 sqft 40 seat 6 cabin Furnished',
    location : 'Thambaram, Chennai',
    price : 307000,
  },
  {
    id : 4,
    img : img4,
    title : '1800 Sqft 30 Seater Furnished Office',
    location : 'Kolathur, Chennai',
    price : 650000,
  },
  {
    id : 5,
    img : img5,
    title : '1800 Sqft 30 Seater Furnished Office',
    location : 'Kolathur, Chennai',
    price : 750000,
  },
  {
    id : 6,
    img : img2,
    title : '200 Seater office for rent in Chennai',
    location : 'Kolathur, Chennai',
    price : 650000,
  },
  {
    id : 7,
    img : img1,
    title : '1800 Sqft 30 Seater Furnished Office',
    location : 'Kolathur, Chennai',
    price : 650000,
  },
  {
    id : 8,
    img : img3,
    title : '3000 sqft 40 seat 6 cabin Furnished',
    location : 'Kolathur, Chennai',
    price : 650000,
  },
]

// Description page

// interior facility data

export const InteriorFacility = [
  {
    id : 1 ,
    icon : <GiDiscussion/>,
    title : 'Reception'
  },
  {
    id : 2 ,
    icon : <MdOutlineMeetingRoom/>,
    title : 'Meeting room'
  },
  {
    id : 3 ,
    icon : <SiGoogleclassroom/>,
    title : 'Conference room'
  },
  {
    id : 4,
    icon : <MdOutlineManageAccounts/>,
    title : '4 manager cabin'
  },
  {
    id : 5 ,
    icon : <GrWorkshop/>,
    title : ' 95 modular workstations'
  },
  {
    id : 6 ,
    icon : <SiUps/>,
    title : 'UPS room'
  },
  {
    id : 7 ,
    icon : <FiServer/>,
    title : 'Server room'
  },
  {
    id : 8 ,
    icon : <MdOutlineFastfood/>,
    title : 'Pantry'
  },
]

// comman facility data

export const commanFacility = [
  {
    id : 1 ,
    icon : <HiBuildingStorefront/>,
    title : 'Auditorium'
  },
  {
    id : 2 ,
    icon : <MdOutlineFoodBank/>,
    title : 'Food court'
  },
  {
    id : 3 ,
    icon : <CgGym/>,
    title : 'Gym'
  },
  {
    id : 4 ,
    icon : <CgGames/>,
    title : 'Indoor games'
  },
  {
    id : 5 ,
    icon : <GrYoga/>,
    title : 'Yoga center'
  },
  {
    id : 6 ,
    icon : <GiSparkPlug/>,
    title : ' Outdoor gardening and landscape'
  },
  {
    id : 7 ,
    icon : <MdOutlineFastfood/>,
    title : 'Pantry'
  },
  {
    id : 8 ,
    icon : <FaServer/>,
    title : 'Server room'
  },
  {
    id : 9 ,
    icon : <RiBuilding2Fill/>,
    title : 'Plug & play office space suits for IT / ITES companies.'
  },
]

// commercial data
 export const commercial = [
  {
    id : 1 ,
    icon : <HiOutlineCurrencyRupee/>,
    title : 'Rent  :  Rs. 65 / sqft'
  },
  {
    id : 2 ,
    icon : <HiOutlineCurrencyRupee/>,
    title : 'Maintenance :  Rs. 9.5 / sqft'
  },
 ]

//  filtter page data
export const FeaturedListing = [
  {
    id :1,
    img : img1,
    location : 'Ambattur , Chennai',
    sqft : '4800 sqft'
  },
  {
    id :2,
    img : img3,
    location : 'Guindy , Chennai',
    sqft : '3200 sqft'
  },
  {
    id :3,
    img : img4,
    location : 'Thambaram , Chennai',
    sqft : '5100 sqft'
  },
]

export const RecentSearch = [
  {
    id :1,
    img : img2,
    location : 'Red Hills , Chennai',
    sqft : '2500 sqft'
  },
  {
    id :2,
    img : img1,
    location : 'T.Nagar , Chennai',
    sqft : '3900 sqft'
  },
  {
    id :3,
    img : img5,
    location : 'Ambattur , Chennai',
    sqft : '4800 sqft'
  },
]
