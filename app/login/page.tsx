
import Form from 'next/form'

export default async function Login() {

  const submitLogin = async () => {
    'use server'
    console.log('log in submitted')
  }

  return (
    <Form
    action={submitLogin}
    >
        <input type="text" id="username" name="username" placeholder='username'/>
        <input type="password" id="password" name="password" placeholder='password'/>
        <button type="submit">log in</button>
    </Form>
  )
}
