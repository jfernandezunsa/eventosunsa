// pages/App.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TitleSection from '@/components/custom/titleSection';
import { fetchEjeTematico } from '../../lib/api';
import { CircleArrowRight } from 'lucide-react';
import EjesTematicos from '@/components/custom/ejesTematicosBlock';

function page() {
  return (
    <div className='mt-[150px]'>
      <EjesTematicos />
  </div>
  )
}
export default page
