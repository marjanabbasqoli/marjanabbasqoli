import { useState } from "react";
import './Tabs.css';

const tabs = [
    {
      id: 1,
      title: 'tab1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel placeat rem iusto, optio unde illum, officiis quasi iure iste rerum laboriosam ut repellat laborum nihil laudantium. Eius, optio explicabo.'
    },
    {
      id: 2,
      title: 'tab2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel placeat rem iusto, optio unde illum, officiis quasi iure iste rerum laboriosam ut repellat laborum nihil laudantium. Eius, optio explicabo.'
    },
    {
      id: 3,
      title: 'tab3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel placeat rem iusto, optio unde illum, officiis quasi iure iste rerum laboriosam ut repellat laborum nihil laudantium. Eius, optio explicabo.'
    },
    {
      id: 4,
      title: 'tab4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel placeat rem iusto, optio unde illum, officiis quasi iure iste rerum laboriosam ut repellat laborum nihil laudantium. Eius, optio explicabo.'
    }
]

function Tabs() {
    const [activeTab,setActiveTab] = useState(+localStorage.getItem('tab') || 1);

    const clickHanlder = (id) => {
        setActiveTab(id);
        localStorage.setItem('tab', id);
    }

  return (
    <>
      <div className="header">
        <h1>Tabs Component with React</h1>
        <ul>
          {tabs.map(tab => <li key={tab.id} className={tab.id === activeTab ? 'active' : ''} onClick={() => clickHanlder(tab.id)}>{tab.title}</li>)}
        </ul>
      </div>
      

      <div className="content">
        {tabs.map(tab => <div key={tab.id} className={tab.id === activeTab ? 'active' : ''}>
          <div>
            <h2>Content {tab.id}</h2>
            {tab.content}
          </div>
        </div>)}
      </div>
    </>
  )
}

export default Tabs