function shrinkSplash(){
    splash = document.getElementById("splash");
    windowPos = window.scrollY;
    radiusRange = 40
    marginRange = 5
    scrollRange = 100
    windowPos = (windowPos > scrollRange) ? 1 : windowPos/scrollRange;

    radiusRange *= windowPos;
    marginRange *= windowPos;

    styleString = "border-radius:"+radiusRange+"px; margin:"+marginRange+"vw;"

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