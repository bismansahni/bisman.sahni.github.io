import React from 'react';
import awsLogo from './images/awslogo.png';
import sqllogo from './images/sqllogo.png';
import mongologo from './images/mongologo.png';
import pythonlogo from './images/pythonlogo.png';
import javalogo from './images/javalogo.png';
import clogo from './images/clogo.png';
import unitylogo from './images/unitylogo.png';


function Skills() {
    return (
        <div className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {/* Each skill-card div contains one skill-icon image */}
                <div className="skill-card">
                    <img src={awsLogo} alt="AWS" className="skill-icon" />
                </div>
                <div className="skill-card">
                    <img src={sqllogo} alt="SQL" className="skill-icon" />
                </div>
                <div className="skill-card">
                    <img src={mongologo} alt="MongoDB" className="skill-icon" />
                </div>
                <div className="skill-card">
                    <img src={pythonlogo} alt="Python" className="skill-icon" />
                </div>
                <div className="skill-card">
                    <img src={javalogo} alt="Java" className="skill-icon" />
                </div>
                <div className="skill-card">
                    <img src={clogo} alt="C Language" className="skill-icon" />
                </div>
                <div className="skill-card">
                    <img src={unitylogo} alt="Unity" className="skill-icon" />
                </div>
                {/* Add more skill-cards as needed */}
            </div>
        </div>
    );
}

export default Skills;