# Grid properties

1. display: grid;

2. grid-template-columns: 1fr 50px auto repeat(2, 300px) minmax(200px,3fr);

3. grid-template-rows: 1fr 50px auto repeat(2, 300px) minmax(200px,3fr);

4. gap: 1rem;

5. order: 1;                       
    >/* default is 0 */

6. grid-auto-rows: 50px;           
    >/* baaki k elements jo baad me add honge */

7. grid-column: span 2;
    - grid-column-start: 2;       
        >/* -ve value also allowed */
    - grid-column-end: auto;

8. grid-row: span 2;
    - grid-row-start: 2;          
        >/* -ve value also allowed */
    - grid-row-end: auto;

9. grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-start;

10. grid-template-areas: 

        'navbar navbar navbar navbar'
        'sidebar main main main'
        'sidebar main-content1 main-content2 main-content3'
        'sidebar footer footer footer';

> grid-area can be used to overlap one div over another 

### refer pdf for more....