//import Link from "next/link";
//import React, { useEffect } from "react";
//import Particles from "./components/particles";

export default {
useEffect(() => {
window.addEventListener("scroll", function () {
var header = document.querySelector(".header");
var content = document.querySelector(".content");
if (window.pageYOffset > content.offsetTop) {
header.style.display = "block";
} else {
header.style.display = "none";
}
});
}, []);

return (


    <div id="pinnedTopLeft" class="pinnedTopLeft">
        <div id="comp-iup80hho-pinned-layer" class="comp-iup80hho-pinned-layer big2ZD">
            <div class="comp-iup80hho S3GIZZ" id="comp-iup80hho" aria-disabled="false">
                <a data-testid="linkElement" href="https://www.wix.com/demone2/3d-designer-portfoli" class="U2uNPe wixui-button zKbzSQ" aria-disabled="false">
                    <span class="CQ3ICl wixui-button__label">ALEX KAMINSKI.</span>
                    </a>
                    </div>
                        </div>
                        </div>


<div className="header" />
<h1 className="center-text" />
    
    Your Title Here

</h1>
</div>
<div className="content">
{/* Your content here */}
</div>
);
}