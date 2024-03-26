import { useState } from 'react'
import '../Reusable/SectionHeader.css'
function SectionHeader({ title, subTitle, empty, logo }) {

   return (
      <div className="section__header">
         {logo && logo}
         {title}
         {subTitle}
         {empty && empty}
      </div>)
}

export default SectionHeader
