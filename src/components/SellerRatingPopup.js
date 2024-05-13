"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import logo from '../assets/logo.png';

export function SellerRatingPopup() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <div className='pb-6'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 pb-2 px-3 rounded-full" onClick={() => setOpenModal(true)}>Rate</button>
            </div>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <h3 className="px-5 text-xl font-medium text-gray-900 dark:text-white">Rate your agent!</h3>
                    <form class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2 flex items-center gap-4">

                                <img src={logo} className="h-[4rem] flex object-cover border rounded-[50rem] w-[4.3rem]" />
                                <p className='mb-3'>Faishal Shal</p>

                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">5</option>
                                    <option value="FOUR">4</option>
                                    <option value="THREE">3</option>
                                    <option value="TWO">2</option>
                                    <option value="ONE">1</option>
                                </select>
                            </div>
                            <div class="col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review</label>
                                <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write agent review here"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="ml-[4rem] w-[12rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Rate & Review
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default SellerRatingPopup