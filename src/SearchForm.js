import React from "react";
import "./SearchForm.css"


function SearchForm(){
    return (
        <div className="container cont-2 mt-5 ps-5 pe-5 ps-md-3 pe-md-3">
            <form className="w-100">
                <div className="row gy-4 d-block d-md-flex align-items-center justify-content-between">
                    <div className="col-12 col-md-4">
                        <div style={{ width: "100%" }}>
                            <input type="search" placeholder="search for a country" id="input" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <select className="select w-100">
                            <option>name, rising</option>
                            <option>name, siinking</option>
                            <option>population, rising</option>
                            <option>population, sinking</option>
                            <option>neighbours, rising</option>
                            <option>neighbours, sinking</option>
                        </select>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <select className="select w-100">
                            <option selected>filter  by region</option>
                            <option>all</option>
                            <option>europe</option>
                            <option>asia</option>
                            <option>africa</option>
                            <option>america</option>
                            <option>oceania</option>
                        </select>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SearchForm