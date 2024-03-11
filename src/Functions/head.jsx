import { Helmet } from "react-helmet";
function Head(title) {
   return (
      <Helmet>
         <meta charSet="UTF-8" />
         <meta name="description" content="Web portfolio for Bernard Clarke portfolio website" />
         <meta name="keywords" content="HTML, CSS, JavaScript, React, PHP, Projects, Web Developer, web developer, Web Development, web development, front-end, front-end developer, developer, websites, web site, custom website, web site builder, website builder" />
         <meta httpEquiv="X-UA-Compatible" content="IE=7" />
         <meta name="author" content="Bernard A. Clarke" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>{title}</title>
      </Helmet>
   );
}

export default Head