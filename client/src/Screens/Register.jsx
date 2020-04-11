import React from 'react';

// This component handles our register form
const Register = (props) => {
  const Submit = async (e) => {
    e.preventDefault();
    await props.handleRegister().then(()=> props.history.push(`/home`))
  }

  return (
    <div>
      <h2>Register</h2>
      <hr />
      <form onSubmit={Submit} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;