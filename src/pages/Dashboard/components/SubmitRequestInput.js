import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import styles from './SubmitRequestInput.module.css';

function SubmitRequestInput() {
  const [requestValue, setRequestValue] = useState();

  const handleInputChange = (e) => {
    setRequestValue(e.target.value);
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
        <Button color="blue">Enter</Button>
      </div>
    </div>
  );
}

export default SubmitRequestInput;
