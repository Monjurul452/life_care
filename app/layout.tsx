

<!DOCTYPE html>
<html lang="en">
<head><script type="text/javascript" src="/___vscode_livepreview_injected_script"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Starbucks Coffee Website Landing Page</title>
<meta name="robots" content="noindex, nofollow" />
<style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,300;1,700&family=Poppins:wght@400;500;600;700;800;900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
section{
    position: relative;
    width: 100%;
    min-width: 100vh;
    padding: 100px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header .logo{
    position: relative;
    max-width: 80px;
}
header ul{
    position: relative;
    display: flex;
}
header ul li{
    list-style: none;
}
header ul li a{
    display: inline-block;
    color: #333;
    font-weight: 800;
    margin-left: 40px;
    text-decoration: none;
}
.container{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container .text-box{
    position: relative;
    max-width: 600px;
}
.container .text-box h2{
    color: #333;
    font-size: 4em;
    font-weight: 500px;
}
.container .text-box h2 span{
    color: #017143;
    font-size: 1.2em;
    font-weight: 900;
}
.container .text-box p{
    color: #333;
}
.container .text-box a{
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #017143;
    color: #fff;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
}
.container .img-box{
    width: 600px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: 50px;
}
.container .img-box img{
    max-width: 340px;
}
.thumb{
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
}
.thumb li{
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    padding: ;
    cursor: pointer;
    transition: 0.5s;
}
.thumb li:hover{
    transform: translateY(-15px);
}
.thumb li img{
    max-width: 600px;
}
.social{
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.social li {
    list-style: none;
}
.social li a{
    display: inline-block;
    margin: 5px 0;
    transform: scale(0.6);
    filter: invert(1);
}
.circle{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #017143;
    clip-path: circle(600px at right 800px);
}</style></head>
<body>
    <section>
        <div class="circle"></div>
        <header>
            <a href="#"><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/logo.png" class="logo"></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
        <div class="container">
            <div class="text-box">
                <h2>Its not just a Coffee <br>Its  <span>Starbucks</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi consequatur nulla, fugit odit rerum quaerat illo at! Nihil velit tempore debitis. Doloribus quasi perspiciatis fuga nulla aspernatur necessitatibus adipisci.</p>
                <a href="#">learn More</a>
            </div>
            <div class="img-box">
                <img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/img1.png" class="starbucks" alt="">
            </div>
        </div>
        <ul class="thumb">
            <li><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/thumb1.png" onclick="imgSlider('https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/img1.png');changeCircleColor('#017143')"></li>
            <li><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/thumb2.png" onclick="imgSlider('https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/img2.png');changeCircleColor('#0eb7495')"></li>
            <li><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/thumb3.png" onclick="imgSlider('https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/img3.png');changeCircleColor('#d752b1')"></li>
        </ul>
        <ul class="social">
            <li><a href="#"><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/facebook.png"></a></li>
            <li><a href="#"><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/instagram.png"></a></li>
            <li><a href="#"><img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/starbucks/twitter.png"></a></li>
        </ul>
    </section>
	
<script>function imgSlider(anything){   document.querySelector('.starbucks').src = anything; }</script></body>
</html>
