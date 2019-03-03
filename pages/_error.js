import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const index = () => {
  return (
    <div>
      <h1> Something went Wrong </h1>
      <p> Try <Link href="/"><a> Going Back</a></Link> </p>
    </div>
  )
}

export default index
