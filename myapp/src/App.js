import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Body from './Body.js'
import {Provider} from 'react-redux'
import store from './store.js'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Maincontainer from './Maincontainer.js'
import Card2 from './Card2.js'
function App() {
  //<p className='bg-red-800'> hello world</p>
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Body></Body>,
      children:[
        {
          path:'/',
          element:<Maincontainer></Maincontainer>
        },
        {
          path:'/watch',
          element:<Card2></Card2>
        },
      ]
    }
  ])
  return (
     <Provider store={store}>
     <div className="App">
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
