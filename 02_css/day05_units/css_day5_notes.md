<!-- 02 - sept - 2024 -->

# css day5: UNITS


    Absolute units              Relative units (ALWAYS USE THESE UNITS)

    - px                          - %
    - cm                          - vh      (viewport height)
    - mm                          - vw      (viewport width)
    - in                          - vmin    (viewport minimum)
    - pc (picaas)                 - vmax    (viewport maximum)
    - pt (points)                 - em 
                                  - rem



## Relative units

    - those units which are taking reference either from viewport, parent element or root element
    
    - relative units are used to make layout responsive; it is not 100% true


## Absolute units 
    
    - Absolute units are absolute waste

    - absolute se every device me fit nahi hota hai
    
    - manual calculate krna pdta hai
    
    - so don't use it


 ```diff
+ direct-child ko % me height nahi de sakte
 ```

 
# RELATIVE UNITS

    1. %    ==> take reference from parent
    2. vh   ==> take reference from viewport height
    3. vw   ==> take reference from viewport width
    4. vmin ==> take reference from viewport; jo bhi minimum rhega; either(vw or vh)
    5. vmax ==> take reference from viewport; jo bhi maximum rhega; either(vw or vh)
