import { useState } from 'react';

import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import ApiTest from './components/ApiTest';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <ListGroup items={items} heading={'Cities'} onSelectItem={handleSelectItem} />
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
        children="My button"
      />
      <ApiTest />
    </div>
  );
}

export default App;
