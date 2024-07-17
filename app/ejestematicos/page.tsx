// pages/App.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TitleSection from '@/components/custom/titleSection';
import { fetchEjeTematico } from '../../lib/api';
import { CircleArrowRight } from 'lucide-react';
import EjesTematicos from '@/components/custom/ejesTematicosBlock';
import EjesContent from '@/components/custom/ejesContent';

function page() {
  return (
    <div className='mt-[105px] md:mt-[150px]'>
      <EjesContent />
    </div>
  )
}
export default page
