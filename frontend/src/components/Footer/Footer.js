function Footer({loggedIn}){
  return(
    <footer className={ loggedIn ? "footer" : "hidden"}>
    <p className="footer__author">&copy; 2020 Mesto Russia</p>
  </footer>
  )
}
export default Footer;