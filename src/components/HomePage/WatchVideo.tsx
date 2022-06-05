import React from 'react';

export default function WatchVideo() {
  return (
    <section className="ftco-section ftco-no-pt ftco-section-about ftco-no-pb bg-darken">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-6 col-md-6 col-lg-9 order-md-last img py-5"
            style={{ backgroundImage: 'url(images/xbg_3.jpg.pagespeed.ic.GVdizOGX5t.webp)' }}
          />
          <div className="col-sm-6 col-md-6 col-lg-3 py-4 text d-flex align-items-center ftco-animate">
            <div className="text-2 py-5 px-4">
              <p className="mb-5">
                <a href="https://vimeo.com/45830194" className="btn-custom popup-vimeo">
                  Watch Video
                  <span className="ion-ios-play ml-4" />
                </a>
              </p>
              <h1 className="mb-5">
                Roger <br /> Bosch
              </h1>
              <p className="mb-md-5">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia. Far far away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts.
              </p>
              <span className="signature">Roger.Bosch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
