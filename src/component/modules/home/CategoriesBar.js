import React,{useState} from 'react';
import { Link } from "react-router-dom";


export default function CategoriesBar() {

    const CatBar = [
    {ID: 1,  label:"Mobile"},
    {ID: 2,  label:"Cars"},
    {ID: 3,  label:"Motorcycle"},
    {ID: 4,  label:"Jewelry"},
    {ID: 5,  label:"Tablet"},
    {ID: 6,  label:"TV-Audio-Video"},
    {ID: 7,  label:"Clothes"},
]   
    return (
        <div>
            {CatBar.map((item)=>{

                return(
                    <div className="d-inline-block ml-3 justify-content-center text-decoration-none">
                        <Link to="" className="text-dark">{item.label}  </Link>
                      

                    </div>
                )

            })}
        </div>
    )
}
