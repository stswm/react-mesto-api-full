import React, { useState } from 'react'

export default function Login({ onLogIn }) {
const [ email, setEmail] = useState('')
const [ password, setPassword ] = useState('')

function handleSubmit(e){
  e.preventDefault()
  if ( !email || !password ){
    return
  }
  onLogIn( email, password )
}

function handeEmailChange(e){
  setEmail(e.target.value)
}
function handePasswordChange(e){
  setPassword(e.target.value)
}

return (
  <div className='auth-form-shell'>
    <form
    className='auth-form'
      onSubmit={handleSubmit}>
      <h2
      className='auth-form__title'>Вход</h2>
      <input
      className='auth-form__inputs'
        value={email || ""}
        type="email"
        placeholder=" Email"
        onChange={handeEmailChange}
        required/>
      <input
      className='auth-form__inputs'
        value={password || ""}
        placeholder=" Пароль"
        type="password"
        onChange={handePasswordChange}
        required/>
      <button className='auth-form__btn buttonEffect'>Войти</button>
    </form>
  </div>
)
}
