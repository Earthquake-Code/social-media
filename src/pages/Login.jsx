function Login() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <form method="POST">
            <label>Nome:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="text" />
            <input type="submit" />
        </form>
      </div>
  )
}

export default Login
