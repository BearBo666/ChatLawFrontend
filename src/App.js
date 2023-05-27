/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-05-25 09:42:16
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-05-25 13:33:22
 * @FilePath: \workplace\React\web-dev-projects\personal-portfolio\src\App.js
 * @Description: 
 */
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
