import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/category/Category";
import NewsLayout from "../Layoute/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layoute/LoginLayout";
import Login from "../Pages/Login/Login";
import Ragister from "../Pages/Register/Ragister";

const router = createBrowserRouter([
    {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
        {
            path:'/',
            element:<Navigate to='/category/0 '></Navigate>

        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'register',
            element:<Ragister></Ragister>
        }
        
    ]

},

{
    path: 'category',
    element: <Main></Main>,
    children: [


        {
            path: ':id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]

},
{
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
        {
            path: ':id',
            element: <News></News>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
}

])

export default router;

