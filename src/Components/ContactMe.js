import react from "react";
import Navbar from "./Navbar";

const ContactMe =()=>{

    return (
        <>
        <Navbar />
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm">
                <form className="form-horizontal" method="post">
                    <fieldset>
                        <legend className="text-center header">Contact us</legend>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="First Name" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="Last Name" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="email" name="email" type="text" placeholder="Email Address" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="phone" name="phone" type="text" placeholder="Phone" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <textarea className="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default ContactMe;