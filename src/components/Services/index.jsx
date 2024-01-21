
// React components
import { FaPaintbrush } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { IoCameraReverse } from "react-icons/io5";
import './services.css'; // Replace with your actual stylesheet file
import Image1 from '../../../public/assets/service-1.svg';
import Image2 from '../../../public/assets/service-2.svg';
import Image3 from '../../../public/assets/service-3.svg';
// eslint-disable-next-line react/prop-types
const Card = ({ color, iconClass, title, description,icon }) => {
  return (
    <div className="card__bx" style={{ '--clr': color }}>
      <div className="card__data">
        <div className="card__icon">
          <i className={iconClass}>
            {icon}
          </i>
        </div>
        <div className="card__content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      color: "#89ec5b",
      icon: <FaPaintbrush />,
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
      id: 2,
      image: Image2,
      color: "#eb5ae5",
      title: "Web Development",
      icon: <IoCodeSlash />,
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
      id: 3,
      image: Image3,
      title: "Photography",
      color: "#5b98eb",
      icon: <IoCameraReverse />,
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
  ];
  
  return (
    <section className="service__container about">
      <section className="card__container about__container">
         {
          data.map((item) => {
            return (
              <Card
                key={item.id}
                color={item.color}
                iconClass={item.iconClass}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })
         }

        {/* <Card color="#89ec5b" iconClass="fa-solid fa-paintbrush" title="Designing" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." /> */}
        {/* <Card color="#eb5ae5" iconClass="fa-solid fa-code" title="Development" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." /> */}
        {/* <Card color="#5b98eb" iconClass="fa-brands fa-searchengin" title="SEO" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." /> */}
      </section>
    </section>
  );
};

export default Services;

























































// import './services.css';
// const Services = () => {
//   return (
//     <section className='service__page section'>
//         <h2 className='section__title title'>Services</h2>
//       <div className="service__container">
      
//         <div className='card'>
//           <div className="image">
//             <img src="https://plus.unsplash.com/premium_photo-1670963024947-bbb770b7ee28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" alt="image1" />
//           </div>
//           <div className="content">
//             <h1>Frontend Developer</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//             </p>
//           </div>
//         </div>

       



        
//         </div>
//     </section>
//   )
// }

// export default Services