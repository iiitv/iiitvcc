import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const val = this.state.title;
        if(val==="") return;
        console.log("Post title: " + val);
        this.setState({title: ''});
    }
    render() {
        return (
            <div>
                <form className="form-group" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group wt">
                        <label>Title</label>
                        <input
                            className="form-control"
                            placeholder="Post title"
                            value={this.state.title}
                            onChange={e => this.setState({title: e.target.value})} />
                    </div>
                    <button className="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        )
    }
}

export default Header;