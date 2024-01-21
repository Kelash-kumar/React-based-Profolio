
// eslint-disable-next-line react/prop-types
const Card = ({icon,year,title,desc}) => {
    console.log(icon)
  return (
    <>
    <span>{icon}<span>{year}</span></span>
           <div className='exp_div'>
              <h6>{title}</h6>
              <p>{desc}</p>
           </div>
    </>
  )
}

export default Card