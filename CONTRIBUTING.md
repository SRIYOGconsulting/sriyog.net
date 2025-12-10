# Contributing Instructions

This document explains how to use components and features in this React project.

---

## 1.Adding Google Tag Manager
**In index.html**  
**First script after the head tag**  
*YOUR-GTM-ID => Id you get from Google Tag Manager (GTM-XXXXXX)*  

**First script after the body tag**  
*YOUR-GTM-ID => Id you get from Google Tag Manager (GTM-XXXXXX)*

## 2.Adding Meta Pixel Code
**In index.html**  
**Under Head Tag**  
*'YOUR_PIXEL_ID' => replace with your actual Pixel ID*

## 3.OG and Meta Tags
**In index.html**  
Default OG and Meta Tags exist for whole website.

For page-specific SEO, install Helmet:  
`npm i react-helmet`

Inside any page:  
`<Helmet> (your meta + og tags here) </Helmet>`

## 4.Lightbox Feature
**Add this to any page using Lightbox:**
const [lightbox,setLightbox] = useState(false);
const [index,setIndex] = useState(null);
const datalist = [{...},{...}];


**Add Lightbox component to components folder** (same props as existing Lightbox).

**Import and use it:**
<Lightbox setIndex={setIndex} index={index} setLightbox={setLightbox} lightbox={lightbox} data={datalist} />


**Add this in index.css:**
.showScroll{ --overflow: auto; }
.hideScroll{ --overflow: hidden; }
body{ overflow: var(--overflow) !important; }


## 5.reCAPTCHA
Check **Feedback.jsx** for reference.  
Install library: `npm i react-google-recaptcha`  
Get your **sitekey** from Google Cloud.  
Replace old sitekey with your own.
Get secret key also if you need it for backend 

## 6.Dark/Light Mode
**CSS Variables**
:root { --bg: #fbfbfb; }
.dark { --bg: #1e1e1e; }
body { background: var(--bg); }


**Theme Trigger**
const TriggerTheme = () => {
if (document.body.classList.contains("dark")) {
document.body.classList.remove("dark");
localStorage.setItem("Theme", "light");
setDarkIcon(true);
} else {
document.body.classList.add("dark");
localStorage.setItem("Theme", "dark");
setDarkIcon(false);
}
};


**Trigger with button**  
`onClick={TriggerTheme}`

## 7.Dynamic Routing
Pages are located in `/src/pages`.  
React Router automatically maps routes using `<Route />`.  
To add a new page:  
1. Create file in pages folder  
2. Import it in routes file  
3. Add new `<Route path="" element={<Component/>} />`

## 8.Lazy Loaded Pages
Example:
const About = React.lazy(() => import("./pages/About"));

Use with Suspense (Shows a fallback UI (loading screen) while the component is being downloaded):
<Suspense fallback={<Loader/>}>
<About/>
</Suspense>



## 9.SEO With React Helmet
Default SEO is inside index.html.  
For page-specific SEO:
<Helmet> <title>Title</title> <meta name="description" content="..." /> <meta property="og:image" content="/image.jpg" /> </Helmet> ```