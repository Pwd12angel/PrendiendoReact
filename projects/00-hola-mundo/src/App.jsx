import Tw_card from './Tw_card'
import './index.css'
const  App =  () => {
    const format = (userName) => `@${userName}`;
  

    return (

        <div className='App'>

        <Tw_card 
        formatUserName={format} 
        following = {true} 
        userName = "angelJb" 
        name = "Angel Juarez"
        />
     

        <Tw_card
         formatUserName={format} 
         following = {false} 
         userName = "SantP" 
         name= "Santigo Perez" />

        <Tw_card 
        formatUserName={format} 
        following = {false} 
        userName = "Maru" 
        name= "Marilu Colim" />

        <Tw_card 
        formatUserName={format} 
        following = {true} 
        userName = "Sofia" 
        name= "Sofia RO" />

        </div>

    )
}
/*
fuction App = {
    return (
        <div>
            <h1>card</h1>
        </div>
    )
}
*/
export default App