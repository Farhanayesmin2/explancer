
import Main from "../Layout/Main";
import NotFound from "../NotFound/NotFound";
import Home from "../Pages/Home/Home";




const { createBrowserRouter } = require("react-router-dom");

 export  const router = createBrowserRouter([

     {
         path: '/',
         element: <Main></Main>,
    children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
         ]   
        
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }


 ])

export default router;