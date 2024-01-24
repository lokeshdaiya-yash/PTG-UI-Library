import React, { useState, useEffect } from 'react';
import { PtgInfiniteScroll } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';


export default function InfiniteScroll() {
  const [items, setItems] = useState([] as any);
  const [page, setPage] = useState(1);
  const height = "350px";
  const [hasData,setHasData] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const fetchDataFunction = async () => {
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=15`);
      const data = await response.json();
      if(data && data.length > 0){
        setItems(data);
        setHasData(true);
      }
      else{
        setHasData(false);
      }
     
    } catch (error:any) {
      console.log(error);
    } 
  };

  useEffect(() => {
    fetchDataFunction();
  }, [page]);
  
  const componentCode = `
  import { PtgInfiniteScroll } from '@ptg-ui/libs/ptg-ui-web-components-react';
  const [items, setItems] = useState([] as any);
  const [page, setPage] = useState(1);
  const height = "350px";
  const [hasData,setHasData] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const fetchDataFunction = async () => {
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=15');
      const data = await response.json();
      if(data && data.length > 0){
        setItems(data);
        setHasData(true);
      }
      else{
        setHasData(false);
      }
     
    } catch (error:any) {
      console.log(error);
    } 
  };

  useEffect(() => {
    fetchDataFunction();
  }, [page]);
  `;

  const htmlCode = `
 <PtgInfiniteScroll items={items} fetchData={fetchDataFunction} setPage={setPage} height={height} hasData={hasData}>
 `;

  return (
    <div className="row">
    <div className="col-md-11 mb-3">
      <h3 className="font-weight-bold">Infinite Scroll</h3>
    </div>
    <div className="col-1">
      <CodeIcon
        onClick={() => setShowCode((prev) => !prev)}
        fontSize="medium"
        className="show-code-icon"
      ></CodeIcon>
    </div>
    {showCode && (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    <div className="col-md-12">
   <PtgInfiniteScroll items={items} fetchData={fetchDataFunction} setPage={setPage} height={height} hasData={hasData}>
    {
        items && items.length > 0?
        <ul>
            {items.map((i)=>(
                <li key={i.id}>
                    <span>{i.id} &nbsp;</span>
                    {i.title}
                </li>
            ))}
        </ul>
        :<></>
    }
   </PtgInfiniteScroll>
   </div>
   </div>
   );
}