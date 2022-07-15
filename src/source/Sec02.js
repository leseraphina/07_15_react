import Data from './data.json'

function Sec02(){
    return (
        <div>
            {
                Data.map(
                    (item, index)=>{
                        return <p key={index}>{item.str}</p>
                    }
                )
            }
        </div>
    )
}

export default Sec02