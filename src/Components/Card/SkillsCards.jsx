function Card({ shortSkills }) {

   const { language_name, icon } = shortSkills

   return (
      <article className="card">
         <h3>{language_name}</h3>
         <p></p>
         <img src={icon} alt="" />
         
         <ul>

         </ul>
      </article>
   );
}
export default Card;
