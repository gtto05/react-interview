import {REACT_ELEMENT_TYPE} from './ReactSymbols'

/**
 * @params {*} type 元素的类型
 * @params {*} config 配置对象
 * @params {*} children 大儿子
*/

const RESERVER_PROPS = {
  key:true,
  ref=true,
  __self:true,
  __source:true
}

export function createElement(type, config, children){
  const props = {};
  let key = null;
  if(config !== null) {
    key = config.key;
  }
  for(let propName in config) {
    if(!RESERVER_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName]
    }
  }

  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    props
  }

  const childrenLength = arguments.length - 2
  if(childrenLength === 1) {
    // 独生子
    props.children = children
  } else if(childrenLength > 1) {
    // 多个子元素
    const childArray = Array(childrenLength)
    for(let i=0; i < childrenLength;i++) {
      childArray[i] = arguments[i+2]
    }
    props.children = childArray
  }

  return element; // React.createElement 方法返回是一个普通的js对象，也就是虚拟DOM
}