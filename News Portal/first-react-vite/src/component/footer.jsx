import React from "react";

const Footer = () => {

    return (
        <>
            <footer className="w-screen">
                <div className="bg-white mt-24 mb-14 ml-80 mr-24 grid grid-cols-4">
                    <div className="col">
                        <h3 className="text-3xl font-bold p-10">News Update</h3>
                    </div>
                    <div className="col">  
                        <h3 className="text-2xl font-bold">Social Media</h3>
                        <a href="https://wa.me/6283829269557" target="_blank" rel="noopener noreferrer">
                        <img src="https://logospng.org/download/whatsapp/logo-whatsapp-preto-branco-4096.png" alt="Whatsapp" className="w-8 h-8 mx-2" />
                        </a>
                        <a href="https://t.me/AnandaLestari13" target="_blank" rel="noopener noreferrer">
                        <img src="https://th.bing.com/th/id/OIP.7UFR8a1i-vjEwZnkSXJ-4wHaEo?pid=ImgDet&rs=1" alt="Telegram" className="w-8 h-8 mx-2" />
                        </a>
                        <a href="https://www.instagram.com/anandalestari91/" target="_blank" rel="noopener noreferrer">
                        <img src="https://th.bing.com/th/id/OIP.J7JudGMZxhzFaZGGtwW_FAHaHa?pid=ImgDet&rs=1" alt="Instagram" className="w-8 h-8 mx-2" />
                        </a>
                    </div>
                    <div className="col">
                        <h3 className="text-2xl font-bold">Alamat</h3>
                        <p className="text-xl">Kp.Mariuk Desa.Neglasari</p>
                        <p className="text-xl">Kecamatan Cipongkor</p>
                        <p className="text-xl">Phone <a href="tel:+6283195513947" className="text-blue-500">+6283195513947</a></p>
                    </div>
                </div>
            </footer>
            <div className="mx-auto bg-blue-500 w-full text-white py-6 text-center w-screen">
                <p className="text-2xl font-bold">&copy; {new Date().getFullYear()} Copyright News Update. All Rights Reserved</p>
            </div>
        </>
    )
};

export default Footer;