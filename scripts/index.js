// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();



// https://masai-mock-api.herokuapp.com/news?q={query} 







let search1=async ()=>{

    try{
     let query=document.getElementById("search_input").value
     let res=await fetch(` https://masai-mock-api.herokuapp.com/news?q=${query}`)
     let data=await res.json()
 
     console.log(data.articles)
     append1(data.articles)
    }catch(err){
        console.log(err)
    }
 
 }
 
 
 
 let append1=(data)=>{
 
 let results=document.getElementById("results")
 results.innerHTML=null;
 data.forEach((el)=>{
 
     let div=document.createElement("div")
     let div1=document.createElement("div")
     let image=document.createElement("img")
     image.src=el.urlToImage
     image.style.width="200px";
     image.style.height="200px";
     let h2=document.createElement("h2")
     h2.innerHTML=el.title
     let p=document.createElement("p")
     p.innerHTML=el.description
 

    //  window.location.href="search.html"
    const detail=()=>{
        // localStorage.setItem("news",JSON.stringify(title))
        localStorage.setItem("news",JSON.stringify(el))
        window.location.href="news.html"
    }
    div.addEventListener("click",detail)

     
     div1.append(h2,p)
     div.append(image,div1)
     results.append(div)
 
 })
 
 }
 search1()
 document.getElementById("search_input").addEventListener("keydown",search1)






 let search2=async ()=>{

    try{
     let query=document.getElementById("search_input").value
     let res=await fetch(` https://masai-mock-api.herokuapp.com/news/top-headlines?country= ${n}`)
     let data=await res.json()
 
     console.log(data.articles)
     append1(data.articles)
    }catch(err){
        console.log(err)
    }
 
 }
 







