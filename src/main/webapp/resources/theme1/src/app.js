var HermesApp = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});
 
React.render(<HermesApp name="Hermes" />, document.getElementById('app'));