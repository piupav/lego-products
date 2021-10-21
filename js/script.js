function getId(event){
    let id = event.target.id;
    
    let bgBlock = document.querySelector(".styleBGblock");
    function deleteChild() {
        let bgBlock = document.querySelector(".styleBGblock");
        bgBlock.innerHTML = "";
        let styleTitleProd = document.querySelector(".style-title-prod");
        styleTitleProd.innerHTML = "";
    }
    deleteChild();


    let newBlock = document.createElement("div");
    newBlock.className = id;
    newBlock.className = "styleBGblock";
    newBlock.style.backgroundImage = "url(img/prod/"+id+".jpg)";

    let styleTitleProd = document.querySelector(".style-title-prod");
    let titleProduct = document.createElement("h2");
    titleProduct.style.fontWeight = "800";
    titleProduct.style.letterSpacing = "1vw";
    titleProduct.style.fontSize = "10vw";
    titleProduct.style.boxShadow = "10px 10px 28px 14px rgba(0,0,0,0.7)";
    titleProduct.innerText = id;

    bgBlock.append(newBlock);
    styleTitleProd.append(titleProduct);
}


