import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { listen } from "./redux/listener";
import { AppRoutes } from "./routes";
// function Home() {
//   return <h1>Home</h1>;
// }
// function Categories() {
//   return (
//     <>
//       <h1>Categories</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>
//               <Link to="/categories/1234">Seminar</Link>
//             </td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>
//               <Link to="/categories/5678">Event</Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }
// function CategoriesDetail() {
//   let { id } = useParams();
//   return <h1>Categories : {id}</h1>;
// }
// function About() {
//   const [searchParams] = useSearchParams();
//   console.log(searchParams.get("name"));
//   return (
//     <>
//       <h1>Name : {searchParams.get("name")}</h1>
//     </>
//   );
// }

// function Login() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <button onClick={() => navigate("/")}>Submit</button>
//     </>
//   );
// }

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
