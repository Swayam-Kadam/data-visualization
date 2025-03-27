import React from 'react'

const Price = () => {
  return (
    <div>
      <div className="container d-flex justify-content-between">
        <div>
          <div className="card" style={{width: "20rem"}}>
            <div className='bg-secondary text-light p-3'>
              <h1>Free</h1>
              <p className='fs-5'>A generous free plan. Perfect for education, charities and small newsrooms.</p>
              <button className='btn btn-outline-dark text-light'>Get Start For Free</button>
            </div>
              <div className="card-body">
                <p className="fs-5">Features you'll love:</p>
                <ul>
                  <li className=""><strong>Unlimited projects,</strong> including visualizations and step-by-step stories</li>
                  <li className="mt-3"><strong>Wide range of templates,</strong> including charts, maps and more</li>
                  <li className="mt-3"><strong>Full privacy</strong> for your unpublished projects and data</li>
                  <li className="mt-3"><strong>Publish publicly or embed</strong> on your site with attribution</li>
                  <li className="mt-3"><strong>Responsive graphics</strong> that work well on desktop, mobile and tablet</li>
                  <li className="mt-3"><strong>Canva-friendly charts, </strong> easy to embed and fully interactive in docs and presentations</li>
                </ul>
                
              </div>
          </div>
        </div>
        <div>
        <div className="card" style={{width: "20rem"}}>
            <div className='bg-dark text-light p-3'>
              <h1>Publisher</h1>
              <p className='fs-5'>Powerful software solution for publishers and marketers.</p>
              <button className='btn btn-outline-secondary'>Get in touch</button>
            </div>
              <div className="card-body">
                <p className="fs-5">Everything in Free, plus:</p>
                <ul>
                  <li className=""><strong>Team features</strong>  for collaboration and project management</li>
                  <li className="mt-3"><strong>Custom theme</strong> with Google font, color palette, your logo</li>
                  <li className="mt-3"><strong>Premium templates</strong>to enhance your stories with even richer content</li>
                  <li className="mt-3"><strong>Easy scrollytelling</strong> creates rich interactive articles in your CMS</li>
                  <li className="mt-3"><strong>Visualize "live" data</strong> with our CSV format or on Google Sheets</li>
                  <li className="mt-3"><strong>HTML downloads</strong> to host embeds on your own server</li>
                  <li><strong>Email support</strong> for product questions</li>
                </ul>
                
              </div>
          </div>
        </div>
        <div>
        <div className="card" style={{width: "20rem"}}>
            <div className='bg-dark text-light p-3'>
              <h1>Enterprise</h1>
              <p className='fs-5'>Unlock the full power of the Flourish platform.</p>
              <button className='btn btn-outline-secondary'>Get in touch</button>
            </div>
              <div className="card-body">
                <p className="fs-5">Everything in Publisher, plus options:</p>
                <ul>
                  <li className=""><strong>Bespoke themes</strong>  including hosted fonts and additional design elements</li>

                  <li className="mt-3"><strong>Analytics connector </strong>to send interaction data to your existing analytics system</li>

                  <li className="mt-3"><strong>Live rendering API </strong> to integrate any Flourish graphic into third-party systems</li>

                  <li className="mt-3"><strong>Developer SDK</strong> and component library to create bespoke visualization templates</li>
                  <li className="mt-3"><strong>SAML-based SSO</strong> for enterprise account provisioning and management</li>
                  <li className="mt-3"><strong>Security features,  </strong> including password policies and session duration control
                  </li>
                </ul>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price
