// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();





let news1=JSON.parse(localStorage.getItem("news"))
console.log(news1)


let newss=()=>{
    let detailed_news=document.getElementById("detailed_news")
    detailed_news.innerHTML=null;
    news1.forEach(( {title,urlToImage,content})=>{

        let div=document.createElement("div")
        let div1=document.createElement("div")
        let image=document.createElement("img")
        image.src=urlToImage
        image.style.width="200px";
        image.style.height="200px";
        let h2=document.createElement("h2")
        h2.innerHTML=title
        let p=document.createElement("p")
        p.innerHTML=content
        div1.append(h2,p)
        div.append(image,div1)
        detailed_news.append(div)
    
    
        // {title,urlToImage,content}
    
    })


}
newss()
