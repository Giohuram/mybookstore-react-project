import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Mfumu Buku" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">À Propos</Footer.Link>
              <Footer.Link href="#">Shop</Footer.Link>
              <Footer.Link href="#">Vendre mon livre</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Nous contactez" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Instagram</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Politique de confidentialité.</Footer.Link>
              <Footer.Link href="#">Autorisation</Footer.Link>
              <Footer.Link href="#">Termes &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Téléchargez l'application mfumu buku" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="En Classe RDC designed by Giovanni Huram Masala" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            {/* <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter