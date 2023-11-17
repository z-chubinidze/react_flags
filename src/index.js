import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css"
import Nav from "./Nav";
import SearchForm from "./SearchForm";

function App() {

    const [data, setData] = useState([])
   
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
            .then((response) => {
                setData(response.data)

            })
    }, []);

  

    return (
        <React.Fragment>
            <Nav />
            <SearchForm />
            <div className="container cont-1 pt-5 pb-5 ps-5 pe-5 ps-md-3 pe-md-3">

                <div className="row gy-4">
                    {
                        data.map(item => (
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="mein-box">
                                    <img src={item.flags.png} alt="flags" className="w-100" style={{ height: "9rem" }} />
                                    <div className="pt-4 ps-4 pe-4 info-box" >
                                        <h1>country : <span>{item.name.common}</span> </h1>
                                        <h1>official name :<span>{item.name.official}</span> </h1>
                                        <h1>nativeName : <span>{item.name.nativeName.eng?.common
                                            || item.name.nativeName.spa?.common
                                            || item.name.nativeName.mey?.common
                                            || item.name.nativeName.uzb?.common
                                            || item.name.nativeName.rus?.common
                                            || item.name.nativeName.fra?.common
                                            || item.name.nativeName.deu?.common
                                            || item.name.nativeName.mon?.common
                                            || item.name.nativeName.swa?.common
                                            || item.name.nativeName.por?.common
                                            || item.name.nativeName.ara?.common
                                            || item.name.nativeName.hrv?.common
                                            || item.name.nativeName.ben?.common
                                            || item.name.nativeName.dan?.common
                                            || item.name.nativeName.jpn?.common
                                            || item.name.nativeName.kal?.common
                                            || item.name.nativeName.ell?.common
                                            || item.name.nativeName.kat?.common
                                            || item.name.nativeName.zho?.common}
                                        </span></h1>

                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </React.Fragment>
       
    )




}

const root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />)