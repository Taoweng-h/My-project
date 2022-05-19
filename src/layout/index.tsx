
import Header from './component/Header';
import Sider from './component/Sider';
import Content from './component/Content';

function Layout(){
   return (
     <div className='layout'>
       <Header></Header>
       <div className="main">
         <Sider></Sider>
         <Content></Content>
       </div>
     </div>
   )
}

export default Layout