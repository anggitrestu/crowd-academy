import React from 'react';

export default function MyProfileContent() {
  return (
    <div className="relative flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center w-full ">
      <div className="absolute inset-0 z-0" />
      <div className="max-w-screen-lg w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-xl mr-auto">Profil Saya</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
            </div>
            <div className="mt-5">
              <div className="form">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2  md:w-full w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Nama Lengkap <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Nama Lengkap"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Pengalaman Kerja <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="pengalaman kerja"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      min="1"
                      max="15"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Bidang Pekerjaan <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="bidang pekerjaan"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className=" font-semibold text-gray-600 py-2">
                    LinkdIn/Website
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder="https://"
                    />
                  </div>
                </div>
                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2">
                      Skill dan Kompetensi
                    </label>
                    <textarea
                      required
                      name="message"
                      id
                      className=" min-h-[100px] max-h-[300px] h-28 appearance-none block  w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter your skill and competency"
                      spellCheck="false"
                      defaultValue={''}
                    />
                    <p className="text-xs text-gray-400 text-left my-3">
                      You inserted 0 characters
                    </p>
                  </div>
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2">
                      Location<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required="required"
                      name="integration[city_id]"
                      id="integration_city_id"
                    >
                      <option value>IT & Data</option>
                      <option value>Bisnis dan Keuangan</option>
                      <option value>Sastra dan Seni</option>
                      <option value>Olahraga</option>
                    </select>
                    <p className="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-red-500 text-right my-3">
                  Required fields are marked with an asterisk{' '}
                  <abbr title="Required field">*</abbr>
                </p>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    {' '}
                    Cancel{' '}
                  </button>
                  <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
