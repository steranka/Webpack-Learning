// This is the standard set of includes/requires used by any/all of the JSX files
var React = require("react");

require('app.scss');

class Main extends React.Component {
    constructor(args){
        super(args);
        this.state = {};
    }
    render() {
        var rtn = (
            <div>
                <p>This is a simple app</p>
            </div>
        );

        return rtn;
    }
}

React.render(<Main/>, document.getElementById("NavId"));
