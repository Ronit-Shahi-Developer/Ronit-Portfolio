import React from 'react'

const SkillPage = () => {
    return (
        <div>
         <section className="section gray-bg" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Technical Skills</h2>
              </div>
            </div>
          </div>


    <div class="container py-5">
        <div class="row">
            <div class="col-lg-10 mx-auto bg-white rounded shadow">

                {/* <!-- Fixed header table--> */}
                <div class="table-responsive">
                    <table class="table table-fixed">
                        <thead>
                            <tr>
                                <th scope="col" class="col-4">#</th>
                                <th scope="col" class="col-8">Tools & technologies i've worked on or working on</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="col-4">Programming Languages: </th>
                                <td class="col-8">C, PHP, HTML, JAVA, PYTHON, CSS, JAVASCRIPT</td>
                                
                            </tr>
                            <tr>
                                <th scope="row" class="col-4">Framework: </th>
                                <td class="col-8"> Laravel, Django, React, Bootstrap, Express</td>
                                
                            </tr>
                            <tr>
                                <th scope="row" class="col-4">Database: </th>
                                <td class="col-8">MySQL, SQL, PostgreSQL, SQLite, Mongo dB </td>
                                
                            </tr>
                            <tr>
                                <th scope="row" class="col-4">Operating System: </th>
                                <td class="col-8">Linux, Windows OS</td>
                                
                            </tr>

                            <tr>
                                <th scope="row" class="col-4">Applications: </th>
                                <td class="col-8">Photoshop, Illustrator, WordPress, Unity, Microsoft
office (word, excel, powerpoint, access)
</td>
                                
                            </tr>

                            <tr>
                                <th scope="row" class="col-4">Other: </th>
                                <td class="col-8">Restful API services, oAuth authentication, JWT authentication, Ajax, Axios, Redux, Postman, AWS
deployment, GitHub version control, Materialize-UI
</td>
                                
                            </tr>

                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
        </div>
        </section>
        </div>
    )
}

export default SkillPage