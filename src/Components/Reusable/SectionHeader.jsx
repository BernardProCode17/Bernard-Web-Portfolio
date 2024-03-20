import '../Reusable/SectionHeader.css'
function SectionHeader({title, subTitle, empty}) {
   return (
      <div className="section__header">
         {title}
         {subTitle}
         {empty && empty}
      </div>)
}
export default SectionHeader