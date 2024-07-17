// pages/App.tsx
'use client'

import ContactoBlock from '@/components/custom/contactoBlock';
import React, { useEffect, useState } from 'react';


function page() {
  return (
    <div className='mt-[105px] md:mt-[150px]'>
      <ContactoBlock />
    </div>
  )
}
export default page
