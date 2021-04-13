import React from 'react'
import Heading from './Heading'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="contanier">
                <Heading title={heading}/>
                <div className="row-infoblock">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa, soluta itaque vitae quos veritatis consequatur facere illum accusantium maxime. Placeat sint dolorum nisi facilis enim perferendis optio? Perferendis sint tenetur harum voluptates! Iste voluptate vel laudantium illum architecto ipsa distinctio eos debitis dicta dolorem, nesciunt iure fuga hic perspiciatis!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fphoto%2F72975551.cms&imgrefurl=https%3A%2F%2Ftimesofindia.indiatimes.com%2Flife-style%2Fevents%2Fsurya-grahan-today-annular-solar-eclipse-2019-december-images-photos-pics-video-check-out-these-breathing-pictures-of-the-seasons-last-surya-grahan-of-26-december-2019-india%2Fphotostory%2F72975550.cms&tbnid=pTd2OIa33-6LVM&vet=12ahUKEwjr-r3t6_jvAhXLCLcAHfPYBREQMygEegUIARDbAQ..i&docid=78aIM0GrmvG9rM&w=1200&h=900&q=images&ved=2ahUKEwjr-r3t6_jvAhXLCLcAHfPYBREQMygEegUIARDbAQ" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
