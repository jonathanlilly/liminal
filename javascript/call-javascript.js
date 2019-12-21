// Idea taken from http://docs.mathjax.org/en/latest/web/configuration.html

//Call remark.js 
var slideshow = remark.create({
    navigation: {
        click: false
    },
    properties: {
        class: "center, middle"
    },
    countIncrementalSlides: false
});

//Call KaTeX with auto-rendering, see https://katex.org/docs/autorender.html
document.addEventListener("DOMContentLoaded", function () {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$",right: "$$",display: true},
            {left: "$",right: "$",display: false},
            {left: "\\[",right: "\\]", display: true},
            {left: "\\(",right: "\\)",display: false}
                    ]
    });
});