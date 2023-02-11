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


export  const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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

  // footer Data
