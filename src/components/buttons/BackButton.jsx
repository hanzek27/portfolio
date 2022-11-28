import React from 'react'
import { motion } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Back } from '../Icons';

export default function BackButton() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const Icon = pathname === '/' ? Home : Back
  return (
    <button onClick={()=> navigate(-1)}>
      <Icon width='25px' />
    </button>
  )
}
