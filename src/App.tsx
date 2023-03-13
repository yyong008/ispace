// import './App.css'
import { Space } from "../dist/index.js";

function App() {
  return (
    <div className="App">
      <div>
        <button>按钮1</button>
        <button>按钮2</button>
      </div>
      <div>
        <Space>
          <button>按钮1</button>
          <button>按钮2</button>
        </Space>
      </div>
      <Space>
        <div>this is content 1</div>
        <div>that is content 2</div>
      </Space>
    </div>
  );
}

export default App;
