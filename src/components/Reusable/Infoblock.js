import { Link } from 'gatsby'
import React from 'react'
import Heading from './heading'

export default function Infoblock({heading}) {
    return (
        <section className = "bg-theme my-5 py-4">
            <div className = "container">
                <Heading title = {heading} />
                <div className = "col-10 col-sm-18 mx-auto text-center">
                    <p className = "lead text-white mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad natus vero optio! Exercitationem, temporibus eligendi! Accusamus corporis similique magni. Nostrum reiciendis vitae iusto error consectetur, obcaecati voluptas aperiam. Iure ipsum perferendis aliquam deserunt expedita molestias provident, iste recusandae placeat non neque quas debitis totam veritatis asperiores deleniti tempora numquam iusto dolorem itaque omnis impedit natus! Sapiente commodi quibusdam veritatis!    
                    </p>    
                    <Link to = "/">
                        <button className = "btn btn-warning btn-lg">
                            {heading}
                        </button>
                    </Link>
                </div>    
            </div>            
        </section>
    )
}
