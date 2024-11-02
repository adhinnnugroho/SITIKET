
import AssetsManagement from "asset/AssetsManagement";
import ComponentManagement from "components/ComponentManagement";
import MainLayout from "layouts/MainLayout";
import { useState } from "react";

const KeretaActions = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <MainLayout>
            <div className="h-[50rem]">
                <div className="relative">
                    <div className="mb-[90rem]">
                        <ComponentManagement.PesanCard image={AssetsManagement.Kereta} link={'/'} />
                        <div className="absolute top-24 px-2 w-full z-10 " >
                            <div className="rounded-lg bg-white p-3 w-full h-auto">
                                <h1 className="text-2xl font-bold  text-black">Kereta Api</h1>

                                <div className="mt-5">
                                    <div className="p-4 bg-gray-100 rounded-lg">
                                        <div className="flex flex-col items-start" data-testid="clickable-departure-input">
                                            <p className="text-gray-500 text-sm">Dari</p>
                                            <div>
                                                <span className="text-gray-900 text-lg font-bold">
                                                    Pilih kota atau stasiun
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="w-hx h-1 bg-gray-300"></div>
                                            <div className="flex justify-end -mt-5">
                                                <button
                                                    aria-label="tukar airport"
                                                    className="flex items-center justify-center w-9 h-9 bg-white rounded-lg text-white mx-2 transform rotate-90"
                                                    type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                                        <path
                                                            fill="#4d4f56"
                                                            d="M9.712 12.289c.36.361.387.93.081 1.322l-.083.094-1.297 1.294 9.586.006c.553 0 1.001.448 1.001 1 0 .513-.387.936-.885.993l-.117.007-9.579-.006 1.292 1.297c.36.361.388.93.082 1.322l-.083.094c-.361.36-.928.388-1.32.082l-.094-.083-3-3.012c-.36-.361-.388-.93-.082-1.322l.083-.094 3-2.996c.391-.39 1.024-.39 1.415.002zm5.898-8.084l.094.084 3 3.01c.36.362.388.93.082 1.323l-.083.094-3 2.996c-.391.39-1.024.39-1.415-.002-.36-.361-.387-.929-.081-1.321l.083-.095L15.586 9l-9.585-.005c-.553 0-1.001-.448-1.001-1 0-.513.387-.936.885-.993l.117-.007L15.579 7l-1.29-1.296c-.36-.361-.388-.93-.082-1.322l.083-.094c.361-.36.928-.388 1.32-.082z"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start" data-testid="clickable-arrival-input">
                                            <p className="text-gray-500 text-sm">Ke</p>
                                            <div>
                                                <span className="text-gray-900 text-lg font-bold">
                                                    Mau ke mana?
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-100 rounded-lg mt-5">
                                        <div className="flex justify-between space-x-4 ">
                                            <div>
                                                <p className="text-sm text-gray-500">Pergi</p>
                                                <span className="text-lg font-bold text-gray-800">Sab, 2 Nov</span>
                                            </div>
                                            <div className="flex justify-end">
                                                <label className="flex items-center space-x-3">
                                                    <span className="text-xl text-gray-600">Pulang-pergi?</span>
                                                    <div className="relative inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="sr-only"
                                                            aria-label="Pulang-pergi?"
                                                            checked={checked}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <div className={`w-12 h-8 flex items-center justify-center ${checked ? 'bg-blue-600' : 'bg-gray-300'} rounded-full transition-colors`}>
                                                            <div
                                                                className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${checked ? 'translate-x-5 ' : ''
                                                                    }`}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className={`mt-4 ${checked ? 'block' : 'hidden'}`}>
                                            <div className="mt-4 mb-4">
                                                <div className="w-hx h-1 bg-gray-300"></div>
                                            </div>

                                            <div className="flex flex-col items-start" data-testid="clickable-arrival-input">
                                                <div>
                                                    <p className="text-sm text-gray-500">Pulang</p>
                                                    <span className="text-lg font-bold text-gray-800">Sab, 2 Nov</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-x-4 p-4 bg-gray-100 mt-4 rounded-md">
                                    <span className="text-lg font-bold text-gray-800">1 Penumpang</span>
                                </div>
                                <button className="bg-blue-600 w-full text-white p-3 rounded-lg mt-5">
                                    Ayo Cari
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default KeretaActions;