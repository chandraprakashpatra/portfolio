import './cert.css'
import leetcode from './lcode.gif'
import ccna from './CCNA.png'
import ncp from './NCP.png'
import {LinearGradient as Lg} from 'react-text-gradients'

function cert(){
    return(
        <div>
           
            <h1>
                <Lg className="chill" gradient={["to left","#eb3f3f ,#fff0a8, #5e56fb"]}>Certification and Acheivements </Lg>    
            </h1>
            <div className="horizontal"> 
            <div className="ca">
            <a href="https://www.credly.com/badges/b6805107-3eb2-4df9-b72b-e792cf4f3be4" target='_blank' className="ccna">
                <img className='ccna_i' src={ccna} />
            </a>

            <a className="ncp" href="https://www.credly.com/badges/f117c825-c45c-4af5-bc03-f7426f796c08" target="_blank">
                <img className="ncp_i" src={ncp} alt="" />
            </a>

            <a className="leetcode" href="https://leetcode.com/u/Chandraprakashpatra/" target="_blank">
                <img className="leetcode_i" src={leetcode} alt="" />
            </a>
            </div>
          
        </div>
        </div>
        
    ) 

}
export default cert