// src/components/Recommend.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Sample images for main thumbnails
import Destination1 from '../assets/Destination1.png'; // Example local images
import Destination2 from '../assets/Destination2.png';
import Destination3 from '../assets/Destination3.png';
import Destination4 from '../assets/Destination4.png';
import Destination5 from '../assets/Destination5.png';
import Destination6 from '../assets/Destination6.png';

// Info icons
import info1 from '../assets/info1.png';
import info2 from '../assets/info2.png';
import info3 from '../assets/info3.png';

export default function Recommend() {
  const navigate = useNavigate();
  const [active, setActive] = useState('The Weekend Break');

  // Updated data with a "gallery" field for each destination
  const data = {
    'The Weekend Break': [
      {
        image: Destination1,
        title: 'Singapore Weekend',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1524070960420-47602852d30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1541267226650-673e4bc869c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1485257334450-84ec1ba6393d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1505230960573-7dbc536e8346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1496898382483-9a789056ffe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1519817793855-93c515796c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination2,
        title: 'Thailand Weekend',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1661962432490-6188a6420a81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1520214572569-0d593dc3f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRoYWlsYW5kfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1595131153384-21ced4991b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRoYWlsYW5kfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination3,
        title: 'Paris Weekend',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1495442358998-961b69f45703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
        ],
      },
      {
        image: Destination4,
        title: 'New Zealand Weekend',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1531804159968-24716780d214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661882021629-2b0888d93c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1466446105453-d151af699ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination5,
        title: 'Bora Bora Weekend',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip',
        gallery: [
          'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1518232856719-965606427a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1509151143140-7295d8a673ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1680700237301-e54315378d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1703548874537-acb9013332b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJvcmElMjBCb3JhfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination6,
        title: 'London Weekend',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9ufGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1661963258031-211e16a9426a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9ufGVufDB8fDB8fHww',
        ],
      },
    ],
    'The Package Holiday': [
      {
        image: Destination1,
        title: 'Singapore Weekend',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1524070960420-47602852d30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1541267226650-673e4bc869c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1485257334450-84ec1ba6393d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1505230960573-7dbc536e8346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1496898382483-9a789056ffe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1519817793855-93c515796c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination2,
        title: 'Thailand Weekend',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1661962432490-6188a6420a81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1520214572569-0d593dc3f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRoYWlsYW5kfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1595131153384-21ced4991b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRoYWlsYW5kfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination3,
        title: 'Paris Weekend',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1495442358998-961b69f45703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
        ],
      },
      {
        image: Destination4,
        title: 'New Zealand Weekend',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1531804159968-24716780d214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661882021629-2b0888d93c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1466446105453-d151af699ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination5,
        title: 'Bora Bora Weekend',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip',
        gallery: [
          'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1518232856719-965606427a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1509151143140-7295d8a673ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1680700237301-e54315378d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1703548874537-acb9013332b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJvcmElMjBCb3JhfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination6,
        title: 'London Weekend',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9ufGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1661963258031-211e16a9426a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9ufGVufDB8fDB8fHww',
        ],
      },
    ],
    'The Group Tour': [
      {
        image: Destination1,
        title: 'Singapore Weekend',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1524070960420-47602852d30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1541267226650-673e4bc869c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1485257334450-84ec1ba6393d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1505230960573-7dbc536e8346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1496898382483-9a789056ffe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1519817793855-93c515796c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination2,
        title: 'Thailand Weekend',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1661962432490-6188a6420a81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1520214572569-0d593dc3f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRoYWlsYW5kfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1595131153384-21ced4991b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRoYWlsYW5kfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination3,
        title: 'Paris Weekend',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1495442358998-961b69f45703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
        ],
      },
      {
        image: Destination4,
        title: 'New Zealand Weekend',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1531804159968-24716780d214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661882021629-2b0888d93c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1466446105453-d151af699ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination5,
        title: 'Bora Bora Weekend',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip',
        gallery: [
          'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1518232856719-965606427a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1509151143140-7295d8a673ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1680700237301-e54315378d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1703548874537-acb9013332b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJvcmElMjBCb3JhfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination6,
        title: 'London Weekend',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9ufGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1661963258031-211e16a9426a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9ufGVufDB8fDB8fHww',
        ],
      },
    ],
    'Long Term Slow Travel': [
      {
        image: Destination1,
        title: 'Singapore Weekend',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1524070960420-47602852d30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1541267226650-673e4bc869c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1485257334450-84ec1ba6393d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1505230960573-7dbc536e8346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1496898382483-9a789056ffe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1519817793855-93c515796c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination2,
        title: 'Thailand Weekend',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1661962432490-6188a6420a81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1520214572569-0d593dc3f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRoYWlsYW5kfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1595131153384-21ced4991b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRoYWlsYW5kfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination3,
        title: 'Paris Weekend',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip',
        gallery: [
          'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGFyaXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1495442358998-961b69f45703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyaXN8ZW58MHx8MHx8fDA%3D',
        ],
      },
      {
        image: Destination4,
        title: 'New Zealand Weekend',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1531804159968-24716780d214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661882021629-2b0888d93c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1466446105453-d151af699ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        image: Destination5,
        title: 'Bora Bora Weekend',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip',
        gallery: [
          'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1518232856719-965606427a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1509151143140-7295d8a673ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://plus.unsplash.com/premium_photo-1680700237301-e54315378d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Qm9yYSUyMEJvcmF8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1703548874537-acb9013332b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJvcmElMjBCb3JhfGVufDB8fDB8fHww',
        ],
      },
      {
        image: Destination6,
        title: 'London Weekend',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9ufGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1661963258031-211e16a9426a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9ufGVufDB8fDB8fHww',
        ],
      },
    ],
    // ... Similarly for 'The Package Holiday', 'The Group Tour', etc.
  };

  // Helper to create a slug from the title
  const makeSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

  // On "Know More" click, pass full destination (including gallery) to TripDetails
  const handleKnowMore = (destination) => {
    const slug = makeSlug(destination.title);
    navigate(`/trip/${slug}`, {
      state: { destination },
    });
  };

  const packages = Object.keys(data); // e.g. ['The Weekend Break', 'The Package Holiday', ...]

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>

      {/* Package Tabs */}
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={active === pkg ? 'active' : ''}
              onClick={() => setActive(pkg)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>

      {/* Destination Cards */}
      <div className="destinations">
        {data[active]?.map((destination, idx) => (
          <div key={idx} className="destination">
            <img src={destination.image} alt={destination.title} />
            <h3>{destination.title}</h3>
            <p>{destination.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={info1} alt="info icon" />
                <img src={info2} alt="info icon" />
                <img src={info3} alt="info icon" />
              </div>
              <h4>₹{destination.cost}</h4>
            </div>
            <div className="distance">
              <span>1000 Kms</span>
              <span>{destination.duration}</span>
            </div>

            <button
              className="know-more"
              onClick={() => handleKnowMore(destination)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* STYLED COMPONENTS */
const Section = styled.section`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;

  .title {
    text-align: center;
    margin-bottom: 1rem;
    h2 {
      font-size: 1.8rem;
      color: #333;
    }
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
      li {
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        font-size: 0.9rem;
        color: #555;

        &:hover {
          background-color: #f0f0f0;
        }
      }

      .active {
        background-color: #8338ec;
        color: white;
        border: none;
      }
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;

    .destination {
      padding: 1rem;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
      }

      h3 {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        color: #333;
      }

      p {
        font-size: 0.9rem;
        color: #666;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;

        .services {
          display: flex;
          gap: 0.3rem;

          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        h4 {
          font-size: 1rem;
          color: #333;
        }
      }

      .distance {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #666;
        margin-bottom: 0.5rem;
      }

      .know-more {
        border: none;
        background-color: #8338ec;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #4c1a9b;
        }
      }
    }
  }
`;
