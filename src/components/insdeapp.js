import Header from "./header"
import Skills from "./skills"
import DisplayProj from "./project"
import Education from "./education"
import { Link } from "react-router-dom"

export default function AppInside () {
    return (
        <div>
        <Header></Header>
  
        <Skills></Skills>
        <h4 className="focus">MEDIUM - BLOG</h4>
        <div id="mediumblogdiv"><iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25411138' frameborder='0' width='100%' height='1000' title="meidum_blog_post"></iframe></div>
        <h1 id="project" className="focus"><Link to="/ecommerceproj">PROJECTS</Link></h1>
        <DisplayProj ></DisplayProj>
        <Education></Education>
        </div>
    )
}