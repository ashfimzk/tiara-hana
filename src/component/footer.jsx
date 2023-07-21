function Footer() {
  return (
    <div className="bg-[#BAA88C] px-[30px] py-[50px]">
      <div className="flex gap-10">
        <div>
          <img
            src="https://www.tiarahana.com/wp-content/uploads/2023/05/tiara-hana-signature-investment-collection-db-2.png"
            alt=""
            className="w-[180px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="tcon !text-black">Our Resort Portfolio</h1>
          <div>
            <img
              src="https://www.tiarahana.com/wp-content/uploads/2023/05/IMG_0307-1.png"
              alt=""
              className="w-[100px] h-[100px] mb-[30px]"
            />
            <img
              src="https://www.tiarahana.com/wp-content/uploads/2023/06/Sundancer_blue_logo_symbol.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>
        <div>
          <h2 className="tcon !text-black">Our Address</h2>

          <div className="flex flex-col items-start justify-start">
            <h2 className="tcon mt-10 !text-black">PT. Tiara Hana Indonesia</h2>
            <h2>Luxury Property Company</h2>

            <h3 className="text-left mt-6">
              Gd. Puri Begawan Lantai 1, Jl. Pajajaran
              <br /> No. 05-07, Kota Bogor, Jawa Barat 16143
            </h3>
            <h3 className="text-left mt-6">
              Pondok Indah Office Tower 2, 15th Floor
              <br /> Jl. Sultan Iskandar Muda, Jakarta Selatan 12310
            </h3>
          </div>
        </div>
        <div>
          <h2 className="tcon !text-black">Opening Hours</h2>

          <div className="flex flex-col items-start justify-start">
            <h3 className="text-left mt-6">
              Senin - Jumat | 09.00 - 17.00
              <br />
              WhatsApp : +62 811 1117 916
            </h3>
            <span className="flex gap-4 mt-4">
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/05/ytGroup-2-db.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/05/Group_ig_db.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
            </span>
          </div>
        </div>
        <div>
          <div className="logo2 flex gap-2">
            <img
              src="https://www.tiarahana.com/wp-content/uploads/2023/02/outstanding_business_concept_23.png"
              alt=""
            />
            <img
              src="https://www.tiarahana.com/wp-content/uploads/2023/02/best_lifestyle_property_company_23.png"
              alt=""
            />
            <img
              src="https://www.tiarahana.com/wp-content/uploads/2022/01/rising-company-logo.png"
              alt=""
            />
            <img
              src="https://www.tiarahana.com/wp-content/uploads/2023/05/tiarahana-arebi-member.png"
              alt=""
            />
          </div>
          <div className="btnfot">
            <a href="">Book Appointment</a>
          </div>
        </div>
      </div>
      <div className="text-left mt-10">
        <p>
          © <script>document.write(new Date().getFullYear())</script>
          2023 Tiara Hana. | All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
