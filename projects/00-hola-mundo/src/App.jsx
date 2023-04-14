import Tw_card from './Tw_card'
import './index.css'
const  App =  () => {
    const format = (userName) => `@${userName}`;

    const users = [
        {
            formatUserName: format,
            userName :"AngelTur27816",
            name : "Angel Juarez",
            following : true
        },
        {
            formatUserName: format,
            userName :"Tomas21",
            name : "Tomas perez",
            following : false
        },
        {
            formatUserName: format,
            userName :"Fani12",
            name : "Fani Sanchez",
            following : false
        },
        {
            formatUserName: format,
            userName :"MonseLG",
            name : "Monserrat Figueroa",
            following : true
        }
    ]
  

    return (

        <div className='App'>
            {
                users.map(user => {
                    const {formatUserName, userName,name,following} = user
                
                    return (
                        <Tw_card 
                            key={userName}
                            formatUserName={formatUserName}
                            userName={userName}
                            name={name}
                            following={following} />
                    )
                })
            }
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