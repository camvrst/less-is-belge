export const header = `
<header >
        <nav class="nav-bar d-flex justify-around items-center w-full">
            <a href="./index.html"> <img class="nav-logo lg-margin-top" src="../assets/logo/logo-less-is-belge-big.png" alt="Logo Less is Belge"></a>
            <a href="./index.html"><img class="nav-logo-sm lg-margin-top" src="../assets/logo/less-is-belge-small-logo-eye.png" alt="Logo Less is Belge"></a>
            <ul class="w-50 d-flex justify-around nav-links">
                <li><a href="./annuaire.html" class="nav-text">annuaire</a></li>
                <li><a href="./articles-generaux.html" class="nav-text dropdown-article">articles</a>
                        <ul class="dropdown-sm">
                         <a href="./fiches-pratiques.html"><li>fiches pratiques</li></a>
                         <a href="./lexique-matiere.html"><li>lexique des matières</li></a>
                         <a href="./articles-infos.html"><li>articles informatifs</li></a>
                         <a href="./articles-marques.html"><li>les marques belges</li></a>
                        </ul>
                </li>
                <li><a href="./contact.html" class="nav-text">contact</a></li>
                <li><a href="./a-propos.html" class="nav-text">à propos</a></li>
            </ul>
            <div class="burger-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
        <div class="dropdown-article-pc">
            <section class="section-mag">
                <div class="section-mag-title d-flex items-center justify-around align-baseline">
                    <div class="lg-w-30 w-10 sm-horizontal-line"></div>
                    <div>
                        <h4>Le magazine</h4>
                    </div>
                    <div class="lg-w-30 w-10 sm-horizontal-line"></div>
                </div>
                <div class="section-articles d-flex justify-around w-full sm-flex-column flex-wrap">
                    <div class="footer-cat-articles w-20 footer-fiches">
                        <a href="./fiches-pratiques.html" class="cat-articles-title">fiches pratiques</a>
                    </div>
                    <div class="footer-cat-articles w-20 footer-lexique">
                        <a href="./lexique-matiere.html" class="cat-articles-title">lexique des matières</a>
                    </div>
                    <div class="footer-cat-articles w-20 footer-art-info">
                        <a href="./articles-infos.html" class="cat-articles-title">articles informatifs</a>
                    </div>
                    <div class="footer-cat-articles last-cat w-20 footer-marque">
                        <a  href="./articles-marques.html" class="cat-articles-title">les marques belges</a>
                    </div>
                </div>
            </section>

        </div>
    </header>
`;

export const footer = `
<!-- FOOTER -->
<footer class="footer">
     <!-- FIRST PART WITH MAGAZINE -->
<section class="section-mag">
    <div class="section-mag-title d-flex items-center justify-around align-baseline">
        <div class="lg-w-30 w-10 sm-horizontal-line"></div>
        <div>
            <h4>Le magazine</h4>
        </div>
        <div class="lg-w-30 w-10 sm-horizontal-line"></div>
    </div>
    <div class="section-articles d-flex justify-around w-full sm-flex-column flex-wrap">
        <div class="footer-cat-articles w-20 footer-fiches">
            <a href="./fiches-pratiques.html" class="cat-articles-title">fiches pratiques</a>
        </div>
        <div class="footer-cat-articles w-20 footer-lexique">
            <a href="./lexique-matiere.html" class="cat-articles-title">lexique des matières</a>
        </div>
        <div class="footer-cat-articles w-20 footer-art-info">
            <a href="./articles-infos.html" class="cat-articles-title">articles informatifs</a>
        </div>
        <div class="footer-cat-articles last-cat w-20 footer-marque">
            <a href="./articles-marques.html" class="cat-articles-title">les marques belges</a>
        </div>
    </div>
</section>
  <!-- SECOND PART WITH NAV AND LOGO-->
    <div class="d-flex justify-center w-full sm-flex-column sm-justify-around sm-align-center">

            <div class="lg-w-30 w-full d-flex padding-auto sm-justify-center sm-margin-top">
                <a href="#" class="sm-d-flex sm-justify-center"><img class="logo-footer w-60 lg-w-80" src="../assets/logo/less-is-belge-big-logo-rose.png" alt="Logo Less is Belge"></a>
                <div class="vertical-line"></div>
            </div>

        <nav class="footer-nav d-flex justify-around lg-w-50 sm-flex-column sm-align-center sm-margin-top">
            <ul class="line-h-75">
                <a href="./annuaire.html"><li class="bold sm-txt-center">annuaire</li></a>
            </ul>
            <ul class="line-h-75">
                <a href="./articles-generaux.html"><li class="bold sm-txt-center">articles</li></a>
                <a href="./fiches-pratiques.html"><li class="sm-txt-center">fiches pratiques</li></a>
                <a href="./lexique-matiere.html"><li class="sm-txt-center">lexique des matières</li></a>
                <a href="./articles-infos.html"><li class="sm-txt-center">articles informatifs</li></a>
                <a href="./articles-marques.html"><li class="sm-txt-center">les marques belges</li></a>
            </ul> 
            <ul class="line-h-75">
                <a href="./contact.html"><li class="bold sm-txt-center">contact</li></a>
                <a href="./a-propos.html"><li class="bold sm-txt-center">à propos</li></a>
                <a href="./newsletter.html"><li class="bold sm-txt-center">newsletter</li></a>
            </ul>
            <ul class="line-h-75">
                <a href="#"><li class="bold sm-txt-center">mentions légales</li></a>
            </ul>
        </nav>
        <div class="social-icons lg-w-5 sm-margin-top">
        <a href="https://www.instagram.com/less.is.belge/?hl=fr"><i class="fab fa-instagram social-icon"></i></a>
        <a href="#"><i class="fab fa-facebook-f social-icon"></i></a>
        <a href="#"><i class="fab fa-pinterest-p social-icon"></i></a>
        <a href="#"><i class="fas fa-share-alt social-icon"></i></a>
    </div>
</div>
    <div class="d-flex justify-around ">
        <p class="copyright"> &copy;2020. Site créé avec <span>  &#x2764;&#xFE0F  </span> par Camille, Fanny et Ayaan.</p>
    </div>
</footer>
`;
