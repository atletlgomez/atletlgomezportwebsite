import imageone from "../images/desktophomepage.png";
import dimagetwo from "../images/desktophomepage2.png";
import dimagethre from "../images/desktop3.png";
import imagetwo from "../images/mobilewebsiute.png";

export default function Display() {
  return (
    <div>
      <h1>Ecommerce Project</h1>
      <div id="parent">
        <div class="container">
          <div class="sticky-thc">
            <div id="leftmoving">
              <h1>The Station For Stationery Supplies</h1>

              <div id="skills">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT</p>
                <p>MONGODB</p>
                <p>PAYPAL</p>
              </div>
            </div>

            <div id="leftmovingtrackone"></div>
          </div>

          <div class="sticky-thc">
            <div id="leftmovingtwo">
              <h1>The Station For Stationery Supplies</h1>
              <h2>DESCRIPTION</h2>

              <div id="leftmovingthree">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Habitant morbi tristique senectus et netus et malesuada. Quis
                  vel eros donec ac odio tempor orci. Rhoncus aenean vel elit
                  scelerisque mauris pellentesque. Netus et malesuada fames ac
                  turpis. Turpis tincidunt id aliquet risus feugiat in ante
                  metus dictum. Nulla pellentesque dignissim enim sit amet.
                  Ultricies mi quis hendrerit dolor magna eget est lorem. Nulla
                  aliquet enim tortor at auctor urna nunc id cursus. Diam
                  maecenas ultricies mi eget mauris pharetra et ultrices. Et
                  malesuada fames ac turpis egestas sed tempus. Et magnis dis
                  parturient montes. Pharetra vel turpis nunc eget. Viverra
                  suspendisse potenti nullam ac tortor. Magna fermentum iaculis
                  eu non diam phasellus vestibulum lorem. Lacus vel facilisis
                  volutpat est velit. Quis viverra nibh cras pulvinar mattis.
                  Eget sit amet tellus cras adipiscing enim eu turpis egestas.
                  Arcu non odio euismod lacinia at. A lacus vestibulum sed arcu
                  non odio euismod lacinia. Quisque sagittis purus sit amet
                  volutpat consequat. Orci porta non pulvinar neque laoreet
                  suspendisse. Egestas egestas fringilla phasellus faucibus
                  scelerisque eleifend donec pretium vulputate. Eget felis eget
                  nunc lobortis mattis aliquam faucibus purus. Accumsan lacus
                  vel facilisis volutpat est velit egestas dui. Nam at lectus
                  urna duis. Egestas dui id ornare arcu odio. Neque egestas
                  congue quisque egestas. Eleifend quam adipiscing vitae proin.
                  Phasellus egestas tellus rutrum tellus pellentesque. Bibendum
                  ut tristique et egestas quis ipsum suspendisse. Nec tincidunt
                  praesent semper feugiat. Lacus luctus accumsan tortor posuere
                  ac ut consequat. Nibh venenatis cras sed felis. Leo a diam
                  sollicitudin tempor id. Tincidunt lobortis feugiat vivamus at
                  augue eget arcu dictum varius. Scelerisque eleifend donec
                  pretium vulputate sapien nec sagittis aliquam. Amet dictum sit
                  amet justo. Quis viverra nibh cras pulvinar mattis nunc sed.
                  Diam quis enim lobortis scelerisque fermentum dui. Fusce ut
                  placerat orci nulla pellentesque. Egestas erat imperdiet sed
                  euismod nisi porta. Lectus urna duis convallis convallis.
                  Semper eget duis at tellus at urna condimentum. Pellentesque
                  massa placerat duis ultricies lacus sed turpis tincidunt.
                  Pharetra vel turpis nunc eget lorem dolor sed viverra. Tellus
                  integer feugiat scelerisque varius morbi enim nunc faucibus.
                  Pharetra diam sit amet nisl suscipit adipiscing bibendum est.
                  Dui sapien eget mi proin sed libero enim. Amet consectetur
                  adipiscing elit pellentesque habitant morbi tristique senectus
                  et. Volutpat blandit aliquam etiam erat velit scelerisque in
                  dictum non. Pulvinar etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Nec dui nunc mattis enim ut.
                </h2>
              </div>
            </div>

            <div id="leftmovingtracktwo">
              <p>
                I have created a ecommerce utilizing react, mongodb, and paypal
                payment system
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="sticky-thc">
            <div id="rightmovingone">
              <img src={imageone} id="desktopimage"></img>
              <img src={dimagetwo} id="desktopimage"></img>
              <img src={dimagethre} id="desktopimage"></img>
            </div>
            <div id="rightmovingtrackone"></div>
          </div>

          <div class="sticky-thc">
            <div id="rightmoving">
              <img src={dimagetwo} id="desktopimage"></img>
            </div>
            <div id="movingtrack"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
