import "./Login.css";
function Login() {
  function Regist() {
    window.location.href = "/register.html";
  }
  return (
    <div id="container">
      <div id="image">
        <div id="imageText">
          AI Geneative world <br></br>Lives yor life
        </div>
      </div>
      <div id="Logintext">
        <br />
        Welcome Back!!
      </div>
      <div id="form">
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" placeholder="Enter your name" />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <br />
        <br />

        <button type="submit">Login</button>
        <br></br>
        <br></br>
        <div id="sinup">
          Don't have account?{" "}
          <p>
            <span onClick={Regist}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
