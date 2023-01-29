let chips = document.querySelectorAll("[data-product]");
let productHolder = document.querySelector("#product-holder");
let node = document.createElement("span");
var footerHeight = document.getElementById("footer").offsetHeight;
var footerWidth = document.getElementById("footer").offsetWidth;
var paddingValue = footerHeight + 40;
let root = document.querySelector(":root");
let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
let body = document.body;
let searchContainer = document.querySelector("#search-bar");
let buttonArray = document.querySelectorAll(".s-icon");
let imgArray = document.querySelectorAll("img");
const navbar = document.querySelector(".nav.up");
let topPos = navbar.offsetTop;
let closeBtn = document.querySelector("#close.cart-close");
let cartWindow = document.querySelector("#pop-up.cart");
let aboutUs = document.querySelector("#pop-up.about-us");
let cartBtn = document.querySelector(".nav-link:last-child");
let closeArea = document.querySelector(".close-area");
let windowContent = document.querySelector(".window-content");

for (var i = 0; i < chips.length; i++) {
    let nodeList = [
        document.createElement("span"),
        document.createElement("span"),
        document.createElement("span"),
        document.createElement("span"),
        document.createElement("span"),
        document.createElement("span"),
    ];
    chips[i].appendChild(nodeList[i]);
    nodeList[i].setAttribute("class", "close");
}

chips.forEach((e) => {
    let productName = e.getAttribute("data-product");
    e.addEventListener("click", () => {
        e.classList.toggle("active");
        productHolder.classList.toggle(productName);
    });
});

imgArray.forEach((elem) => {
    elem.setAttribute("draggable", "false");
});

buttonArray.forEach((elem) => {
    elem.addEventListener("click", () => {
        searchContainer.classList.toggle("visible");
    });
});

root.style.setProperty("--footer-height", footerHeight);
document.querySelector("#content").style.paddingBottom = paddingValue + "px";

window.addEventListener("resize", () => {
    var footerWidth = document.getElementById("footer").offsetWidth;
    document.querySelector("#content").style.paddingBottom = paddingValue + "px";
});

function currencyChange() {
    var currency = document.getElementById("currency").value;
    if (currency == "PKR") {
        let pkr = document.querySelectorAll("[data-pkr]");
        pkr.forEach((e) => {
            let price = e.getAttribute("data-pkr");
            e.textContent = price;
        });
        console.log("Pakistani Rupees Selected");
    }
    if (currency == "USD") {
        let usd = document.querySelectorAll("[data-usd]");
        usd.forEach((e) => {
            let priceUSD = e.getAttribute("data-usd");
            e.textContent = priceUSD;
        });
        console.log("USD Selected");
    }
    if (currency == "GBP") {
        let gbp = document.querySelectorAll("[data-gbp]");
        gbp.forEach((e) => {
            let priceGBP = e.getAttribute("data-gbp");
            e.textContent = priceGBP;
        });
        console.log("GBP Selected");
    }
}

function stickynavbar() {
    if (window.scrollY >= topPos) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
window.addEventListener("scroll", stickynavbar);

window.addEventListener("beforeload", () => {
    if (darkMode) {
        var cssId = "dark-mode";
        if (!document.getElementById(cssId)) {
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");
            link.id = cssId;
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "./css/dark_mode.css";
            head.appendChild(link);
        }
        console.log("Dark Mode has been selected by the user.");
    } else {
        console.log("Light Mode has been selected by the user.");
    }
});

document.onreadystatechange = function(e) {
    if (document.readyState === "complete") {
        if (darkMode) {
            document.querySelector("#dark-mode").disabled = false;
            console.log("Dark Mode has been selected by the user.");
        } else {
            document.querySelector("#dark-mode").disabled = true;
            console.log("Light Mode has been selected by the user.");
        }
    }
};

function windowOpen(e) {
    e.style.visibility = "visible";
    navbar.style.zIndex = "-1";
    if (windowContent.childElementCount == 0) {
        windowContent.innerText = "No Items in your cart";
        windowContent.classList.add("empty");
    }
}

function windowClose(e) {
    e.style.visibility = "hidden";
    navbar.style.zIndex = "1";
}

// cartBtn.addEventListener("click", () => {
//     if ((cartWindow.style.visibility = "visible")) {
//         closeArea.setAttribute("onclick", "windowClose(this)");
//     }
// });

// let windowClose = (e) => {
//     e.setAttribute("onclick", "cartWindow.style.visibility = 'hidden'");
// };