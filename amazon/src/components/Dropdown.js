import React from "react";


const Dropdown = (props)=>
{
    //var list=["spandana","manisha","vineela"]
    return <select>
   {
       props.list.map((item,index)=>
       {
           return <option value={index}>{item}</option>
       }
       )
   }


    </select>
};
export default Dropdown;
/*<select>
 
 
 <option value="1">One</option>
   <option value="2">Two</option>
   <option value="2">Three</option>

</select>*/