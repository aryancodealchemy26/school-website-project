const Login = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 w-96">
    <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
    <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" />
    <input type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded" />
    <button className="w-full bg-blue-600 text-white py-2 rounded font-bold">Sign In</button>
  </div>
);
export default Login;