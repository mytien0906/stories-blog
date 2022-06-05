/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import CommentList from '../Comments/CommentList';
import FormAddComment from '../Comments/FormAddComment';
import TagList from '../Tags/TagList';
import AuthorInfo from './AuthorInfo';
import RecentPostList from './Sidebar/RecentPost/RecentPostList';
import SidebarParagraph from './Sidebar/RecentPost/SidebarParagraph';
import SidebarCategories from './Sidebar/SidebarCategories';
import SidebarSearch from './Sidebar/SidebarSearch';

export default function DetailPost() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-lg-last ftco-animate fadeInUp ftco-animated">
            <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia
              suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto
              optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia
              officia optio deserunt molestiae voluptates soluta architecto tempora.
            </p>
            <p>
              <img
                src="/images/ximage_6.jpg.pagespeed.ic.rq1QUbhUd6.webp"
                alt=""
                className="img-fluid"
                data-pagespeed-url-hash={546839561}
              />
            </p>
            <p>
              Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis
              repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate
              quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
              deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse
              vero ut ea, repudiandae suscipit!
            </p>
            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
            <p>
              Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius
              aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut
              officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex
              earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic
              non? Debitis commodi aut, adipisci.
            </p>
            <p>
              <img
                src="/images/ximage_4.jpg.pagespeed.ic.Ryju-0Z3nA.webp"
                alt=""
                className="img-fluid"
                data-pagespeed-url-hash={4252807015}
              />
            </p>
            <p>
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil
              explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate
              maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur
              perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim
              veniam, modi rem maiores.
            </p>
            <p>
              Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi
              rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum
              consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id
              quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore,
              quia laboriosam harum excepturi ea.
            </p>
            <p>
              Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor
              distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci
              modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et
              pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae
              numquam nam ab voluptatibus culpa, tenetur recusandae!
            </p>
            <p>
              Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia
              adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto
              commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure,
              reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione.
              Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?
            </p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <TagList/>
            </div>
            <AuthorInfo/>
            <div className="pt-5 mt-5">
              <h3 className="mb-5">6 Comments</h3>
              <CommentList/>
              <FormAddComment/>
            </div>
          </div>
          <div className="col-lg-4 sidebar pr-lg-5 ftco-animate fadeInUp ftco-animated">
            <SidebarSearch />
            <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
              <SidebarCategories />
            </div>
            <RecentPostList />
            <div className="sidebar-box ftco-animate">
              <h3 className="heading mb-4">Tag Cloud</h3>
              <TagList/>
            </div>
            <SidebarParagraph />
          </div>
        </div>
      </div>
    </section>
  );
}
