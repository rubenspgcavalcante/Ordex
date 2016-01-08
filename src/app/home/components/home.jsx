define(['react', 'mdl'], function (React, componentHandler) {

    var HeaderLink = React.createClass({
        render: function () {
            return <a className="mdl-navigation__link" href={this.props.link.href}>{this.props.link.title}</a>
        }
    });

    /** @jsx React.DOM */
    var Home = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--8-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tenetur et quisquam quo, aut
                            obcaecati eveniet! Sunt modi cupiditate commodi veniam, debitis eum alias eligendi iste!
                            Blanditiis animi aspernatur corrupti.</p>
                    </div>

                    <div className="mdl-cell  mdl-cell--4-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tenetur et quisquam quo, aut
                            obcaecati eveniet! Sunt modi cupiditate commodi veniam, debitis eum alias eligendi iste!
                            Blanditiis animi aspernatur corrupti.</p>
                    </div>
                </div>
            );
        }
    });

    return Home;
});