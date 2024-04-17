import { IFooterLink } from "./footer.interface"

export const SOCIAL_MEDIA_LINKS : IFooterLink[] = [
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-facebook.95c9cce2.svg", title:"facebook", href: "/_"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-twitter.dcd26979.svg", title:"twitter", href: "/_"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-instagram.b03aa141.svg", title:"instagram", href: "/_"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-linkedIn.5bb2057f.svg", title:"linkedin", href: "/_"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-pinterest.de53db23.svg", title:"pinterest", href: "/_"},
]

export const CONTACT_LINKS : IFooterLink[] = [
    {title: "Editorial Guidelines", href:"/_"}, 
    {title:"Agent Login", href:"/_"}, 
    {title:"About Us", href:"/_"},
    {title:"Contact", href:"/_"},
    {title:"FAQs", href:"/_"} 
]

export const MOBILE_LINKS: IFooterLink[] = [
    {title: "Location Profiles" , href:"/_"}, 
    {title: "Estimate" , href:"/_"} , 
    {title: "Real Estate News" , href:"/_"} , 
    {title: "Real Estate Advice" , href:"/_"}, 
    {title:"Auction Results" , href:"/_"} , 
    {title: "Agent Login" , href:"/_"} , 
    {title: "About Us" , href:"/_"} ,
    {title: "Contact" , href:"/_"}, 
    {title: "FAQs" , href:"/_"} , 
    {title:  "Terms & Conditions" , href:"/_"} , 
    {title:  "Privacy Policy" , href:"/_"}, 
    {title:  "Sitemap" , href:"/_"}
]

export const DESKTOP_LINKS: IFooterLink[] = [
    {title: "Real Estate News" , href:"/_"},
    {title: "Estimate" , href:"/_"},
    {title: "Join view.com.au", href:"/_"},
    {title: "Real Estate Apps", href:"/_"},
    {title: "Make an Offer", href:"/_"},
    {title: "Location Profiles", href:"/_"}, //First 0-5
    {title: "Agency Sign Up", href:"/_"},
    {title: "Find A Real Estate Agent", href:"/_"},
    {title: "Auction and Sales Results Victoria", href:"/_"},
    {title: "Auction and Sales Results by Suburb", href:"/_"},
    {title: "Real Estate Advice", href:"/_"}, //Second 6-10
    {title: "Real Estate For Sale", href:"/_"},
    {title: "Rental Properties", href:"/_"},
    {title: "Recently Sold Properties", href:"/_"},
    {title: "New Developments", href:"/_"},
    {title: "View Insurance", href:"/_"}, //Third 11-15
    {title: "Terms & Conditions", href:"/_"},
    {title: "Privacy Policy", href:"/_"},
    {title: "Sitemap", href:"/_"} //Forth 16-18
]
