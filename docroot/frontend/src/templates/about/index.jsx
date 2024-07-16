import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';

const About = () => (
    <Layout title="About">
        <div className={`dc-page ${config.container}`}>
            <h1>About Data Bank Nepal</h1>
            <div className="dc-page-content row">
                <div className="col-md-9 col-sm-12">
                    <p>
                        In an era where information is power, Data Bank Nepal stands at the forefront of transforming decision-making processes in Nepal. Our mission is to provide unparalleled access to accurate, comprehensive, and actionable data, enabling individuals, businesses, and policymakers to make informed, evidence-based decisions. We utilize rigorous statistical methods and modern data science techniques, including data engineering, to ensure the reliability and relevance of our data offerings.
                    </p>
                    <h2>Why Data Bank Nepal?</h2>
                    <p>
                        In Nepal, traditional beliefs, crowd opinions, and high-pitched rhetoric often overshadow the need for factual analysis. Even seasoned politicians rely on proverbs to answer public opinion and win debates. At Data Bank Nepal, we believe it’s time for a change. In the 21st century, proverbs are outdated; data is the new wisdom.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        To create a Nepal where decisions at every level are driven by real, verifiable facts and insights, fostering a more informed, efficient, and progressive society.
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        To bridge the gap between raw data and meaningful insights, transforming how Nepalese society perceives and utilizes information. By championing data literacy and accessibility, we aim to elevate the standard of decision-making across all sectors.
                    </p>
                    <h2>Join Us</h2>
                    <p>
                        Embrace the power of data with Data Bank Nepal. Let’s move beyond the noise and make decisions based on facts, not just folklore. Together, we can build a future where data-driven decisions lead to sustainable development and a prosperous Nepal.
                    </p>
                </div>
            </div>

            <div className="dc-page-content row">

            </div>
        </div>
    </Layout>
);

export default About;
