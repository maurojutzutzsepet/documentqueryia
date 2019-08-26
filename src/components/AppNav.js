import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

export default class AppNav extends Component{
    render(){
        return(
            <div>
                <AppBar className="fixed">
                    <ToolBar>
                               <h2>Document Query</h2>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}