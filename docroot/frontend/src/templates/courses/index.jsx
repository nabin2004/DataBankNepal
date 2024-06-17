import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const Courses = () => (
    <Layout title="Courses">
        <div className={`dc-page ${config.container}`}>
            <h1>Courses</h1>
            <div className="dc-page-content row">
                <div className="col-md-9 col-sm-12">
                    <p>Welcome to our course catalog! Here you can find a variety of courses to help you advance your skills and knowledge.</p>
                    <p>Currently, no courses are available. Please check back later.</p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <Announcement variation="info" heading="Note">
                        <p>We are working on adding new courses. Stay tuned for updates!</p>
                    </Announcement>
                </div>
            </div>
        </div>
    </Layout>
);

export default Courses;
