!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var o=window.wp.element,t=window.wc.components,r=window.wc.tracks,n=window.wp.data,a=window.wc.data;const c=e=>{var o;const t=((null===(o=document.getElementById("wpadminbar"))||void 0===o?void 0:o.offsetHeight)||0)+8;e.top<t?window.scrollBy(0,e.top-t):e.bottom>window.innerHeight&&window.scrollBy(0,e.bottom-window.innerHeight)};var l=window.wp.i18n;const s=document.createElement("div");s.setAttribute("id","wc-addons-tour-root"),(0,o.render)((0,o.createElement)((()=>{const[e,s]=(0,o.useState)(!1),{updateOptions:i}=(0,n.useDispatch)(a.OPTIONS_STORE_NAME),d=(()=>{const e=(0,o.createElement)("br");return[{referenceElements:{desktop:'#adminmenu a[href="admin.php?page=wc-addons"]'},focusElement:{desktop:'#adminmenu a[href="admin.php?page=wc-addons"]'},meta:{name:"wc-addons-menu-item",heading:(0,l.__)("Welcome to the WooCommerce Marketplace","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Power up your store by adding extra functionality using extensions, find a fresh new look with themes, or integrate your store with other software and services.<br/><br/>The WooCommerce Marketplace is your go-to for all of the above, and the only place you’ll find products that have been reviewed and approved by the WooCommerce team.<br/><br/>Whether you’re looking to improve your store or grow your business, you can find a solution here. There are hundreds of options available, and new products are added regularly.<br/><br/>The WooCommerce Marketplace is also available at WooCommerce.com.","woocommerce"),{br:e})}}},{referenceElements:{desktop:".marketplace-header__search-form"},focusElement:{desktop:".marketplace-header__search-form"},meta:{name:"wc-addons-search",heading:(0,l.__)("Find exactly what you need","woocommerce"),descriptions:{desktop:(0,l.__)("Use the search box to find specific products or solutions.","woocommerce")}}},{referenceElements:{desktop:"#marketplace-current-section-dropdown"},focusElement:{desktop:"#marketplace-current-section-dropdown"},meta:{name:"wc-addons-categories",heading:(0,l.__)("Browse for new ideas","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Or browse all available products by category.","woocommerce"),{br:e})}}},{referenceElements:{desktop:".addon-product-group:first-child"},focusElement:{desktop:".addon-product-group:first-child"},meta:{name:"wc-addons-featured",heading:(0,l.__)("Learn more about products","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Scroll down to see all available products for a search or selected category.<br/><br/>Click on any product to see more information about it, including features, requirements, and available documentation.","woocommerce"),{br:e})}}},{referenceElements:{desktop:".marketplace-header__tab-link_helper"},focusElement:{desktop:".marketplace-header__tab-link_helper"},meta:{name:"wc-addons-my-subscriptions",heading:(0,l.__)("Manage your purchases","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Products purchased from the WooCommerce Marketplace can be managed in My Subscriptions, either here or on WooCommerce.com.<br/><br/>Every purchase is backed by our <a1>30-day money-back guarantee</a1>, and includes <a2>email and live chat support</a2>.<br/><br/>That's it! We hope the WooCommerce Marketplace helps you build the business of your dreams.","woocommerce"),{a1:(0,o.createElement)("a",{href:"https://woocommerce.com/refund-policy/","aria-label":(0,l.__)("Refund policy","woocommerce")},(0,l.__)("30-day money-back guarantee","woocommerce")),a2:(0,o.createElement)("a",{href:"https://woocommerce.com/my-account/create-a-ticket/","aria-label":(0,l.__)("Contact support","woocommerce")},(0,l.__)("email and live chat support","woocommerce")),br:e})}}}]})();if((0,o.useEffect)((()=>{if("true"===new URLSearchParams(location.search).get("tutorial")){var e;const o=((e,o,t)=>{const n=document.querySelector(e);let a=null==n?void 0:n.getBoundingClientRect().top;const c=setInterval((()=>{const e=null==n?void 0:n.getBoundingClientRect().top;a===e&&((()=>{var e,o;const t=null===(e=d[0])||void 0===e||null===(o=e.meta)||void 0===o?void 0:o.name;s(!0),(0,r.recordEvent)("in_app_marketplace_tour_started",{step:t})})(),clearInterval(c)),a=e}),500);return c})((null===(e=d[0].referenceElements)||void 0===e?void 0:e.desktop)||"");return()=>clearInterval(o)}}),[]),(0,o.useEffect)((()=>{if(e){function e(){const e=document.querySelector(".tour-kit-frame__container");e&&c(e.getBoundingClientRect())}const o=setTimeout(e,500),t=((e,o,t)=>{const r=document.querySelector(".wc-addons-wrap");let n=null==r?void 0:r.offsetTop;return setInterval((()=>{const e=null==r?void 0:r.offsetTop;n!==e&&o(),n=e}),150)})(0,e);return()=>{clearTimeout(o),clearInterval(t)}}}),[e]),!e)return null;const m=(e=>{let{closeHandler:o,onNextStepHandler:t,autoScrollBlock:r,steps:n}=e,a=null,l=null;const s="top-start";return{placement:s,options:{effects:{spotlight:{interactivity:{enabled:!0,rootElementSelector:".woocommerce.wc-addons-wrap"}},autoScroll:{behavior:"auto",block:r}},popperModifiers:[{name:"arrow",options:{padding:e=>{let{popper:o}=e;return{right:o.width-34}}}},{name:"offset",options:{offset:[20,20]}},{name:"flip",options:{allowedAutoPlacements:["right","bottom","top"],fallbackPlacements:["bottom-start","right"],flipVariations:!1,boundry:"clippingParents"}},{name:"inAppTourPopperModifications",enabled:!0,phase:"read",fn(e){var o;let{state:t,instance:r}=e;if(l!==t.elements.reference){const e=t.elements.reference.closest("#adminmenu")?"right":s;t.placement!==e&&r.setOptions({placement:e})}const n=t.elements.popper.getBoundingClientRect(),i=null===(o=t.elements.arrow)||void 0===o?void 0:o.getBoundingClientRect(),d=(null==i?void 0:i.height)||0;l!==t.elements.reference&&0!==d&&a!==n.top&&(c(n),a=n.top,l=t.elements.reference)}}],callbacks:{onNextStep:t}},steps:n,closeHandler:o}})({closeHandler:(e,o)=>{s(!1),i({woocommerce_admin_dismissed_in_app_marketplace_tour:"yes"});const t=new URL(window.location.href);if(t.searchParams.delete("tutorial"),window.history.replaceState(null,"",t),d.length-1===o)(0,r.recordEvent)("in_app_marketplace_tour_completed");else{var n,a;const t=null===(n=e[o])||void 0===n||null===(a=n.meta)||void 0===a?void 0:a.name;(0,r.recordEvent)("in_app_marketplace_tour_dismissed",{step:t})}},onNextStepHandler:e=>{var o,t;const n=(null===(o=d[e+1])||void 0===o||null===(t=o.meta)||void 0===t?void 0:t.name)||"";(0,r.recordEvent)("in_app_marketplace_tour_step_viewed",{step:n})},autoScrollBlock:"center",steps:d});return(0,o.createElement)(t.TourKit,{config:m})}),null),document.body.appendChild(s)),(window.wc=window.wc||{}).wcAddonsTour=e}();