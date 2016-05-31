import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import dotenv from 'dotenv';

dotenv.config();

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home {process.env.YOUR_NAME}</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
