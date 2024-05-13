import Ecomfullpg from "../images/portfolioimages/ecommercefullpage.jpg"
import { useState } from "react"
import image0 from "../images/portfolioimages/EcommerceWebsite.png"
import image1 from "../images/portfolioimages/atletlgomez2.png"
import image2 from "../images/portfolioimages/atletlgomezport.png"
import image3 from "../images/portfolioimages/finalwebsite.png"


export default function DisplayProj() {
    const [ShowMore, setShowMore] = useState(false)
    const [index, setIndex] = useState(0);
    let imageArr = [Ecomfullpg, image2, image1, image0, image3]

    return (
        <>

        <div id="displaydiv">
            <div id="leftcolumn">
            <div id="imgdesc">
                <h1>The Station For Stationery Supplies</h1>
                <h3 id="projectdisc">An e-commerce website using different technology to display products, update the database and process payments </h3>


                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>MONGODB</li>
                    <li>PAYPAL</li>
                </ul>

                <p onClick={() => {
                    setShowMore(!ShowMore)
                    setIndex(0)
                }}>{ShowMore? `Show Less` : `Show More`}</p>



            </div>

                <div id="description" style={{display: ShowMore? "flex" : "none"}}>
            <div class="scrollmenu">
  <p><button onClick={() => {
    setIndex(1);
  }}>FIRST DRAFT</button></p>

  <p><button onClick={() => {
    setIndex(3);
  }}>WIREFRAME</button></p>
  <p><button onClick={() => {
    setIndex(2);
  }}>FINAL DRAFT</button></p>
  <p><button onClick={() => {
    setIndex(4);
  }}>FINAL PROJECT</button></p>



        </div>

<div style={{display: index === 1?  'block' : "none"}} id="firstdraft"><h1>First Draft</h1>
<p>The logo is placed top left.</p>
<p>Website's name is centered and on top.</p>
<p>Search and shopping cart placed on the right.</p>
<p>Navigation right below with three tabs.</p>
<p>Sub categories right below promotional banner.</p>
<p>Product displayed center, product description on the left and image on the right.</p>
</div>
<div style={{display: index === 2?  'block' : "none"}} id="thirddraft"><h1>Final Draft</h1>
<p>Color theme is added.</p>
<p>Fonts are added.</p>
<p>Products now have images.</p>
<p>Icons have been added in the searchbar, footer, and shopping cart.</p>
</div>
<div style={{display: index === 3?  'block' : "none"}} id="seconddraft"><h1>WireFrame</h1>
<p>Logo is removed for a cleaner look.</p>
<p>Website's name now implemented.</p>
<p>Search is now below website's name and shopping cart to the right.</p>
<p>Navigation is below the searchbar with specific categories.</p>
<p>Holiday/promotional block is first object in the body.</p>
<p>Products in a group of three with product's name and price below.</p>
<p>Testimonials added between product rows.</p>
<p>Footer added for important contact information.</p>
</div>
<div style={{display: index === 4?  'block' : "none"}} id="fourthdraft"><h1>Final Project</h1>
<p>Minus and plus buttons have been added to add or remove products.</p>
<p style={{fontSize: "30px"}}>SUMMARY</p>
<p>The design for my ecommerce website has gone through major changes but the core elements have stayed. I wanted to keep my website simple enough for visitors to come in and find what they need and check out.</p>
</div>

                </div>


                </div>
            
        <div id="websiteimg" style={{height: ShowMore? "100%" : "350px", width: ShowMore? "110%" : '100%'}}>
            <img src={imageArr[index]} alt="Full page screenshor of ecommerce" style={{ width: index === 1? "596px" : "auto"}}></img>
        </div>

        </div>
                <div id="histroysidebar">
                </div>
                </>
    )
}