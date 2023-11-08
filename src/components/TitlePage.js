import React from 'react';
import Helmet from 'react-helmet';

function TitlePage (props) {
    return (
        <Helmet>
            <title>{"OVINSTAL | " + props.title}</title>
        </Helmet>
    );
};

export default TitlePage ;