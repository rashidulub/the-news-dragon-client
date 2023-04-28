import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/category/Category";
import NewsLayout from "../Layoute/NewsLayout";
import News from "../Pages/News/News/News";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Category></Category>,
            loader: ()=>fetch(`http://localhost:5000/news`)
        },
        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]

},
{
    path:'news',
    element: <NewsLayout></NewsLayout>,
    children:[
        {
            path:':id',
            element:<News></News>,
            loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
}

])

export default router;

