import React from 'react';

export const Questions = () => {
  return (
    <div>
      You submit questions here.
      <form action='' method='post'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='email'>Your Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='email'>Your Question</label>
        <input type='textarea' name='question' id='question' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};


export default Questions;