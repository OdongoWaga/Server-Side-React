import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1> The main page </h1>
      <p> Go to <Link href="/auth"><a> Auth</a></Link> </p>
    </div>
  )
}

export default index
