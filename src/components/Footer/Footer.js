import React from "react"

function Footer() {
    return (
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">YAWP <i> Yet Another Web Playground</i> is an online web Playground that lets you play with HTML CSS and JS in real time. If you want to teach web and Zoom does not really allow you to express a lot, YAWP is just for you. YAWP saves your work so that you can build over it next time you visit.</p>
              </div>
    
              <div class="col-xs-6 col-md-3">
              
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="https://github.com/josharsh">About</a></li>
                  <li><a href="https://github.com/josharsh">Contact</a></li>
                  <li><a href="https://github.com/josharsh/YAWP">Contribute</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
             <a href="#">Josharsh</a>.
                </p>
              </div>
    
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li onClick={()=>alert("Themes will be supported Soon")}><a class="facebook"></a></li>
                  <li onClick={()=>alert("Themes will be supported Soon")}><a class="twitter" href="#"></a></li>
                  <li onClick={()=>alert("Themes will be supported Soon")}><a class="dribbble" href="#"></a></li>
                  <li onClick={()=>alert("Themes will be supported Soon")}><a class="linkedin" href="#"></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    );
}

export default Footer;