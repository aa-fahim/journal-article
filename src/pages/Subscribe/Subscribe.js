import React from 'react';
import './Subscribe.css';
import { Button } from 'semantic-ui-react';
import SubscriptionPlan from './components/SubscriptionPlan';

const subscribeButtonStyling = {
  color: 'white',
  backgroundColor: '#82b640',
  width: '100%',
  marginTop: '25px',
};

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = 'pw_6046ca8786282';
    s.src = 'https://app.paywhirl.com/pwa.js';
    s.crossOrigin = 'anonymous';
    const paywhirl = document.createElement('script');
    paywhirl.innerHTML =
      "paywhirl('button',{autoscroll: 1, domain:'fahim-s-company', uuid:'7a3fd494-7d40-461a-aa0d-b93601feff6f', button_image: '' },'pw_604835559b7f6');";
    //"paywhirl('widget',{autoscroll: 1, initial_autoscroll: 0, domain:'fahim-s-company', uuid:'7a3fd494-7d40-461a-aa0d-b93601feff6f'},'pw_604e9f2e0745b'); ";

    if (!this.myRef.current) {
      this.myRef.current.appendChild(s);
      this.myRef.current.appendChild(paywhirl);
    }
  }

  render() {
    const { labels } = Subscribe.constants;

    return (
      <div className="subscribe-page-container">
        {/*<div
          dangerouslySetInnerHTML="<script    type='text/javascript'  id='pw_6046d9184d27c'
              src='https://app.paywhirl.com/pwa.js'
            >paywhirl('widget',{autoscroll: 1, initial_autoscroll: 0, domain:'fahim-s-company', uuid:'3a1ed435-0c8e-4018-989d-bf4c4acf6081'},'pw_6046d9184d27c');</script>"
        ></div>*/}
        <div ref={this.myRef} />
        <div className="subscription-plans">
          {labels.map((label) => (
            <div className="subscription-plan" key={label.key}>
              <SubscriptionPlan
                duration={label.duration}
                price={label.price}
                perDuration={label.perDuration}
                autoNewalMsg={label.autoNewalMsg}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Subscribe.constants = {
  labels: [
    {
      key: 1,
      duration: '1 Month',
      price: '$1.00',
      perDuration: 'per month',
      autoNewalMsg: 'Auto-renews monthly',
    },
    {
      key: 2,
      duration: '1 Year',
      price: '$10.00',
      perDuration: 'per year',
      autoNewalMsg: 'Auto-renews annually',
    },
  ],
};

export default Subscribe;
