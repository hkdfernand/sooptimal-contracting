(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();class h{constructor(){this.rates={residential:{installation:2.5,repair:45,finishing:3.25,complete:4.75},commercial:{installation:2.25,repair:55,finishing:3,complete:4.25}},this.minimums={residential:350,commercial:1500,repair:200},this.multipliers={rush:1.25,weekend:1.15,highEnd:1.35},this.init()}init(){const e=document.getElementById("quoteForm");e.querySelectorAll("input, select, textarea").forEach(o=>{o.addEventListener("change",()=>this.calculateQuote()),o.addEventListener("input",()=>this.debounce(()=>this.calculateQuote(),500))}),e.addEventListener("submit",o=>this.handleSubmit(o))}debounce(e,t){clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(e,t)}calculateQuote(){const e=document.getElementById("quoteForm"),t=new FormData(e),o=Object.fromEntries(t);if(!o.projectType||!o.sqFootage||!o.serviceType){this.hideQuoteResult();return}const n=parseInt(o.sqFootage)||0,r=parseInt(o.roomCount)||1,a=o.projectType,s=o.serviceType;if(n<50){this.hideQuoteResult();return}let c=this.calculateBasePrice(a,s,n);r>5&&(c*=1.1);const d=Math.round(c*.85),m=Math.round(c*1.15);this.displayQuoteResult(d,m,o)}calculateBasePrice(e,t,o){const r=this.rates[e][t],a=this.minimums[e];let s;return t==="repair"?s=Math.max(o/50,2)*r:s=o*r,s=Math.max(s,a),o>2e3&&(s*=.92),o>5e3&&(s*=.88),s}displayQuoteResult(e,t,o){const n=document.getElementById("quoteResult"),r=document.getElementById("priceRange");r.innerHTML=`$${e.toLocaleString()} - $${t.toLocaleString()}`,n.style.display="block",setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"nearest"})},100),this.currentQuote={lowPrice:e,highPrice:t,...o}}hideQuoteResult(){const e=document.getElementById("quoteResult");e.style.display="none"}async handleSubmit(e){if(e.preventDefault(),!this.currentQuote){alert("Please complete the quote calculator first.");return}const t=e.target.querySelector('button[type="submit"]'),o=t.textContent;try{t.disabled=!0,t.textContent="Sending Quote Request...",await this.submitQuoteRequest(this.currentQuote),this.showSuccessMessage(),e.target.reset(),this.hideQuoteResult()}catch(n){console.error("Quote submission error:",n),alert("There was an error sending your quote request. Please try again or call us directly.")}finally{t.disabled=!1,t.textContent=o}}async submitQuoteRequest(e){return new Promise(t=>setTimeout(t,2e3))}showSuccessMessage(){const e=document.getElementById("quoteResult");e.innerHTML=`
            <div class="success-message">
                <h3 style="color: var(--color-success); margin-bottom: 16px;">✓ Quote Request Sent!</h3>
                <p style="margin: 0; color: var(--color-neutral-600);">
                    Thank you for your interest! We'll review your project details and contact you within 2 business hours with a detailed quote and to schedule a free consultation.
                </p>
            </div>
        `,setTimeout(()=>{this.hideQuoteResult()},8e3)}}class p{constructor(){this.init()}init(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",t=>this.handleSubmit(t))}async handleSubmit(e){e.preventDefault();const t=e.target.querySelector('button[type="submit"]'),o=t.textContent;try{t.disabled=!0,t.textContent="Sending...";const n=new FormData(e.target),r=Object.fromEntries(n);await this.submitContact(r),this.showContactSuccess(),e.target.reset()}catch(n){console.error("Contact form error:",n),alert("There was an error sending your message. Please try again or call us directly.")}finally{t.disabled=!1,t.textContent=o}}async submitContact(e){return new Promise(t=>setTimeout(t,1500))}showContactSuccess(){const e=document.getElementById("contactForm"),t=document.createElement("div");t.className="success-message",t.innerHTML=`
            <h3 style="color: var(--color-success); margin-bottom: 16px;">✓ Message Sent!</h3>
            <p style="margin: 0; color: var(--color-neutral-600);">
                Thanks for reaching out! We'll get back to you within 4 hours during business hours.
            </p>
        `,e.parentNode.insertBefore(t,e),setTimeout(()=>{t.remove()},6e3)}}class g{constructor(){this.init()}init(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-menu");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("nav-menu-open"),e.classList.toggle("nav-toggle-active")}),t.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("nav-menu-open"),e.classList.remove("nav-toggle-active")})}))}}function f(){document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(e){e.preventDefault();const t=document.querySelector(this.getAttribute("href"));if(t){const o=document.querySelector(".nav-container").offsetHeight,n=t.offsetTop-o-20;window.scrollTo({top:n,behavior:"smooth"})}})})}function y(){const i={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&n.target.classList.add("animate-in")})},i);document.querySelectorAll(".service-card, .portfolio-item, .contact-item").forEach(o=>{e.observe(o)})}const b=`
.service-card,
.portfolio-item,
.contact-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.nav-menu-open {
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-top: 1px solid var(--color-neutral-200);
}

.nav-toggle-active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.nav-toggle-active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle-active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

.success-message {
    background: var(--color-success);
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
}

@media (min-width: 769px) {
    .nav-menu-open {
        position: static !important;
        display: flex !important;
        flex-direction: row !important;
        background: transparent !important;
        padding: 0 !important;
        box-shadow: none !important;
        border: none !important;
    }
}
`,l=document.createElement("style");l.textContent=b;document.head.appendChild(l);document.addEventListener("DOMContentLoaded",()=>{new h,new p,new g,f(),y(),document.body.classList.add("loaded")});const v=`
body:not(.loaded) .hero-section,
body:not(.loaded) .services-section,
body:not(.loaded) .portfolio-section {
    opacity: 0;
}

body.loaded .hero-section,
body.loaded .services-section,
body.loaded .portfolio-section {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
}
`,u=document.createElement("style");u.textContent=v;document.head.appendChild(u);
