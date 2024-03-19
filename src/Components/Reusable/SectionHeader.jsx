import '../Reusable/SectionHeader.css'
function SectionHeader({title, subTitle}) {
   return (
      <div className="section__header">
         {title}
         {subTitle}
      </div>)
}
export default SectionHeader