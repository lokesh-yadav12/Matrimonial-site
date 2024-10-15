import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import tran from "../images/trans.png"

export const Footer = () => {
    return (
        <div className="bg-gray-50 py-5 overflow-x-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 ">
                {/* Company Section */}
                <details className="md:block mb-2">
                    <summary className="text-lg font-bold cursor-pointer mb-2 md:mb-0">COMPANY</summary>
                    <ul className="space-y-1 md:block">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Logo</a></li>
                        <li><a href="#" className="hover:underline">Success Stories</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Referral</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                    </ul>
                </details>

                {/* Need Help Section */}
                <details className="md:block mb-2">
                    <summary className="text-lg font-bold cursor-pointer mb-2 md:mb-0">NEED HELP?</summary>
                    <ul className="space-y-2 md:block">
                        <li><a href="#" className="hover:underline">How to use</a></li>
                        <li><a href="#" className="hover:underline">Sukhvivah.com</a></li>
                        <li><a href="#" className="hover:underline">Member Login</a></li>
                        <li><a href="#" className="hover:underline">Registration</a></li>
                        <li><a href="#" className="hover:underline">Partner Search</a></li>
                        <li><a href="#" className="hover:underline">Payment Options</a></li>
                    </ul>
                </details>

                {/* Support Section */}
                <details className="md:block mb-2">
                    <summary className="text-lg font-bold cursor-pointer mb-2 md:mb-0">SUPPORT</summary>
                    <ul className="space-y-2 md:block">
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Security Tips</a></li>
                        <li><a href="#" className="hover:underline">Be Safe Online</a></li>
                        <li><a href="#" className="hover:underline">Fraud Alert</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </details>

                {/* More Section */}
                <details className="md:block mb-2">
                    <summary className="text-lg font-bold cursor-pointer mb-2 md:mb-0">MORE</summary>
                    <ul className="space-y-2 md:block">
                        <li><a href="#" className="hover:underline">Advertise</a></li>
                    </ul>
                </details>

                {/* Follow Us Section */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-4">FOLLOW US ON</h3>
                    <div className="flex space-x-4 mb-2">
                        <a href="#"> <FaFacebook className='h-10 w-10 bg-red-800 text-white'/> </a>
                        <a href="#"> <FaSquareInstagram className='h-10 w-10 bg-red-800 text-white' /></a>
                        <a href="#"><FaTelegram  className='h-10 w-10 bg-red-800 text-white'/></a>
                        <a href="#"><FaWhatsapp className='h-10 w-10 bg-red-800 text-white' /></a>
                        <a href="#"><FaLinkedin className='h-10 w-10 bg-red-800 text-white' /></a>
                    </div>
                   
                </div>
            </div>

            {/* Payment Section */}
            <div className="mt-5 text-center">
                <p className="text-2xl font-bold">Website Security & Payments</p>
                <div className="mt-2">
                    <img src={tran} alt="SSL Secure" className="mx-auto h-28" />
                </div>
                <div className=" justify-center items-center mx-auto">
                <SiPaytm className='h-24 w-24 mx-auto '/>
                </div>
            </div>
            <div className='justify-center items-center'>
                <p className='text-center text-lg py-1'><b>Stay Connected With</b></p>
                <p className='text-center text-2xl text-pink-600 py-2'><b>Sukhvivah Super App</b></p>
                <p className='text-center pb-2'> <b>Quick partner search, get notification and updates with great user experience.</b></p>
            </div>
        </div>
    );
};
