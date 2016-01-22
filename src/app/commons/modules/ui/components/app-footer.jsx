define([
    'react',
    'mdl'
], function (React, componentHandler) {

    /** @jsx React.DOM */
    var Component = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <footer className="mdl-mini-footer">
                    <div className="mdl-mini-footer__left-section">
                        <div className="mdl-logo">Title</div>
                        <ul className="mdl-mini-footer__link-list">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Privacy & Terms</a></li>
                        </ul>
                    </div>
                </footer>
            );
        }
    });

    return Component;
});