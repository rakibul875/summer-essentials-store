import React from 'react';

const loading = () => {
    return (
        <div className='container mx-auto flex justify-center items-center m-auto min-h-screen'>
            <span className="loading loading-spinner text-orange-500 loading-xl"></span>
        </div>
    );
};

export default loading;