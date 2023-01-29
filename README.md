# Obsession - A sleep calculator
A habit-building app with the world’s first dynamic alarm. The app’s algorithm tweaks the timers according to their Flow moods and REM sleep patterns. The app is fully adaptive to all sorts of screens finely. 

**Link to project:**  obsession-by-tau-website-maker.netlify.app/ 

![Landing page Screenshot](https://github.com/FreelancingTwin/obsession/blob/main/public/Screenshot_2023-01-29%20Obsession.png)

## How It's Made:

**Tech used:** 
<ul>
    <li>React</li>
    <li>Javascript</li>
    <li>JSX</li>
    <li>CSS</li>
    <li>HTML</li>
    <li>NPM</li>
</ul>

**Developer's commentary**
*Folks from 100Devs, Definitely read this!*
I used Vite to build this app. That made it breezy. You should try vite instead of create-react-app. It's just the same process but as create-react-app takes around 5 mins to initiate, vite does it in under 30 secs. I make my react starter templates by typing: 

```
npm create vite@latest
```
and I suggest you do the same. To make a habit, it's best if you make it easy-breezy isn't it? More time coding, less time waiting. Just starting? Overwhelmed? Send me a message and I'll be more than happy to guide ya.

 Maybe you wanna improvise the app. I welcome the thought! No need to ask permission. Just fork it, clone it, and to run this app in your local machine, use the good old:
```
npm run dev
```

**A pesky Bug**
There was a time where I was having trouble with dynamically styling the colored sections. I used a click event at first to change styles if time difference is between x and y, but after the build, it wouldn't perform the click right after load. 
Turns out, I'd best used *useEffect* for that! It's a react state which is required to define functions so you can add behavior to your apps. 

## Optimizations
 
At first I used a relatively unknown CDN to import fonts, but that dragged the loading upto 18 seconds! So, I took some time and implememted local fonts. That resulted the site to load in under a second. So, practically an 18x speed increase!

Through Netlify, I customised my panel to filter my site with: 
URLs: Pretty URLs
CSS: Bundle & Minify
JS: Bundle & Minify
Images: Lossless compression

In your netlify dashboard, Go to my sites, then select a site, then site settings, there's a section in the left called general. Select Build and deploy which is just under it, then post processing. Click that, check the boxes in the menu that shows up, and your site is optimised!

**Future Optimizatons**
Double tap a time to set an alarm.

## Lessons Learned:

Just by linking a script in your root HTML doesn't guarentee you the react app permits the script without hiccups. Or that the browser runs it smooth. Use the useEffect hook to add behaviour to your components instead. It's easily findable and is intended for that purpose either way.

Don't use subpar CDN links. Best performance = natively installed modules, fonts, and resources.

Don't stress styling CSS over making the app functional. Monochrome designs have been timeless since time itself. The site is fillllled with layers dude! I just painted everything transparent getting overwhelmed by the colors.


## Also, check some of my other projects:

**My Website:** https://tau-website-maker.netlify.app/

**Fresno Art Museum redesign:** https://fam-redesign.netlify.app/

**Barb-her Salon:** https://barb-her-salon.netlify.app/



