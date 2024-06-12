"use client"
import React from 'react'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import withAuth from '@/services/auth/hoc'

const Marketing = () => {
  return (
    <div className='flex flex-row justify-start'>
      <Menu />
      <Navbar />
    </div>
  )
}

export default withAuth(Marketing)
