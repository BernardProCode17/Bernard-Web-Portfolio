import  { Link }  from 'react-router-dom';
import  codepen  from '../../assets/codepen.svg';
import  email  from '../../assets/email.svg';
import  github  from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg'
import  phone  from '../../assets/phone.svg';

function ContactComp() {

   return (
      <section>
         <Link to={'https://ca.linkedin.com/in/bernard-clarke-374220212'}>
            <img src={linkedin} alt="" />
         </Link>

         <Link to={'https://github.com/BernardProCode17'}>
            <img src={github} alt="" />
         </Link>

         <Link to={'https://codepen.io/Christian-7'}>
            <img src={codepen} alt="" />
         </Link>

         <Link to={'mailto:bernardanthonyclarke1292@gmail.com'}>
            <img src={email} alt="" />
         </Link>

         <Link to={'tel:+12507750587'}>
            <img src={phone} alt="" />
         </Link>

      </section>
   )
}
export default ContactComp;