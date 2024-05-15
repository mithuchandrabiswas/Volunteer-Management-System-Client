import { CgWebsite } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content my-2 rounded">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <div className='flex items-center gap-3'>
            <CiLocationOn className='text-orange-600 text-xl'></CiLocationOn>
            <div className='w-5/6'>
              <address className='text-xs md:text-sm'>
                198 West 21th street,USA
              </address>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='text-orange-600 text-lg'></FaPhoneAlt>
            <div className='w-5/6'>
              <span className='text-xs md:text-sm'> +1234 5678 90</span>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <MdEmail className='text-orange-600 text-xl w-5 h-5'></MdEmail>
            <div className='w-5/6'>
              <span className='text-xs md:text-sm'>Careox@info.com</span>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <CgWebsite className='text-orange-600 text-xl w-5 h-5'></CgWebsite>
            <div className='w-5/6'>
              <span className='text-xs md:text-sm'>www.Careox.com</span>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Social Info</h6>
          <div className="flex gap-2 justify-center">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>
      <div>
        <hr />
        <aside className="flex flex-col md:flex-row items-center gap-2 mx-auto bg-base-200 justify-center py-5">
          <p className="text-xs md:text-sm">All Copyright © reserved to
          </p>
          <Link to={"/"} className="text-md md:text-xl font-bold text-cyan-600">
              <img src="https://i.ibb.co/4Y65KZj/logo-dark.png" alt="" />
            </Link>
        </aside>
      </div>
    </div>
  );
};

export default Footer;