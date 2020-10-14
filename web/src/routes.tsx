import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Landing from './screens/Landing';
import OrphanageMap from "./screens/OrphanageMap";


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanageMap} />
        </BrowserRouter>
    );
}

export default Routes;