import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const CreateAccount = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, agency } = form;

    if (!fullName || !phone || !email || !password || !agency) {
      setError('Please fill in all required fields.');
      return;
    }

    setUser(form);
    navigate('/account');
  };

  return (
    <div className="container-createaccount">
      <h2>Create your  PopX account</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

     <div className="input-group">
  <label htmlFor="fullName">
    Full Name<span className="required">*</span>
  </label>
  <input
    className='form'
    id="fullName"
    name="fullName"
    placeholder="Enter your name"
    value={form.fullName}
    onChange={handleChange}
    required
  />
</div>

      <div className='input-group'>
        <label htmlFor="phone">
            Phone number<span className='required'>*</span></label>
        <input
          className='form'
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
  <label htmlFor="email">
    Email address<span className="required">*</span>
  </label>
  <input
    className='form'
    id="email"
    name="email"
    placeholder="Enter your email"
    value={form.email}
    onChange={handleChange}
    required
  />
</div>

      <div className='input-group'>
        <label htmlFor="password">
            Password<span className='required'>*</span>
            </label>
        <input
         className='form'
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input-group'>
        <label htmlFor="company">Company name</label>
        <input
         className='form'
          id="company"
          name="company"
          placeholder="Enter your company name"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div className="input-group-agency">
  <label>
    Are you an Agency?<span className="required">*</span>
  </label>
   <div className='radio-agency'>
    <label>
    <input 
      className='radio-input'
      type="radio"
      name="agency"
      value="Yes"
      checked={form.agency === 'Yes'}
      onChange={handleChange}
      required
    />{' '}
    Yes
   </label>
    <label>
    <input
      className='radio-input'
      type="radio"
      name="agency"
      value="No"
      checked={form.agency === 'No'}
      onChange={handleChange}
      required
    />{' '}
    No
    </label>
  </div>
</div>

      <button onClick={handleSubmit} className="btn">Create Account</button>
    </div>
  );
};

export default CreateAccount;
