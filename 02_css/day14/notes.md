# Positions in css

    syntax: selector{position: value}

### values

1. static

    >default value

2. fixed

    >used to fix an element at a particular area like `scroll to top` button

3. sticky

    >used to make an element sticky while scrolling

4. relative

    >always relative to parent <br/> same as static but provides below 5 extra properties

5. absolute 
    
    >nearest POSITIONED ancestor se reference leta hai <br/><br/> 
    >sabse pehle parent ko dhundhega; <br/><br/>
    >if parent is positioned ? parent k saath relate ho jao : search nearest positioned ancestor (if not found - relate to html element)

### Following properties get activated when position is `other than static`

    1. top
    2. bottom
    3. right
    4. left  
    5. z-index  

### z-index

    z-index: number  ===> make the div look like stacked(one above another i.e higher is on top)
 