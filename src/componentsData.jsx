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
import Communicate_01 from "./03_communicate/Communicate_01";
import Communicate_02 from "./03_communicate/Communicate_02";
import Communicate_03 from "./03_communicate/Communicate_03";
import Communicate_04 from "./03_communicate/Communicate_04";
import Communicate_05 from "./03_communicate/Communicate_05";
import Communicate_06 from "./03_communicate/Communicate_06";
import Communicate_07 from "./03_communicate/Communicate_07";
import { ComAdvanced_01 } from "./04_componentAdvanced/ComAdvanced_01";
import { ComAdvanced_02 } from "./04_componentAdvanced/ComAdvanced_02";
import { ComAdvanced_03 } from "./04_componentAdvanced/ComAdvanced_03";
import { ComAdvanced_04 } from "./04_componentAdvanced/ComAdvanced_04";
import { ComAdvanced_05 } from "./04_componentAdvanced/ComAdvanced_05";
import { ComAdvanced_06 } from "./04_componentAdvanced/ComAdvanced_06";
import { ComAdvanced_07 } from "./04_componentAdvanced/ComAdvanced_07";

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

  /* ------------------------ 组件基础 ------------------------ */

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

  /* ------------------------ 组件通信 ------------------------ */
  {
    id: 17,
    url: "/communicate_01",
    name: "communicate_基础实现",
    element: <Communicate_01 />,
  },
  {
    id: 18,
    url: "/communicate_02",
    name: "communicate_pros接收数据类型的说明",
    element: <Communicate_02 />,
  },
  {
    id: 19,
    url: "/communicate_03",
    name: "communicate_pros解构赋值",
    element: <Communicate_03 />,
  },
  {
    id: 20,
    url: "/communicate_04",
    name: "communicate_子传父的基础实现",
    element: <Communicate_04 />,
  },
  {
    id: 21,
    url: "/communicate_05",
    name: "communicate_兄弟通讯的基础实现",
    element: <Communicate_05 />,
  },
  {
    id: 22,
    url: "/communicate_06",
    name: "communicate_跨组件通讯context对象的使用",
    element: <Communicate_06 />,
  },
  {
    id: 23,
    url: "/communicate_07",
    name: "communicate_阶段小练习",
    element: <Communicate_07 />,
  },
  /* ------------------------ 组件高级 ------------------------ */
  {
    id: 24,
    url: "/comAdvanced_01",
    name: "comAdvanced_props的children属性",
    element: <ComAdvanced_01 />,
  },
  {
    id: 25,
    url: "/comAdvanced_02",
    name: "comAdvanced_props类型效验",
    element: <ComAdvanced_02 />,
  },
  {
    id: 26,
    url: "/comAdvanced_03",
    name: "comAdvanced_props默认值的设置",
    element: <ComAdvanced_03 />,
  },
  {
    id: 27,
    url: "/comAdvanced_04",
    name: "communicate_阶段小练习",
    element: <ComAdvanced_04 />,
  },
  {
    id: 28,
    url: "/comAdvanced_05",
    name: "communicate_阶段小练习",
    element: <ComAdvanced_05 />,
  },
  {
    id: 29,
    url: "/comAdvanced_06",
    name: "communicate_阶段小练习",
    element: <ComAdvanced_06 />,
  },
  {
    id: 30,
    url: "/comAdvanced_07",
    name: "communicate_阶段小练习",
    element: <ComAdvanced_07 />,
  },
];
