import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../assets/logo.png';

import api from '../../services/Api';
import Dropdown from '../Dropdown/Dropdown';

export const options = [
    { value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
]

class Header extends Component {
    
    async getLoggedUser() {
        const id = this.props.match.params.id;
        const response = await api.get(`/user/${id}`);
        const user = response.data;
    }

    render() {
        return (
          <header id="main-header">
              <div className="header-content">
                  <Link to="/userHistorical" params={{ id: user.id_ }}>
                      <img src={logo} alt="Início" />
                      <p>Tesouraria PET</p>
                  </Link>
                  <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={countryOptions}
                    name='nationality'
                    defaultValue={state.extraInfo.nationality}
                    onChange={(e) => handleExtraInfoChange('nationality', e)}
                    />
              </div>
          </header>
        );
      }
}
