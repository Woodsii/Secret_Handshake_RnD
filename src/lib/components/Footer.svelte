<!-- Footer 
- What information?
1. contact
2. some more nav
3. socials
-->

<div class="footer">
    <div class="footer-nav"> 
        <ul class="nav-list">
            <li>
                <a href="https://www.linkedin.com/in/bennett-woods-131b99287"> <img class="link-icon" src="../icons/linkedin.svg" alt="Linkedin icon"></a>
            </li>
            <li>
                <a href="https://github.com/Woodsii"> <img class="link-icon" src="../icons/github.svg" alt="Github Icon"></a>
            </li>
            <li>
                <a href="https://www.instagram.com/woodsiiii?igsh=M2xyazF4MzQ2M3Rm"> <img class="link-icon" src="../icons/instagram.svg" alt="Instagram Icon"></a>
            </li>
            <li>
                <a href="mailto:bennettwoods.work@gmail.com"> <img class="link-icon" src="../icons/mail.svg" alt="Mail Icon"></a>
            </li>
        </ul>
    </div>

    <nav>
        <a href="/">Home</a> · 
        <a href="/about-me">About</a> · 
        <a href="/blog">Blog</a> · 
        <a href="/portfolio">Portfolio</a>
  </nav>
</div>


<style>
    ul.nav-list li {
        display: inline;
        list-style: none;
    }

    .link-icon {
        filter: invert(1);
    }

    .footer {
        background-color: #121212; /* dark grey */
        color: #d8b4f8; /* lavender highlight */
        padding: 2rem;
        text-align: center;
        font-size: 0.875rem;
    }

    .footer a {
        color: #d8b4f8;
        text-decoration: none;
        margin: 0 0.5rem;
    }

    .footer a:hover {
        text-decoration: underline;
}

</style>