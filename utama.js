import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Informasi from './informasi';
import Kontak from './kontak';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/informasi" component={Informasi}/>
        <Route path="/kontak" component={Kontak}/>
     </Switch>    
)

export default Utama;