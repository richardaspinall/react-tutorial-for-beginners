import { useEffect, useState } from 'react';

//Add this function
const getGreeting = async function () {
  const res = await fetch('/api/test');
  return await res.json();
};

export default function ApiTest() {
  const [greeting, setGreeting] = useState(''); // Add this

  useEffect(() => {
    // Add this hook
    getGreeting().then((res) => setGreeting(res.greeting));
  }, []);

  return (
    //Add this line somewhere
    <p>Server response: {greeting}</p>
  );
}
