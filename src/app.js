import React from 'react';
import ReactDom from 'react-dom';

import CellComponent from 'CellComponent';

window.onload(function(){
    let cellMountPoint = document.createElement('div');
    cellMountPoint.id = 'textCell';
    document.body.appendChild(cellMountPoint);
    ReactDom.render(<CellComponent />, cellMountPoint);
});


