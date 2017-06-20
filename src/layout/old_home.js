import React from 'react'

export default (props) => {
	return (
		            <div>
                <Sidebar />
                <div className="main-container">
                    <section className="imagebg image--light cover cover-blocks bg--secondary">
                        <div className="background-image-holder hidden-xs">
                            <img alt="background" src={promo1} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-5 col-md-offset-1">
                                    <div>
                                        <h1>Welcome to Turbo</h1>
                                        <p className="lead">
                                            Stack includes support for a sidebar column navigation the left, or right of the page
                                        </p>
                                        <hr className="short" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="elements">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-8 col-md-offset-2">
                                    { content }
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>

            </div>

	)
}