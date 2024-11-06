

import {LinearGradient as Lg} from 'react-text-gradients'
import './profile.css'
import Profile from './image.png'
// import logo from './logo_insert.png'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
function profile(){
    return (
    <>
    <div className="centered-content">
        <img src={Profile} alt="Your photo" className="photo"/>
        <h1>Chandraprakash Patra</h1>
        <div className="oneliner"> 
            <p>I do Code & </p>
            <Lg className="chill" gradient={["to left","#eb3f3f ,#fff0a8, #5e56fb"]}>Chill </Lg>
            <p>🍿</p>
        </div>
        <div className="aboutme">
        I am a
        <Lg gradient={["to left","#eb3f3f , #5e56fb"]}> real</Lg> passionate software engineer with expertise in Python, problem-solving, and troubleshooting. I believe software development is an art, and my goal apart from physical fitness, is to become that artist—creating and managing impactful projects with the latest technology. 
        </div>
    </div>
    </>
    )
}
export default profile  