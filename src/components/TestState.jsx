import { Button } from 'antd';
import React from 'react';

export default class TestState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `tt`,
      age: '12',
      src: 'https://www.baidu.com',
    };
  }

  change = () => {
    this.setState({
      name: 'ct',
    });
    this.setState({
      name: 'ct',
      age: '22',
      src: 'https://www.baidu.com',
    });

    setTimeout(() => {
      this.setState({
        name: 'ct',
      });
      this.setState({
        name: 'ct1',
        age: '221',
      });
    }, 1000);
  };

  render() {
    console.log('testState render===');
    return (
      <div className="tt" style={{ height: '80%' }}>
        <Button onClick={this.change}> change </Button>
        <Button
          onClick={() => {
            this.setState({
              src: 'https://juejin.im/',
            });
          }}
        >
          {' '}
          change{' '}
        </Button>
        <p>
          {this.state.name}
          <span>== {this.state.age}</span>
        </p>

        <iframe
          style={{
            width: '100%',
            height: '100%',
          }}
          src={this.state.src}
        ></iframe>
      </div>
    );
  }
}
