import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      WELCOME!!!
      <Link to='/account'>Account</Link>
    </section>
  )
}

export default Welcome;
