import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="mx-auto w-5/6 flex flex-col md:flex-row justify-center gap-16">
        <div className="basis-1/2">
          <img src={Logo} alt="logo" />
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            unde id fuga praesentium dolorum laborum adipisci nesciunt, ipsam
            quae aliquid.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
