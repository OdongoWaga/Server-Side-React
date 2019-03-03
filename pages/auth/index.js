import React from 'react';
import User from '../../components/User';

const index = () => {
  return (
    <div>
      <h1> Auth Index page </h1>
      <User name="Waga" age={32} />
    </div>
  )
}

export default index
