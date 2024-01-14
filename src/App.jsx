import {  Hero,
  Footer,
  CustomerReviews,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,} from './sections/index'

const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-1 wide:padding-r padding-b">hero</section>
    <section className="padding"></section>
    <section className="padding">SuperQuality</section>
    <section className="padding-x py-10">Services</section>
    <section className="padding">SpecialOffer</section>
    <section className=" bg-pale-blue padding">CustomerReviews</section>
    <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
    <section className="padding bg-black padding-x padding-t pb-8">Footer</section>
  </main>
);

export default App;
