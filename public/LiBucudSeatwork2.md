# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="Jin" content="Jin" />
  <meta name="revised" content="March 26 2026" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- Answer: Compared to the default static positioning, after adding the new CSS properties to .sidebar, the sidebar changed position depending on the direction and value you give it.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- Answer: When you scroll the page, the footer area stays in place because of the "position: fixed". "Fixed" makes it so that a specific part of the page stays in place even if you scroll down.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

- After applying "position: abolute", the main content box was placed beside the sidebar box. The effect of position: absolute on an element is that it places an element with a near positioned ancestor.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- Answer: The notice appears on top of the content thanks to the z-index. If something has a higher z-index, it will appear on top of an element with a lower z-index. If you swap the z-index values, the notice appears behind the content box.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    - Answer: When I changed it to relative, the content box became unfixed and isn't on the right side of sidebar anymore. When I changed it to fixed, whenever I scroll dowm, the content box follows and stays in place.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    - Answer: Since the z-index value on notice is higher, it appears on top of the content box, which has a lower z-index value.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    - Answer: For static, elements will be positioned based on the default flow. For relative, you can use properties like top, left, bottom, right, etc. to move an element. For fixed, whenever you scroll down, the element with a fixed property will stay in place and will follow. For absolute, the element gets positioned beside the nearest element.

    b. How does absolute positioning depend on its parent element?

    - Answer: The absolute positioning depends on its parent element as the child element's position is determined by the position of the parent element.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    - Answer: For sticky, it's like fixed but when you scroll a specific point on the document, that element sticks to the nearest viewport.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
