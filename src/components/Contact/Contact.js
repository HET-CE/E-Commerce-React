import React from 'react'
import Heading from '../Reusable/Heading'

export default function Contact() {
    return (
        <section className = "py-3">
            <Heading title = "Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action ="https://formspree.io/f/mqkwazgy" method = "POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder = "Name" className = "form-control" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder = "Email" className = "form-control" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="number" id="number" placeholder = "Mobile Number" className = "form-control" required/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description" id="description" placeholder = "Message" className = "form-control" required/>
                    </div>
                    <button type = "submit" className = "btn btn-block btn-outline-info">Submit</button>
                </form>
            </div>
        </section>
    )
}
