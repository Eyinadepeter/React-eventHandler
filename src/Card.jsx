import profile from './assets/react.svg'


const Card = (props) => {
    return ( 
        <div className='card'>
            <img className='image-pics' src='https://picsum.photos/200/200' alt="" />
            <h1 className='card-title'> {props.header}</h1>
            <p className='card-text'>This Is a React Card </p>
        </div>
     );
}
 
export default Card;