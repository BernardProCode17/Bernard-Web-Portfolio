import { GlobalContext } from '../../Context/GlobalContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import codepen from '../../assets/codepen.svg';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg'
import phone from '../../assets/phone.svg';
import './Contact.css';

function ContactComp() {

   const context = useContext(GlobalContext);
   const links = context.links?.links || [];
   const linkStrings = context.links?.linkStrings || [];

   const [lkd, git, code] = links;
   const [eml, tel] = linkStrings

   return (
      <section className='contact'>
         <Link to={lkd} className='contact__links'>
            <img src={linkedin} alt="" className='social-svg' />
         </Link>

         <Link to={git} className='contact__links'>
            <img src={github} alt="" className='social-svg' />
         </Link>

         <Link to={code} className='contact__links'>
            <img src={codepen} alt="" className='social-svg' />
         </Link>

         <Link to={eml} className='contact__links'>
            <img src={email} alt="" className='social-svg' />
         </Link>

         <Link to={tel} className='contact__links'>
            <img src={phone} alt="" className='social-svg' />
         </Link>

      </section>
   )
}
export default ContactComp;