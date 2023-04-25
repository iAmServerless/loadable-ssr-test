import loadable from '@loadable/component';
import React from 'react';
import Component1 from './components/component1';
import Component3 from './components/component3';

let Component2 = loadable(() => import('./components/component2'));
let Component4 = loadable(() => import('./components/component4'));

export default function() {
    return <>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
    </>

}