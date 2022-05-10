import { useState, useEffect, Fragment } from "react";
import Child from "./Child";

const Parent = () => {
  const [eleObj, setEleObj] = useState({});
  const ele = [
    {
      name: `0-0`,
      parentId: null
    },
    {
      name: `0-1`,
      parentId: null
    },
    {
      name: `0-2`,
      parentId: null
    },
    {
      name: `0-0-0`,
      parentId: `0-0`
    }
  ];

  useEffect(() => {
    sortElementArray();
  }, []);

  const sortElementArray = () => {
    let obj = {};
    let temp = [];
    ele.forEach((item) => {
      if (item.parentId) {
        temp.push(item.name);
        obj[item.parentId] = temp;
      } else {
        obj[item.name] = [];
      }
    });
    setEleObj(obj);
    console.log(obj, "new");
  };

  const displayChildElements = (ele = []) => {
    return ele.map((element, index) => {
      console.log(element, "element");
      return <Child key={index} label={element} showOnChange={getOnChange} />;
    });
  };

  const getOnChange = (value, label) => {
    console.log(value, label);
  };

  return Object.keys(eleObj).map((element, index) => {
    return (
      <Fragment>
        <Child key={index} label={element} showOnChange={getOnChange} />
        {!!eleObj[element].length > 0 && (
          <Fragment>
            <div>{displayChildElements(eleObj[element])}</div>
          </Fragment>
        )}
      </Fragment>
    );
  });
};

export default Parent;
