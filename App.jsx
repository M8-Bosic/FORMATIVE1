import { useState } from 'react';
import { BTECH1_backend } from 'declarations/BTECH1_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    BTECH1_backend.greet(name, phone).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src='/logo2.svg' alt='DFINITY logo' />
      <br />
      <br />
      <form action='#' onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter your name: &nbsp;</label>
        <input id='name' alt='Name' name='name' type='text' />
        <label htmlFor='name'>Enter your Address: &nbsp;</label>
        <input id='phone' alt='phone' name='phone' type='text' />
        <button type='submit'>Click Me!</button>
      </form>
      <section id='greeting'>{greeting}</section>
    </main>
  );
}

export default App;