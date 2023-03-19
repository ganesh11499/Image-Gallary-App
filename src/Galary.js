import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Galary = ({data}) => {
    return (
        <div>
            <div className="row">
                <h1 className="mt-2">Image Gallry</h1>
                {
                    data.map((image) => {
                        return(
                            <div className="col-lg-3 col-md-3 col-sm-12 mt-2">
                                <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                                  height="200"  width="350"/>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Galary;
