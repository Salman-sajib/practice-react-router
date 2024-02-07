import React from 'react';
import { useParams } from 'react-router-dom';

function user() {
  const { userid } = useParams();

  return (
    <div className='bg-orange-500 text-3xl text-center py-5'>
      user: {userid}{' '}
    </div>
  );
}

export default user;
