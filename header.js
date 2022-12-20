class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #000;
            background-color: #027B9A;
            height: 61px;
            width: 100%;
            z-index: 9999;
        }

        .logotext {
            font-family: tahoma;
            font-weight: 600;
            color: white;
            font-size: 25px;
            margin-left: 2%;
        }

        #navbar {
            height: 61px;
            width: 100%;
            align-items: center;
            overflow: hidden;
            // background-color:#027B9A;

        }

        #navbar a {
            display: block;
            color: #f2f2f2;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 25px;
        }

        .overlay {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            overflow-x: hidden;
            transition: 0.1s;

        }

        .overlay-content {
            position: relative;
            top: 1%;
            width: 100%;
            margin-left: 1%;
            display: block;
            height: 15px;
        }

        .overlay a {
            padding: 8px;
            text-decoration: none;
            font-size: 36px;
            color: #818181;
            display: block;
            transition: 0.1s;
        }

        .overlay a:hover,
        .overlay a:focus {
            color: #f1f1f1;
        }


        /* Style sidebar links */
        .sidebar a {
            padding: 6px 8px 6px 16px;
            text-decoration: none;
            font-size: 20px;
            color: #818181;
            display: block;
        }

        /* Style links on mouse-over */
        .sidebar a:hover {
            color: #f1f1f1;
        }

        .gmenu {
            display: block;
            color: #f2f2f2;
            padding: 5px 8px;
            text-decoration: none;
            float: left;
            font-size: 25px;
            font-family: tahoma;
            border-radius: 5px;
            margin-top: 11px;
            margin-right: 13px;
            margin-left: 4px;
        }

        .userdashimg {
            height: 100px;
            border-radius: 50%;
        }

        .logoimg {
            height: 40px;
        }

        .tdiv {
            height: 100%;
            width: 75%;
            background: #c31432;
            /* fallback for old browsers */
            background: 
            #027B9A;
            float: left;
            overflow-x: hidden;
        }

        .cldiv {
            height: 100%;
            width: 25%;
            float: left;
        }

        .active {
            background-color: rgb(45, 105, 161);
            color: white;
        }
        /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .tdiv {
    height: 100%;
    width: 65%;
    background: 
    #027B9A;

  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

  .tdiv {
    height: 100%;
    width: 60%;
    background: 
    #027B9A;


  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .tdiv {
    height: 100%;
    width: 50%;
    background: 
    #027B9A;
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .tdiv {
    height: 100%;
    width: 30%;
    background: 
    #027B9A;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

  .tdiv {
    height: 100%;
    width: 20%;
    background: 
    #027B9A
  }
}
        </style>
        <header>
        <div id="navbar">
            <span class="gmenu" onclick="openNav()">&#9776; SREEF.ORG</span>
            <div id="myNav" class="overlay">
                <div class="tdiv">
                    <div class="overlay-content">
                        <center>
                            <span class="gmenu">SREEF.ORG</span>
                        </center>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <a href="index.html"><i class="fa fa-fw fa-home"></i> Dashboard</a>
                        <hr>
                        <a href="Events.html"><i class="fa fa-fw fa-wrench"></i> Events</a>
                        <hr>
                        <a href="about.html"><i class="fa fa-fw fa-user"></i> About Us</a>
                        <hr>
                        <a href="contact.html"><i class="fa fa-fw fa-envelope"></i> Contact Us</a>
                        <hr>
                        <a href="courses.html"><i class="fa fa-fw fa-envelope"></i> Courses </a>
                        <hr>

                    </div>
                </div>
                <div class="cldiv" onclick="closeNav()">
                </div>
            </div>

            <div>
    </header>
      `;
    }
  }
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
  
  customElements.define('header-component', Header);