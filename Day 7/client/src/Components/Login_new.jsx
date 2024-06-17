import React from 'react'

function Login_new() {
    const handleSubmit = async (e) => {
        .then(res=>{localStorage.setItem('jwtToken', res.data.token)})

        const decodeToken = jwtDecode(res.data.token);
        const userRole = decodeToken.role;

        console.log('Login successful');
        setError('');
        setSuccess(true);

        switch (userRole) {
            case 'admin':
                history.push('/admin');
                break;
            case 'user':
                history.push('/user');
                break;
            default:
                history.push('/');
        }
  return (
    <div>Login_new</div>
  )
}

export default Login_new