import Basic_01 from "./01_basic/Basic_01";
import Basic_02 from "./01_basic/Basic_02";
import Basic_03 from "./01_basic/Basic_03";
import Basic_04 from "./01_basic/Basic_04";
import Basic_05 from "./01_basic/Basic_05";
import Basic_06 from "./01_basic/Basic_06";
import Basic_07 from "./01_basic/Basic_07";
import Component_01 from "./02_component/Component_01";
import Component_02 from "./02_component/Component_02";
import Component_03 from "./02_component/Component_03";
import Component_04 from "./02_component/Component_04";
import Component_05 from "./02_component/Component_05";
import Component_06 from "./02_component/Component_06";
import Component_07 from "./02_component/Component_07";
import Component_08 from "./02_component/Component_08";
import Component_09 from "./02_component/Component_09";

export const componentsData = [
  { id: 1, url: "/basic_01", name: "basic_使用表达式", element: <Basic_01 /> },
  { id: 2, url: "/basic_02", name: "basic_列表渲染", element: <Basic_02 /> },
  { id: 3, url: "/basic_03", name: "basic_条件渲染", element: <Basic_03 /> },
  {
    id: 4,
    url: "/basic_04",
    name: "basic_模版精简原则",
    element: <Basic_04 />,
  },
  { id: 5, url: "/basic_05", name: "basic_JS样式控制", element: <Basic_05 /> },
  {
    id: 6,
    url: "/basic_06",
    name: "basic_动态控制样式",
    element: <Basic_06 />,
  },
  {
    id: 7,
    url: "/basic_07",
    name: "basic_JSX阶段小练习",
    element: <Basic_07 />,
  },

  {
    id: 8,
    url: "/component_01",
    name: "component_事件绑定",
    element: <Component_01 />,
  },
  {
    id: 9,
    url: "/component_02",
    name: "component_事件对象e的阻止默认行为",
    element: <Component_02 />,
  },
  {
    id: 10,
    url: "/component_03",
    name: "component_事件传递额外参数",
    element: <Component_03 />,
  },
  {
    id: 11,
    url: "/component_04",
    name: "component_组件状态",
    element: <Component_04 />,
  },
  {
    id: 12,
    url: "/component_05",
    name: "component_修改组件counter案例",
    element: <Component_05 />,
  },
  {
    id: 13,
    url: "/component_06",
    name: "component_状态不可变原则",
    element: <Component_06 />,
  },
  {
    id: 14,
    url: "/component_07",
    name: "component_受控表单组件",
    element: <Component_07 />,
  },
  {
    id: 15,
    url: "/component_08",
    name: "component_非受控表单组件",
    element: <Component_08 />,
  },
  {
    id: 16,
    url: "/component_09",
    name: "component_阶段小练习",
    element: <Component_09 />,
  },
];
