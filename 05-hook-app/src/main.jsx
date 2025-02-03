import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Importacion del React Route para poder moverse entre paginas
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {HooksApp} from "./HooksApp.jsx";
import {CounterApp} from "./01-useState/CounterApp.jsx";
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook.jsx";
import {SimpleForm} from "./02-useEffect/SimpleForm.jsx";
import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook.jsx";
import {MultipleCustomHooks} from "./03-Examples/MultipleCustomHooks.jsx";
import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
import {Layout} from "./05-useLayoutEffect/Layout.jsx";
import {Memorize} from "./06-memos/Memorize.jsx";
import {MemoHook} from "./06-memos/MemoHook.jsx";
import {CallBackHook} from "./06-memos/CallBackHook.jsx";
import {Padre} from "./07-tarea-memo/Padre.jsx";
// import './08-useReducer/intro-reducer.js'
import {TodoApp} from "./08-useReducer/TodoApp.jsx";
import {MainApp} from "./09-useContext/MainApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/*<HooksApp />*/}
  //   {/*<CounterApp />*/}
  //   {/*<CounterWithCustomHook />*/}
  //   {/*<SimpleForm />*/}
  //   {/*<FormWithCustomHook />*/}
  //   {/*<MultipleCustomHooks />*/}
  //   {/*<FocusScreen />*/}
  //   {/*<Layout />*/}
  //   {/*<Memorize />*/}
  //   {/*<MemoHook  />*/}
  //   {/*<CallBackHook  />*/}
  //   <Padre  />
  //
  // </React.StrictMode>,
  //   <TodoApp  />
    <BrowserRouter>
        <MainApp  />
    </BrowserRouter>
)
