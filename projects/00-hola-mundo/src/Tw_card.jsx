import { useState } from 'react'
import './App.css'

function Tw_card({children,formatUserName,userName, name,following}){
    //estado 
     const [isFollowing, setisFollowing] = useState(following);


    //Funcion para cambiar el estado de seguir a no seguir 
    const handleClick = () => {
        setisFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'tw-button is-following' : 'tw-button'

   
    
    return (
        
        <article className='tw-card'>
            <header className='tw-card-heder'>
                <img className='tw-card-avatar' alt="El avatar" 
                src ={`https://unavatar.io/${userName}`}/>

                <div className='tw-card-info'>
                   
                   <strong>{name}</strong> 
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-cartd-text'>{text}</span>
                    <span className='tw-cartd-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
export default Tw_card