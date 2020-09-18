import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <div>
                <hr />
              
               

                <div class="alert alert-success" role="alert">



                <Link to="/">beranda</Link> |
                <Link to="/informasi">informasi</Link> |
                <Link to="/kontak">kontak</Link> |
                </div>
                <hr />
                <p><Utama /></p>
                
                </div>
        );
    }

}

export default App;
