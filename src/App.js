import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddCategory from './component/AddCategory';
import Category from './component/Category';
import MainNav from './component/MainNav';
import RootLayout from './component/RootLayout';
import Detail from './component/Detail';
import Update from './component/Update';


const router = createBrowserRouter([
  {path : '', element : <RootLayout/>, children : [
    {path :'', element : <Category/>},
    {path : 'category', element: <Category/>},
    {path : 'add-category', element : <AddCategory/>},
    {path : 'detail/:id', element : <Detail/>},
    {path : 'edit/:id', element : <Update/>}
  ]}
])



function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
