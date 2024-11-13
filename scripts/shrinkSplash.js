function shrinkSplash(){
    const splash = document.getElementById("splash");
    let windowPos = window.scrollY;
    let radiusRange = 40
    let marginRange = 5
    let scrollRange = 100
    windowPos = (windowPos > scrollRange) ? 1 : windowPos/scrollRange;

    radiusRange *= windowPos;
    marginRange *= windowPos;

    let styleString = "border-radius:"+radiusRange+"px; margin:"+marginRange+"vw;"

    splash.setAttribute("style",styleString)
}

function loadFunction(){
    console.log(`
████████╗███████╗ █████╗ ███╗   ███╗    ██╗  ██╗ █████╗ 
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║    ██║  ██║██╔══██╗
   ██║   █████╗  ███████║██╔████╔██║    ███████║╚█████╔╝
   ██║   ██╔══╝  ██╔══██║██║╚██╔╝██║    ╚════██║██╔══██╗
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║         ██║╚█████╔╝
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝         ╚═╝ ╚════╝                                             
`);
    shrinkSplash();
}

document.addEventListener("scroll",shrinkSplash)

document.addEventListener("DOMContentLoaded",loadFunction)