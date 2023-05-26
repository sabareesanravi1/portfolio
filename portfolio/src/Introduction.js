import IntroductionTextAnimation from "./IntroductionTextAnimation";

function Introduction() {
    return(
        <section class="bgimage" id="home">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                        <h1 class="hero_desc">Hi, I'm Sabareesan Ravi</h1>
                        <p>Software Developer @  <img src={"https://www.zohowebstatic.com/sites/default/files/zoho_general_pages/zoho-logo-web.png"} height="30px" /></p>
                        <img src="https://www.encaptechno.com/assets/img/zoho-business-creator.png" />
                        <IntroductionTextAnimation />
            </div>
            </div>
        </div>
    </section>
    );
};

export default Introduction;
