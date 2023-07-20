const accesskey="eaLOCCHRWK9WwOOqvc6ndEsmz-LqCO9Zr22wrU3CCa0";

const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const searchresult=document.getElementById("searchresult");
const searchbtn=document.getElementById("search-btn");
const showmorebtn=document.getElementById("show-more");

let keyword="";
let page=1;

async function searchimages(){
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?client_id=${accesskey}&query=${keyword}&page=${page}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchresult.innerHTML="";
    }
    
    const results=data.results;
    results.map((result)=>{
        const img=document.createElement("img");
        img.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(img);
        searchresult.appendChild(imagelink);
    })

    showmorebtn.style.display="block";
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimages();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchimages();
})