var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<header hey="header" className="app__header">
				<div className="container">
					<h1>Amadurou</h1>
				</div>
			</header>
		);
	}
});

module.exports = Header;
