// import React from 'react'

// const Navbar = ({ pagename,pagenumber }) => {
//     return (
//         <>

//             <div className="navbar-container border-2 border-blue-600">
//                 <div className="text-black font-poppins font-bold text-2xl">
//                     {pagename}
//                 </div>

//             </div>
//             {/* <div className="mt-2 pl-4 border-2 flex border-blue-600">
//                 <div className="w-full text-black font-poppins font-bold text-xl">
//                     Sustain Ethics B2C Business
//                 </div>
//                 <div className="w-full text-end font-bold mr-4 ">
//                 ADM {pagenumber}
//                 </div>

//             </div> */}
//         </>
//     )
// }

// export default Navbar;

import React from 'react';

const Navbar = ({ pagename, pagenumber }) => {
    return (
        <div className="navbar-container bg-blue-600 py-4 px-6 text-white flex justify-between items-center shadow-md rounded-lg">
            <div className="text-2xl font-bold">{pagename}</div>
            <div className="text-lg">{pagenumber}</div>
        </div>
    );
};

export default Navbar;
