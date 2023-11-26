import TemplateContent from "./Contact"
import TemplateFooter from "./Footer"
import TemplateHeader from "./Header"
import TemplateNavbar from "./Navbar"


function PageContent() {
  return (
    <>
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1100 }}></div>

    <TemplateNavbar/>
    <TemplateHeader/>
    <TemplateContent/>
    <TemplateFooter/>

    </>

  )
}

export default PageContent