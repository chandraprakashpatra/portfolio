
import './contacts.css'

function contact(){
    return(
        <div>
            <br /><br /><br />
            <div className="footer">
                <div className="icons">
                    <div className="git">
                        <a href="https://github.com/chandraprakashpatra" target="_blank">
                            <img className="g-img" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" alt="" />
                        </a>
                    </div>
                    <div className="linkdin">
                        <a href="https://www.linkedin.com/in/chandraprakash-patra-40a0101b2" target="_blank">
                            <img className="l-img" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt="" />
                        </a>
                    </div>
                    
                    <div className="leetcode">
                        <a href="https://leetcode.com/u/Chandraprakashpatra/" target="_blank">
                            <img className="leet-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/141px-LeetCode_logo_white_no_text.svg.png?20200120234911" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="email_num">
                <div className="email_vert">
                    <p> &copy;chandraprakashpatra </p>
                </div>
            </div>
            <div className="email_num">
                <div className="email_vert">
                    <a href="mailto:chandraprakashpatra2002@gmail.com">chandraprakashpatra2002@gmail.com</a>
                </div>
            </div>
            <div className="email_num">
                <div className="email_vert">
                    <a href="tel:+91 9348493918">+91 9348493918</a>
                </div>
            </div>
            <br />
        </div>
    );
}
export default contact