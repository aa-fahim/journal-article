import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import styles from './SubmitRequestInput.module.css';
import axios from 'axios';

const buttonStyle = {
  marginLeft: '5px',
};

function SubmitRequestInput() {
  const [requestValue, setRequestValue] = useState();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setRequestValue(e.target.value);
  };

  const submitRequest = async () => {
    let payload = { email: 'fahim_toronto@hotmail.com', doi: requestValue };

    try {
      setLoading(true);
      await axios
        .post('http://localhost:3001/journal-article', payload)
        .then((res) => console.log(res.data.message));
    } catch {
      console.log('some error happened');
    }
    setLoading(false);
  };

  return (
    <div>
      <div className={styles['header-text']}>Submit A Request</div>
      <div className={styles['input-wrapper']}>
        <Input
          id="email"
          icon="mail"
          iconPosition="left"
          placeholder="Enter the DOI here"
          value={requestValue}
          onChange={handleInputChange}
        />
        <Button
          color="blue"
          style={buttonStyle}
          onClick={submitRequest}
          loading={loading}
          disabled={loading}
        >
          Enter
        </Button>
      </div>
    </div>
  );
}

export default SubmitRequestInput;
