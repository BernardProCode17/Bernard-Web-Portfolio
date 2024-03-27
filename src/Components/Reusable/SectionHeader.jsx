import { useState } from 'react'
import '../Reusable/SectionHeader.css'
function SectionHeader({ title, subTitle, empty, logo }) {

   return (
      <section className="section__header">
         {logo && logo}
         {title}
         {subTitle}
         {empty && empty}
      </section>)
}

export default SectionHeader
