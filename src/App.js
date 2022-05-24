import React, { useState, useRef } from "react";
import './App.css'

function App() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [itemListData, setItemListData] = useState([
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/6.jpg",
      id: 1,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/5.jpg",
      id: 2,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/3.jpg",
      id: 3,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/2.jpg",
      id: 4,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/1.jpg",
      id: 5,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/7.jpg",
      id: 6,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/8.jpg",
      id: 7,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/9.jpg",
      id: 8,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/4.jpg",
      id: 9,
    },
    {
      img: "https://material-components-web.appspot.com/images/photos/3x2/10.jpg",
      id: 10,
    },
  ]);

  const startDragPoint = (e, position) => {
    dragItem.current = position;
  };

  const enterDragPoint = (e, position) => {
    dragOverItem.current = position;
  };

  const endDragPoint = (e) => {
    const copyItemListData = [...itemListData];
    const dragItemContent = copyItemListData[dragItem.current];
    copyItemListData.splice(dragItem.current, 1);
    copyItemListData.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setItemListData(copyItemListData);
  };

  return (
    <div className="container">
      {itemListData &&
        itemListData.map((item, index) => (
          <div
            className="dragAndDropContainer"
            onDragStart={(e) => startDragPoint(e, index)}
            onDragEnter={(e) => enterDragPoint(e, index)}
            onDragEnd={endDragPoint}
            key={index}
            draggable
          >
            <img width="100%" src={item.img} />
          </div>
        ))}
    </div>
  );
}
export default App;
