/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
*/
{/*--Import Components for routing using lazy loading--*/ }
import { lazy } from "react";
const Object3d = lazy(()=> import("../../app/components/object3d/Object3d"));
const Object3d1 = lazy(()=> import("../../app/components/object3d1/Object3d1"));
const ObjectMove = lazy(()=> import("../../app/components/objectMove/ObjectMove"));
{/*--Declare routes and component for dynamic load--*/ }
const routing = [
  {
    path: 'ptg-react-animations/object3d',
    component: Object3d,
  },
  {
    path: 'ptg-react-animations/object3d1',
    component: Object3d1,
  },
  {
    path: 'ptg-react-animations/objectMove',
    component: ObjectMove,
  },

];
export default routing;


